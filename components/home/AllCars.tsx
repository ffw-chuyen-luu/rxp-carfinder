import ListCars from "./ListCars";

import { getAllCars } from "@/lib/car/data";

const AllCars = async () => {
  const { total, items } = await getAllCars();

  return (
    <ListCars
      title="All Cars"
      initialCars={items}
      pagination={total > items.length}
    />
  );
};

export default AllCars;
