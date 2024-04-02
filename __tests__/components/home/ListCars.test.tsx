import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import prismaMock from "@/lib/__mocks__/prisma";
import { generateListCars } from "@/lib/__mocks__/data";
import ListCars from "@/components/home/ListCars";

vi.mock("@/lib/prisma.ts");

describe("@/components/home/ListCars", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should see block title and initialCars", () => {
    const mockInitialCars = generateListCars(4, undefined);
    const wrapperTitle = "List Cars";

    render(
      <ListCars
        title={wrapperTitle}
        initialCars={mockInitialCars}
        pagination={true}
      />
    );

    const title = screen.getByRole("heading", {
      level: 2,
      name: wrapperTitle,
    });

    const firstCarTitle = screen.getByRole("heading", {
      level: 2,
      name: mockInitialCars[0].title,
    });

    const pagination = screen.getByRole("button", { name: "Load more" });

    expect(title).toBeDefined();
    expect(firstCarTitle).toBeDefined();
    expect(pagination).toBeDefined();
  });

  it("should see car and pagination", async () => {
    const mockAllCars = generateListCars(12, undefined);
    const items = mockAllCars.slice(0, 8);
    const total = mockAllCars.length;

    prismaMock.car.findMany.mockResolvedValue(items);
    prismaMock.car.count.mockResolvedValue(total);

    render(<ListCars initialCars={[]} pagination={true} />);

    fireEvent.click(screen.getByText("Load more"));

    expect(screen.queryByText("Loading...")).toBeDefined();

    await screen.findAllByRole("heading");

    const carTitle = screen.getByRole("heading", {
      level: 2,
      name: items[0].title,
    });

    expect(carTitle).toBeDefined();
  });
});
