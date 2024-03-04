import Image from "next/image";
import Link from "next/link";

import LinkButton from "@/components/ui/LinkButton";

import { Car } from "@/lib/types";

interface CardProps {
  car: Car;
}

const Card = ({ car }: CardProps) => {
  return (
    <div className="p-4 bg-white rounded-md shadow transition ease-in-out delay-100 hover:shadow-md hover:-translate-y-0.5 hover:scale-105 xl:max-w-sm">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">
          <Link href={`/cars/${car.slug}`}>{car.title}</Link>
        </h2>
        <div className="text-sm text-gray-400">SUV</div>
      </div>
      <div className="mb-8 text-gray-400 flex items-center justify-between md:block">
        <Image
          src={`/images/${car.image}`}
          alt="car"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto mx-auto mb-8 max-w-80 md:max-w-72"
        />
        <ul className="md:flex md:items-center md:justify-between">
          <li className="flex items-center justify-start mb-2">
            <Image
              className="mr-1"
              width={24}
              height={24}
              src="./images/icons/gas-station.svg"
              alt="gasonline"
            />
            <span className="capitalize">{car.fuelTank}L</span>
          </li>
          <li className="flex items-center justify-start mb-2">
            <Image
              className="mr-1"
              width={24}
              height={24}
              src="./images/icons/car.svg"
              alt="drive"
            />
            <span className="capitalize">{car.transmission.toLowerCase()}</span>
          </li>
          <li className="flex items-center justify-start mb-2">
            <Image
              className="mr-1"
              width={24}
              height={24}
              src="./images/icons/profile-2user.svg"
              alt="capacity"
            />
            <span className="capitalize">{car.capacity} People</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="font-medium text-lg">
            ${car.pricePerDay.toFixed(2)} /{" "}
          </span>
          <span className="text-sm text-gray-400">day</span>
          {car.discountedPrice > 0 && (
            <p className="text-sm text-gray-400 text line-through">
              ${car.discountedPrice.toFixed(2)}
            </p>
          )}
        </div>
        <LinkButton to={`/cars/${car.slug}`}>Rent now</LinkButton>
      </div>
    </div>
  );
};

export default Card;
