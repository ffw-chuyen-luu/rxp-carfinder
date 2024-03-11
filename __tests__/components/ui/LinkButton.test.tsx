import LinkButton from "@/components/ui/LinkButton";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("@/lib/components/ui/LinkButton", () => {
  it("should see anchor tag", () => {
    render(<LinkButton href="/">link button</LinkButton>);
    const element = screen.getByText("link button");
    expect(element.closest("a")).toBeDefined();
  });

  it("should see href attribute in the anchor tag", () => {
    render(<LinkButton href="/login">Login</LinkButton>);
    const element = screen.getByText("Login");
    expect(element.getAttribute("href")).toBe("/login");
  });
});
