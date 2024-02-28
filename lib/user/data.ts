"use server";

import prisma from "@/lib/prisma";

import { User } from "@/lib/types";
import { signIn } from "./auth";
import { AuthError } from "next-auth";

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

export const login = async (formData: { email: string; password: string }) => {
  try {
    console.log(formData);
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid email or password.";
        default:
          return "Something went wrong.";
      }
    } else {
      throw error;
    }
  }
};
