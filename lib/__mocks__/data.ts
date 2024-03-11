import { Oil, Transmission } from "@prisma/client";
import { Car, User } from "@/lib/types";

const dummyimage = "https://dummyimage.com/16:9x768";

export const sampleCar: Car = {
  id: "car-id",
  createdAt: new Date(),
  slug: "car-title",
  title: "Car title",
  image: dummyimage,
  description: "Lorem ipsum text here...",
  oil: Oil.GASOLINE,
  transmission: Transmission.AUTOMATIC,
  capacity: 4,
  fuelTank: 70,
  pricePerDay: 99,
  discountedPrice: 0,
  officialWebsite: "#",
  isFeatured: false,
  brand: {
    id: "brand-1",
    title: "Brand 1",
    logo: dummyimage,
  },
  brandId: "brand-1",
  category: {
    id: "category-1",
    name: "Category 1",
  },
  categoryId: "category-1",
};

export const generateListCars = (
  count: number,
  feature: boolean | undefined
): Car[] => {
  return Array(count)
    .fill(0)
    .map(
      (_, i) =>
        ({
          ...sampleCar,
          id: sampleCar.id + i,
          title: sampleCar.title + i,
          isFeatured:
            typeof feature === undefined ? Math.random() >= 0.5 : feature,
        } as Car)
    );
};

export const sampleUser: User = {
  id: "user-id",
  name: "Test User",
  email: "test@local.dev",
  password: "123456",
};
