import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import prismaMock from "@/lib/__mocks__/prisma";
import { generateListCars } from "@/lib/__mocks__/data";
import { NUMBER_OF_CARS_TO_FETCH } from "@/lib/types";

import AllCars from "@/components/home/AllCars";

vi.mock("@/lib/prisma.ts");

describe("@/components/home/AllCars", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should show list cars and pagination", async () => {
    const total = 2 * NUMBER_OF_CARS_TO_FETCH;
    const mockInitialCars = generateListCars(
      NUMBER_OF_CARS_TO_FETCH,
      undefined
    );
    prismaMock.car.findMany.mockResolvedValue(mockInitialCars);
    prismaMock.car.count.mockResolvedValue(total);

    const jsx = await AllCars();
    render(jsx);

    const heading = screen.getByRole("heading", { level: 2, name: "All Cars" });
    const pagination = screen.getByRole("button", { name: "Load more" });

    expect(heading).toBeInTheDocument();
    expect(pagination).toBeInTheDocument();
  });

  it("should show list cars only", async () => {
    const mockInitialCars = generateListCars(
      NUMBER_OF_CARS_TO_FETCH,
      undefined
    );
    prismaMock.car.findMany.mockResolvedValue(mockInitialCars);
    prismaMock.car.count.mockResolvedValue(NUMBER_OF_CARS_TO_FETCH);

    const jsx = await AllCars();
    render(jsx);

    const pagination = screen.queryByText("Load more");

    expect(pagination).toBeNull();
  });

  it("should get more cars when click load more", async () => {
    const total = 2 * NUMBER_OF_CARS_TO_FETCH;
    const allCars = generateListCars(total, undefined);

    prismaMock.car.count.mockResolvedValue(total);
    prismaMock.car.findMany.mockResolvedValueOnce(
      allCars.slice(0, NUMBER_OF_CARS_TO_FETCH)
    );

    const jsx = await AllCars();
    render(jsx);

    const pagination = screen.getByRole("button", { name: "Load more" });

    prismaMock.car.findMany.mockResolvedValueOnce(
      allCars.slice(NUMBER_OF_CARS_TO_FETCH, total)
    );

    userEvent.click(pagination);

    await waitFor(() => {
      const results = screen.getAllByRole("link", { name: "Rent now" });
      expect(results.length).equal(total);
    });
  });
});
