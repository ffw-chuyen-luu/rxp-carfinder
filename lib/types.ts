import { Oil, Transmission } from "@prisma/client";

export type Brand = {
  id: string;
  title: string;
  logo: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Car = {
  id: string;
  createdAt: Date;
  slug: string;
  title: string;
  image: string;
  description: string;
  oil: Oil;
  transmission: Transmission;
  capacity: number;
  fuelTank: number;
  pricePerDay: number;
  discountedPrice: number;
  officialWebsite: string;
  isFeatured: boolean;
  brand: Brand;
  brandId: string;
  category: Category;
  categoryId: string;
};

export const NUMBER_OF_CARS_TO_FETCH = 8;

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
