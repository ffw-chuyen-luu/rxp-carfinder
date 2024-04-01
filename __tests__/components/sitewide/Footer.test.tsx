import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Footer from "@/components/sitewide/Footer";

describe("@/components/sitewide/Footer", () => {
  it("should see logo and links", () => {
    render(<Footer />);

    const logo = screen.getByRole("img", { name: "Car finder" });
    const links = screen.getAllByRole("link");

    expect(logo).toBeInTheDocument();
    expect(links.length).greaterThan(0);
  });
});
