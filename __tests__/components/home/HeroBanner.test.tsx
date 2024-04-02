import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HeroBanner from "@/components/home/HeroBanner";

describe("@/components/home/HeroBanner", () => {
  it("should see hero title, images(background and hero) and link", () => {
    render(<HeroBanner />);

    const heading = screen.getByRole("heading", { level: 1 });
    const images = screen.getAllByRole("img")
    const link = screen.getByRole("link");

    expect(heading).toBeInTheDocument();
    expect(images.length).equal(3); // Background, hero images on desktop and mobile.
    expect(link).toBeInTheDocument();
  });
});
