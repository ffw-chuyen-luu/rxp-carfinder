import { Suspense } from "react";

import HeroBanner from "@/components/home/HeroBanner";
import PopularCars from "@/components/home/PopularCars";
import AllCars from "@/components/home/AllCars";
import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <PopularCars />
        </Suspense>

        <Suspense fallback={<p>Loading...</p>}>
          <AllCars />
        </Suspense>
      </Container>
    </>
  );
}
