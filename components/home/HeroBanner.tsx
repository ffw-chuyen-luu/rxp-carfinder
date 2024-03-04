import Image from "next/image";

import BackgroundImage from "@/components/ui/BackgroundImage";
import LinkButton from "@/components/ui/LinkButton";

const HeroBanner = () => {
  return (
    <BackgroundImage imageSrc="/images/home-banner.png">
      <div className="container m-auto px-4">
        <div className="xl:flex xl:items-start xl:justify-between">
          <div className="text-white text-center w-full py-6 xl:text-left xl:w-2/5 xl:py-24">
            <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tight md:3xl xl:text-4xl">
              The Best Platform for Car Rental
            </h1>

            <p className="w-full mb-6 xl:w-1/2">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>

            <Image
              src="/images/klipartz-3.png"
              alt="car"
              width="750"
              height="400"
              className="block w-auto mx-auto mb-8 xl:hidden"
            />

            <LinkButton href="/">Rent now</LinkButton>
          </div>

          <Image
            src="/images/klipartz-1.png"
            alt="car"
            width="750"
            height="400"
            className="hidden py-14 w-auto xl:block"
          />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default HeroBanner;
