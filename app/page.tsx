import { Suspense } from "react";

import HeroBanner from "@/components/home/HeroBanner";
import PopularCars from "@/components/home/PopularCars";
import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <PopularCars />
        </Suspense>
      </Container>
    </>
  );
}
