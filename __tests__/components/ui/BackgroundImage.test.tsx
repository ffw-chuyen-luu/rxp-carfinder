import BackgroundImage from "@/components/ui/BackgroundImage";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("@/componenets/ui/BackgroundImage", () => {
  const imageSrc = "https://dummyimage.com/16:9x1080";
  const title = "Title";

  it("should see image tag", () => {
    render(<BackgroundImage imageSrc={imageSrc}>{` `}</BackgroundImage>);
    const element = screen.getByRole("img");
    expect(element).toBeDefined();
  });

  it("shold see title as children", () => {
    render(<BackgroundImage imageSrc={imageSrc}>{title}</BackgroundImage>);
    const text = screen.getByText(title);
    expect(text).toBeDefined();
  });
});
