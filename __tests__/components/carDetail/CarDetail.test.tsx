import CarDetail from "@/components/carDetail/CarDetail";
import { sampleCar } from "@/lib/__mocks__/data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("@/components/carDetail/CarDetail", () => {
  it("should see description, technical detail and brand logo image", () => {
    render(<CarDetail car={sampleCar} />);

    const description = screen.queryByText(sampleCar.description);

    const type = screen.queryByText(sampleCar.category.name);
    const steering = screen.queryByText(
      sampleCar.transmission.toLocaleLowerCase()
    );
    const logo = screen.getByRole("img", { name: sampleCar.brand.title });

    expect(description).toBeDefined();
    expect(type).toBeDefined();
    expect(steering).toBeDefined();
    expect(logo).toBeDefined();
  });
});
