"use client";

import { useState } from "react";

import CardWrapper from "@/components/ui/Cards";

import { getAllCars } from "@/lib/car/data";
import { Car, NUMBER_OF_CARS_TO_FETCH } from "@/lib/types";

interface ListCarsProps {
  title?: string;
  initialCars: Car[];
  pagination: boolean;
}

const ListCars = ({ title, initialCars, pagination }: ListCarsProps) => {
  const [offset, setOffset] = useState(NUMBER_OF_CARS_TO_FETCH);
  const [loadMore, setLoadMore] = useState(pagination);
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<Car[]>(initialCars);

  const loadMoreCars = async () => {
    setLoading(true);
    const { total, items } = await getAllCars(offset, NUMBER_OF_CARS_TO_FETCH);

    if (total <= offset + NUMBER_OF_CARS_TO_FETCH) {
      setLoadMore(false);
    }
    setCars([...cars, ...items]);
    setOffset(offset + NUMBER_OF_CARS_TO_FETCH);
    setLoading(false);
  };

  return (
    <>
      <CardWrapper title={title} items={cars} />
      {loadMore && (
        <div className="text-center">
          <button
            type="button"
            onClick={loadMoreCars}
            className="bg-primary text-white hover:bg-opacity-70 py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </>
  );
};

export default ListCars;
