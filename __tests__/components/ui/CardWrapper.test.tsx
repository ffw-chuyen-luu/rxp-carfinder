import { afterEach, describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";

import CardWrapper from "@/components/ui/CardWrapper";
import { generateListCars } from "@/lib/__mocks__/data";

describe("@/components/ui/CardWrapper", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should renders title and no data available", () => {
    const wrapperTitle = "Popular Cars";
    render(<CardWrapper title={wrapperTitle} items={[]} />);

    const title = screen.getByRole("heading", {
      level: 2,
      name: wrapperTitle,
    });
    const noResultText = screen.getByText(/No data available/);

    expect(title).toBeDefined();
    expect(noResultText).toBeDefined();
  });

  it("should render car in the wrapper", () => {
    const cars = generateListCars(4, true);
    render(<CardWrapper items={cars} />);

    const firstCarTitle = screen.getByRole("heading", {
      level: 2,
      name: cars[0].title,
    });

    expect(firstCarTitle).toBeDefined();
  });
});
