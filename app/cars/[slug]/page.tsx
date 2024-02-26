import { notFound } from "next/navigation";

import CarBanner from "@/components/carDetail/CarBanner";
import CarDetail from "@/components/carDetail/CarDetail";

import { getCarBySlug } from "@/lib/car/data";

export default async function CarDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  return (
    <>
      <CarBanner car={car} />
      <CarDetail car={car} />
    </>
  );
}
