import { beforeEach, describe, expect, it, vi } from "vitest";

import prismaMock from "@/lib/__mocks__/prisma";
import { generateListCars, sampleCar } from "@/lib/__mocks__/data";

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

  describe("getAllCars", () => {
    it("should return an empty cars", async () => {
      prismaMock.car.findMany.mockResolvedValueOnce([]);
      prismaMock.car.count.mockResolvedValueOnce(0);

      const data = await CarService.getAllCars();
      expect(data.total).toBe(0);
      expect(data.items).toStrictEqual([]);
    });

    it("should terurn total and items", async () => {
      const mockAllCars = generateListCars(12, undefined);
      const items = mockAllCars.slice(0, 4);
      const total = mockAllCars.length;

      prismaMock.car.findMany.mockResolvedValueOnce(items);
      prismaMock.car.count.mockResolvedValueOnce(total);
      const data = await CarService.getAllCars();

      expect(data).toStrictEqual({
        total,
        items,
      });
    });
  });

  describe("searchCars", () => {
    it("should return search results", async () => {
      prismaMock.car.findMany.mockResolvedValue([]);
      await CarService.searchCars("test");
      expect(prismaMock.car.findMany).toHaveBeenCalledOnce();
    });
  });

  describe("getCarBySlug", () => {
    it("should return a car", async () => {
      prismaMock.car.findUnique.mockResolvedValueOnce(sampleCar);
      const car = await CarService.getCarBySlug(sampleCar.slug);
      expect(car).toStrictEqual(sampleCar);
    });
  });
});
