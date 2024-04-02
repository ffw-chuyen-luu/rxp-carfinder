import { afterEach, describe, expect, it } from "vitest";

import { sampleCar } from "@/lib/__mocks__/data";
import { render, screen } from "@testing-library/react";

import Card from "@/components/ui/Card";

describe("@/components/ui/Card", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should renders title, image, price and link", () => {
    render(<Card car={sampleCar} />);

    const title = screen.getByRole("heading", {
      level: 2,
      name: sampleCar.title,
    });
    const image = screen.getByRole("img", { name: sampleCar.title });
    const price = screen.queryByText(`${sampleCar.pricePerDay.toFixed(2)}`);
    const discountedPrice = screen.queryByText(
      `${sampleCar.discountedPrice.toFixed(2)}`
    );
    const link = screen.getByRole("link", { name: "Rent now" });

    expect(title).toBeDefined();
    expect(image.getAttribute("src")).toContain(/_next/);
    expect(price).toBeDefined();
    expect(discountedPrice).toBeNull();
    expect(link.getAttribute("href")).toBe(`/cars/${sampleCar.slug}`);
  });

  it("should render discountedPrice if it has value", () => {
    const carDiscounted = {
      ...sampleCar,
      pricePerDay: 99,
      discountedPrice: 50,
    };
    render(<Card car={carDiscounted} />);

    const discountedPrice = screen.queryByText(
      `${carDiscounted.discountedPrice.toFixed(2)}`
    );

    expect(discountedPrice).toBeDefined();
  });
});
