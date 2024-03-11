import CarBanner from "@/components/carDetail/CarBanner";
import { sampleCar } from "@/lib/__mocks__/data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("@/components/carDetail/CarBanner", () => {
  it("should see title, image and price", () => {
    render(<CarBanner car={sampleCar} />);

    const title = screen.getByRole("heading", {
      level: 1,
      name: sampleCar.title,
    });

    const image = screen.getByRole("img", { name: sampleCar.title });

    const price = screen.queryByText(`${sampleCar.pricePerDay.toFixed(2)}`)

    expect(title).toBeDefined();
    expect(image).toBeDefined();
    expect(price).toBeDefined();
  });

  it("should see discountedPrice if it greater than 0", () => {
    const car = {
      ...sampleCar,
      discountedPrice: sampleCar.pricePerDay - 20,
    };
    render(<CarBanner car={sampleCar} />);

    const discountedPrice = screen.queryByText(
      `${sampleCar.discountedPrice.toFixed(2)}`
    );

    expect(discountedPrice).toBeDefined();
  });
});
