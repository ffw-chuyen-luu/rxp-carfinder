import prisma from "@/lib/prisma";
import { Car } from "@/lib/types";

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
