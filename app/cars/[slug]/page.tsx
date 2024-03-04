import { notFound } from "next/navigation";

import CarBanner from "@/components/carDetail/CarBanner";
import CarDetail from "@/components/carDetail/CarDetail";

import { getCarBySlug } from "@/lib/car/data";

interface CarDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata(props: CarDetailPageProps) {
  const { params } = props;
  const car = await getCarBySlug(params.slug);

  return {
    title: car?.title,
    description: car?.description,
  };
}

export default async function CarDetailPage(props: CarDetailPageProps) {
  const { params } = props;
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
