import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import prismaMock from "@/lib/__mocks__/prisma";
import { sampleCar } from "@/lib/__mocks__/data";

import SearchSuggestions from "@/components/ui/SearchSuggestions";

vi.mock("@/lib/prisma.ts");

describe("@/lib/components/ui/SearchSuggestions", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should renders search input and icon", () => {
    render(<SearchSuggestions />);

    const searchInput = screen.getByRole("textbox");
    const searchIcon = screen.getByAltText("search icon");

    expect(searchInput).toBeDefined();
    expect(searchIcon).toBeDefined();
  });

  it("should fetches and display suggestions when search query changes", async () => {
    prismaMock.car.findMany.mockResolvedValue([sampleCar]);
    render(<SearchSuggestions />);

    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, "test query");

    await waitFor(() => {
      expect(screen.getByText(sampleCar.title).textContent).toBe(sampleCar.title);
    });
  });
});
