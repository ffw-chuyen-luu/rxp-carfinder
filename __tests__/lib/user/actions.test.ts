import { beforeEach, describe, expect, it, vi } from "vitest";
import { CredentialsSignin, AuthError } from "@auth/core/errors";

import prismaMock from "@/lib/__mocks__/prisma";

import { login, signup } from "@/lib/user/actions";
import { LoginUserInput, SignupUserInput } from "@/lib/schema";
import { sampleUser } from "@/lib/__mocks__/data";
import { signIn } from "@/lib/user/auth";

vi.mock("@/lib/prisma.ts");
vi.mock("@/lib/user/auth");

describe("@/lib/user/actions.ts", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const formData: SignupUserInput = {
    name: "Test User",
    email: "test@local.dev",
    password: "123",
    confirmPassword: "123",
  };

  describe("signup", () => {
    it("should see error name is too short", async () => {
      const response = await signup({ ...formData, name: "T" });
      expect(response.success).toBe(false);
      expect(response.message).toMatch(/Validate failed/);
    });

    it("should see error email is invalide", async () => {
      const response = await signup({ ...formData, email: "test@test" });
      expect(response.success).toBe(false);
      expect(response.message).toMatch(/Validate failed/);
    });

    it("should see error passwords not match", async () => {
      const response = await signup({
        ...formData,
        confirmPassword: formData.password + "test",
      });
      expect(response.success).toBe(false);
      expect(response.message).toMatch(/Validate failed/);
    });

    it("should see error existing account", async () => {
      prismaMock.user.findUnique.mockResolvedValueOnce({
        ...sampleUser,
        email: formData.email,
      });
      const response = await signup(formData);
      expect(response.success).toBe(false);
      expect(response.message).toMatch(/Account already exists/);
    });

    it("should create user successfully", async () => {
      prismaMock.user.findUnique.mockResolvedValueOnce(null);
      const response = await signup(formData);
      expect(response.success).toBe(true);
    });

    it("should see encounter error", async () => {
      prismaMock.user.findUnique.mockRejectedValue(
        new Error("Mocked user not found")
      );
      const response = await signup(formData);
      expect(response.success).toBe(false);
    });
  });

  const loginFormData: LoginUserInput = {
    email: "test@local.dev",
    password: "123",
  };

  describe("login", () => {
    it("should see credentials signin error", async () => {
      vi.mocked(signIn).mockRejectedValueOnce(new CredentialsSignin());
      const response = await login(loginFormData);
      expect(response).toEqual("Invalid email or password.");
    });

    it("should see AuthError", async () => {
      vi.mocked(signIn).mockRejectedValueOnce(new AuthError());
      const response = await login(loginFormData);
      expect(response).toEqual("Something went wrong.");
    });

    it("should see error", async () => {
      vi.mocked(signIn).mockRejectedValueOnce(new Error());
      try {
        await login(loginFormData);
      } catch (ex) {
        expect(ex).toBeInstanceOf(Error);
      }
    });
  });
});
