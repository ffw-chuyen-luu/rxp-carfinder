import { beforeEach, describe, expect, it, vi } from "vitest";

import prismaMock from "@/lib/__mocks__/prisma";

import { getUserByEmail } from "@/lib/user/data";
import { sampleUser } from "@/lib/__mocks__/data";

vi.mock("@/lib/prisma.ts");

describe("@/lib/user/data.ts", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("getUserByEmail", () => {
    it("should throw an error", () => {
      prismaMock.user.findUnique.mockImplementationOnce(() => {
        throw new Error("Error occurred!");
      });

      expect(getUserByEmail("test@local.dev")).rejects.toBeInstanceOf(Error);
    });

    it("should return an user", async () => {
      prismaMock.user.findUnique.mockResolvedValueOnce(sampleUser);
      const user = await getUserByEmail(sampleUser.email);
      expect(user).toStrictEqual(sampleUser);
    });
  });
});
