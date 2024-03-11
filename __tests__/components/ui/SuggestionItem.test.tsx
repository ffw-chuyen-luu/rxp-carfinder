import SuggestionItem from "@/components/ui/SuggestionItem";
import { sampleCar } from "@/lib/__mocks__/data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("@/lib/components/ui/SuggestionItem", () => {
  it("should renders with image, title and link", () => {
    render(<SuggestionItem suggestion={sampleCar} onClick={() => {}} />);

    const title = screen.getByText(sampleCar.title);
    const image = screen.getByRole("img");
    const link = screen.getByRole("link");

    expect(title).toBeDefined();
    expect(image.getAttribute("src")).toContain(/_next/);
    expect(link.getAttribute("href")).toBe(`/cars/${sampleCar.slug}`);
  });
});
