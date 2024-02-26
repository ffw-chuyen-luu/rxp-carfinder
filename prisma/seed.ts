import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const brandData: Prisma.BrandCreateInput[] = [
  {
    title: "Toyota",
    logo: "images/brands/Toyota.png",
  },
  {
    title: "Nissan",
    logo: "images/brands/Nissan.png",
  },
  {
    title: "Ford",
    logo: "images/brands/Ford.png",
  },
  {
    title: "Jeep",
    logo: "images/brands/Jeep.png",
  },
  {
    title: "Honda",
    logo: "images/brands/Honda.png",
  },
  {
    title: "Chevrolet",
    logo: "images/brands/Chevrolet.png",
  },
  {
    title: "Subaru",
    logo: "images/brands/Subaru.png",
  },
  {
    title: "Mazda",
    logo: "images/brands/Mazda.png",
  },
  {
    title: "Audi",
    logo: "images/brands/Audi.png",
  },
  {
    title: "Volkswagen",
    logo: "images/brands/Volkswagen.png",
  },
  {
    title: "Porsche",
    logo: "images/brands/Porsche.png",
  },
  {
    title: "Kia",
    logo: "images/brands/Kia.png",
  },
  {
    title: "Hyundai",
    logo: "images/brands/Hyundai.png",
  },
  {
    title: "BMW",
    logo: "images/brands/BMW.png",
  },
  {
    title: "Tesla",
    logo: "images/brands/Tesla.png",
  },
];

const categoryData: Prisma.CategoryCreateInput[] = [
  {
    name: "Sport",
  },
  {
    name: "SUV",
  },
  {
    name: "Hatchback",
  },
  {
    name: "Sedan",
  },
];

const carData: Prisma.CarCreateInput[] = [
  {
    slug: "toyota-corolla",
    title: "Toyota Corolla",
    image: "cars/Car-1.png",
    description:
      "The Toyota Corolla is a compact car that is known for its reliability and fuel efficiency.",
    officialWebsite: "https://www.toyota.com/corolla",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 50,
    pricePerDay: 50,
    category: { connect: { name: "Sedan" } },
    brand: { connect: { title: "Toyota" } },
  },
  {
    slug: "ford-mustang",
    title: "Ford Mustang",
    image: "cars/Car-12.png",
    description:
      "The Ford Mustang is an iconic American sports car known for its powerful performance and classic design.",
    officialWebsite: "https://www.ford.com/mustang",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 4,
    fuelTank: 60,
    pricePerDay: 80,
    category: { connect: { name: "Sport" } },
    brand: { connect: { title: "Ford" } },
  },
  {
    slug: "jeep-wrangler",
    title: "Jeep Wrangler",
    image: "cars/Car-2.png",
    description:
      "The Jeep Wrangler is a rugged and capable SUV designed for off-road adventures.",
    officialWebsite: "https://www.jeep.com/wrangler",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 4,
    fuelTank: 70,
    pricePerDay: 70,
    isFeatured: true,
    category: { connect: { name: "SUV" } },
    brand: { connect: { title: "Jeep" } },
  },
  {
    slug: "honda-civic",
    title: "Honda Civic",
    image: "cars/Car-3.png",
    description:
      "The Honda Civic is a versatile compact car known for its reliability and sporty design.",
    officialWebsite: "https://automobiles.honda.com/civic",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 55,
    pricePerDay: 55,
    discountedPrice: 50,
    category: { connect: { name: "Hatchback" } },
    brand: { connect: { title: "Honda" } },
  },
  {
    slug: "chevrolet-camaro",
    title: "Chevrolet Camaro",
    image: "cars/Car-4.png",
    description:
      "The Chevrolet Camaro is a high-performance sports car known for its sleek design and exhilarating driving experience.",
    officialWebsite: "https://www.chevrolet.com/camaro",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 4,
    fuelTank: 55,
    pricePerDay: 85,
    category: { connect: { name: "Sport" } },
    brand: { connect: { title: "Chevrolet" } },
  },
  {
    slug: "subaru-outback",
    title: "Subaru Outback",
    image: "cars/Car-5.png",
    description:
      "The Subaru Outback is a versatile SUV offering a comfortable ride, spacious interior, and capable all-wheel drive.",
    officialWebsite: "https://www.subaru.com/outback",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 65,
    pricePerDay: 65,
    discountedPrice: 60,
    isFeatured: true,
    category: { connect: { name: "SUV" } },
    brand: { connect: { title: "Subaru" } },
  },
  {
    slug: "mazda3",
    title: "Mazda3",
    image: "cars/Car-6.png",
    description:
      "The Mazda3 is a stylish and fun-to-drive hatchback with impressive fuel efficiency and agile handling.",
    officialWebsite: "https://www.mazdausa.com/mazda3",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 50,
    pricePerDay: 60,
    category: { connect: { name: "Hatchback" } },
    brand: { connect: { title: "Mazda" } },
  },
  {
    slug: "audi-a3",
    title: "Audi A3",
    image: "cars/Car-7.png",
    description:
      "The Audi A3 is a luxurious compact sedan with a refined interior and strong performance.",
    officialWebsite:
      "https://www.audiusa.com/us/web/en/models/a3/a3/2024/overview.html",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 60,
    pricePerDay: 70,
    category: { connect: { name: "Sedan" } },
    brand: { connect: { title: "Audi" } },
  },
  {
    slug: "toyota-rav4",
    title: "Toyota RAV4",
    image: "cars/Car-8.png",
    description:
      "The Toyota RAV4 is a compact SUV offering a comfortable ride, spacious interior, and strong fuel efficiency.",
    officialWebsite: "https://www.toyota.com/rav4",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 65,
    pricePerDay: 75,
    discountedPrice: 70,
    isFeatured: true,
    category: { connect: { name: "SUV" } },
    brand: { connect: { title: "Toyota" } },
  },
  {
    slug: "volkswagen-golf",
    title: "Volkswagen Golf",
    image: "cars/Car-9.png",
    description:
      "The Volkswagen Golf is a practical and fun-to-drive hatchback offering a spacious interior and refined driving dynamics.",
    officialWebsite: "https://www.vw.com/en/models/golf-gti.html",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 50,
    pricePerDay: 55,
    category: { connect: { name: "Hatchback" } },
    brand: { connect: { title: "Volkswagen" } },
  },
  {
    slug: "porsche-911",
    title: "Porsche 911",
    image: "cars/Car-10.png",
    description:
      "The Porsche 911 is a legendary sports car known for its precise handling, powerful engine options, and timeless design.",
    officialWebsite: "https://www.porsche.com/international/models/911/",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 4,
    fuelTank: 65,
    pricePerDay: 150,
    isFeatured: true,
    category: { connect: { name: "Sport" } },
    brand: { connect: { title: "Porsche" } },
  },
  {
    slug: "kia-sportage",
    title: "Kia Sportage",
    image: "cars/Car-11.png",
    description:
      "The Kia Sportage is a compact SUV offering a comfortable ride, user-friendly technology, and strong value.",
    officialWebsite: "https://www.kia.com/us/en/sportage",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 60,
    pricePerDay: 70,
    category: { connect: { name: "SUV" } },
    brand: { connect: { title: "Kia" } },
  },
  {
    slug: "hyundai-elantra",
    title: "Hyundai Elantra",
    description:
      "The Hyundai Elantra is a compact sedan offering a smooth ride, spacious interior, and strong value.",
    officialWebsite: "https://www.hyundaiusa.com/elantra",
    image: "cars/Car-12.png",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 55,
    pricePerDay: 60,
    category: { connect: { name: "Sedan" } },
    brand: { connect: { title: "Hyundai" } },
  },
  {
    slug: "bmw-x3",
    title: "BMW X3",
    description:
      "The BMW X3 is a luxury SUV offering agile handling, a spacious interior, and advanced technology features.",
    officialWebsite: "https://www.bmwusa.com/x3",
    image: "cars/Car-13.png",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 70,
    pricePerDay: 90,
    discountedPrice: 85,
    isFeatured: true,
    category: { connect: { name: "SUV" } },
    brand: { connect: { title: "BMW" } },
  },
  {
    slug: "chevrolet-bolt-ev",
    title: "Chevrolet Bolt EV",
    description:
      "The Chevrolet Bolt EV is an all-electric hatchback offering impressive range, practicality, and modern features.",
    officialWebsite: "https://www.chevrolet.com/bolt-ev15",
    image: "cars/Car-14.png",
    oil: "ELECTRIC",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 65,
    pricePerDay: 80,
    category: { connect: { name: "Hatchback" } },
    brand: { connect: { title: "Chevrolet" } },
  },
  {
    slug: "audi-q5",
    title: "Audi Q5",
    description:
      "The Audi Q5 is a luxury SUV offering a refined ride, upscale interior, and strong performance.",
    officialWebsite: "https://www.audiusa.com/q5",
    image: "cars/Car-15.png",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 70,
    pricePerDay: 100,
    category: { connect: { name: "SUV" } },
    brand: { connect: { title: "Audi" } },
  },
  {
    slug: "mazda-mx-5-miata",
    title: "Mazda MX-5 Miata",
    description:
      "The Mazda MX-5 Miata is a legendary sports car known for its agile handling, lively performance, and open-top driving experience.",
    officialWebsite: "https://www.mazdausa.com/vehicles/mx-5-miata",
    image: "cars/Car-16.png",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 2,
    fuelTank: 50,
    pricePerDay: 90,
    isFeatured: true,
    category: { connect: { name: "Sport" } },
    brand: { connect: { title: "Mazda" } },
  },
  {
    slug: "nissan-rogue",
    title: "Nissan Rogue",
    description:
      "The Nissan Rogue is a compact SUV offering a comfortable ride, spacious cabin, and strong safety features.",
    officialWebsite: "https://www.nissanusa.com/rogue",
    image: "cars/Car-17.png",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 65,
    pricePerDay: 75,
    category: { connect: { name: "SUV" } },
    brand: { connect: { title: "Nissan" } },
  },
  {
    slug: "volkswagen-jetta",
    title: "Volkswagen Jetta",
    image: "cars/Car-12.png",
    description:
      "The Volkswagen Jetta is a compact sedan offering a comfortable ride, spacious interior, and modern features.",
    officialWebsite: "https://www.vw.com/jetta",
    oil: "GASOLINE",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 55,
    pricePerDay: 65,
    category: { connect: { name: "Sedan" } },
    brand: { connect: { title: "Volkswagen" } },
  },
  {
    slug: "tesla-model-3",
    title: "Tesla Model 3",
    image: "cars/Car-16.png",
    description:
      "The Tesla Model 3 is an all-electric sedan offering impressive range, exhilarating performance, and cutting-edge technology.",
    officialWebsite: "https://www.tesla.com/model3",
    oil: "ELECTRIC",
    transmission: "AUTOMATIC",
    capacity: 5,
    fuelTank: 80,
    pricePerDay: 100,
    isFeatured: true,
    category: { connect: { name: "Sedan" } },
    brand: { connect: { title: "Tesla" } },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const brand of brandData) {
    const b = await prisma.brand.create({
      data: brand,
    });
    console.log(`Created brand with id: ${b.id}`);
  }

  for (const category of categoryData) {
    const c = await prisma.category.create({
      data: category,
    });
    console.log(`Created category with id: ${c.id}`);
  }

  for (const car of carData) {
    const ca = await prisma.car.create({
      data: car,
    });
    console.log(`Created car with id: ${ca.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
