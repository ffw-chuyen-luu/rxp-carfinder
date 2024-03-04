"use server";

import prisma from "@/lib/prisma";

import { User } from "@/lib/types";

export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
};
