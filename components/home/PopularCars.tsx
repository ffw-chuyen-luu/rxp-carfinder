import CardWrapper from "@/components/ui/Cards";

import { getPopularCars } from "@/lib/car/data";

const PopularCars = async () => {
  const carPopular = await getPopularCars();

  return <CardWrapper title="Popular Car" items={carPopular} />;
};

export default PopularCars;
