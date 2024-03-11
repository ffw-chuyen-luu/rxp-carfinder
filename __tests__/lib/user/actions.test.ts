import { beforeEach, describe, expect, it, vi } from "vitest";

import prismaMock from "@/lib/__mocks__/prisma";

import { signup } from "@/lib/user/actions";
import { SignupUserInput } from "@/lib/schema";
import { sampleUser } from "@/lib/__mocks__/data";

vi.mock("@/lib/prisma.ts");

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
  });
});
