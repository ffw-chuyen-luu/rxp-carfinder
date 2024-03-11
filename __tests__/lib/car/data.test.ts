import { beforeEach, describe, expect, it, vi } from "vitest";

import prismaMock from "@/lib/__mocks__/prisma";
import { generateListCars } from "@/lib/__mocks__/data";

import * as CarService from "@/lib/car/data";

vi.mock("@/lib/prisma.ts");

describe("@/lib/car/data.ts", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("getPopularCars", () => {
    it("should return an empty cars", async () => {
      prismaMock.car.findMany.mockResolvedValueOnce([]);
      const cars = await CarService.getPopularCars();
      expect(cars.length).toBe(0);
    });

    it("should return list popular cars", async () => {
      const mockCars = generateListCars(4, true);
      prismaMock.car.findMany.mockResolvedValueOnce(mockCars);
      const cars = await CarService.getPopularCars();
      expect(prismaMock.car.findMany).toBeCalled();
      expect(cars.length).toBe(mockCars.length);
    });
  });
});
