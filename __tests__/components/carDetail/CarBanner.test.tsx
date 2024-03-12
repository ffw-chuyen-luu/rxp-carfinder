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

    const price = screen.queryByText(
      new RegExp(sampleCar.pricePerDay.toFixed(2), "i")
    )!;

    expect(title).toBeDefined();
    expect(image).toBeDefined();
    expect(price.textContent).toBe(`\$${sampleCar.pricePerDay.toFixed(2)} / `);
  });

  it("should see discountedPrice if it greater than 0", () => {
    const car = {
      ...sampleCar,
      discountedPrice: sampleCar.pricePerDay - 20,
    };
    render(<CarBanner car={car} />);

    const discountedPrice = screen.queryByText(
      new RegExp(car.discountedPrice.toFixed(2), "i")
    )!;
    expect(discountedPrice.textContent).toBe(
      `\$${car.discountedPrice.toFixed(2)}`
    );
  });

  it("should see same price and discountedPrice", () => {
    const car = {
      ...sampleCar,
      discountedPrice: sampleCar.pricePerDay,
    };
    render(<CarBanner car={car} />);

    const prices = screen.queryAllByText(
      new RegExp(car.discountedPrice.toFixed(2), "i")
    )!;

    expect(prices.length).toBe(2);
  });
});
