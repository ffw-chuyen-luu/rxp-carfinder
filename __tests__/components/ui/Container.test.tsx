import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Container from "@/components/ui/Container";

describe("@/components/ui/Container", () => {
  it("should render with heading", () => {
    render(<Container><h1>The heading title</h1></Container>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
