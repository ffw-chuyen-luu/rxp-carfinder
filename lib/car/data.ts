import prisma from "@/lib/prisma";
import { Car, NUMBER_OF_CARS_TO_FETCH } from "@/lib/types";

export const getPopularCars = async (): Promise<Car[]> => {
  return await prisma.car.findMany({
    where: {
      isFeatured: true,
    },
    orderBy: [{ createdAt: "desc" }],
    include: {
      brand: true,
      category: true,
    },
    skip: 0,
    take: 4,
  });
};

export const getAllCars = async (
  offset: number = 0,
  limit: number = NUMBER_OF_CARS_TO_FETCH
): Promise<{
  total: number;
  items: Car[];
}> => {
  const total = prisma.car.count();
  const items = prisma.car.findMany({
    orderBy: [{ createdAt: "desc" }],
    include: {
      brand: true,
      category: true,
    },
    skip: offset,
    take: limit,
  });

  const data = await Promise.all([total, items]);

  return {
    total: data[0],
    items: data[1],
  };
};
