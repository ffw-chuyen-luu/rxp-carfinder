import Image from "next/image";

import { Car } from "@/lib/types";

interface CarBannerProps {
  car: Car;
}

const CarBanner = ({ car }: CarBannerProps) => {
  return (
    <section className="bg-stonedark bg-opacity-90">
      <div className="container mx-auto px-4 pt-10 pb-4 text-white">
        <div className="relative mb-20">
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:3xl xl:text-4xl md:text-center">
            {car.title}
          </h1>

          <div className="md:absolute md:-top-6 md:right-0">
            <span className="font-medium text-xl">
              ${car.pricePerDay.toFixed(2)} /{" "}
            </span>
            <span className="text-sm">day</span>
            {car.discountedPrice > 0 && (
              <p className="text-sm line-through">
                ${car.discountedPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>

        <Image
          src={`/images/${car.image}`}
          alt="car"
          height={0}
          width={0}
          sizes="100vw"
          className="mx-auto w-full h-auto max-w-xl lg:max-w-4xl"
        />
      </div>
    </section>
  );
};

export default CarBanner;
