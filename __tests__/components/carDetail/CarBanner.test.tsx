import CarBanner from "@/components/carDetail/CarBanner";
import { sampleCar } from "@/lib/__mocks__/data";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

describe("@/components/carDetail/CarBanner", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should see title, image and price", () => {
    render(<CarBanner car={sampleCar} />);

    const title = screen.getByRole("heading", {
      level: 1,
      name: sampleCar.title,
    });

    const image = screen.getByRole("img", { name: sampleCar.title });
    const price = document.getElementById("original-price");

    expect(title).toBeDefined();
    expect(image).toBeDefined();
    expect(price).toBeInTheDocument();
  });

  it("should see discountedPrice if it greater than 0", () => {
    const car = {
      ...sampleCar,
      discountedPrice: sampleCar.pricePerDay - 20,
    };
    render(<CarBanner car={car} />);

    const discountedPrice = document.getElementById("discounted-price");
    expect(discountedPrice).toBeInTheDocument();
  });

  it("should see same price and discountedPrice", () => {
    const car = {
      ...sampleCar,
      discountedPrice: sampleCar.pricePerDay,
    };
    render(<CarBanner car={car} />);

    const price = document.getElementById("original-price");
    const discountedPrice = document.getElementById("discounted-price");

    expect(price).toBeInTheDocument();
    expect(discountedPrice).toBeInTheDocument();
  });
});
