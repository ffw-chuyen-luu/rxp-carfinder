import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "@/components/sitewide/Header";
import { sampleUser } from "@/lib/__mocks__/data";

vi.mock("@/lib/user/auth");

import { auth } from "@/lib/user/auth";

describe("@/components/sitewide/Header", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should see logo, login and register links as anonymous user", async () => {
    const jsx = await Header();
    render(jsx);

    const logo = screen.getByRole("img", { name: "Car finder" });
    const loginLink = screen.getByRole("link", { name: "Login" });
    const registerLink = screen.getByRole("link", { name: "Register" });

    expect(logo).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");
    expect(registerLink).toHaveAttribute("href", "/signup");
  });

  it("should see logout link as user logged in", async () => {
    vi.mocked(auth).mockResolvedValue({ user: sampleUser });

    const jsx = await Header();
    render(jsx);

    const logoutLink = screen.getByRole("button", { name: "Sign Out" });

    expect(logoutLink).toBeInTheDocument();
  });
});
