import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import prismaMock from "@/lib/__mocks__/prisma";
import { generateListCars } from "@/lib/__mocks__/data";

import PopularCars from "@/components/home/PopularCars";
import { render, screen } from "@testing-library/react";

vi.mock("@/lib/prisma.ts");

describe("@/components/home/PopularCars", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should render wrapper title and popular cars", async () => {
    const mockInitialCars = generateListCars(2, true);
    prismaMock.car.findMany.mockResolvedValue(mockInitialCars);

    const jsx = await PopularCars();
    render(jsx);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Popular Car",
    });
    const items = screen.getAllByRole("link", { name: "Rent now" });

    expect(heading).toBeInTheDocument();
    expect(items.length).equal(mockInitialCars.length);
  });
});
