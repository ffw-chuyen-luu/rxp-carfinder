"use server";

import prisma from "@/lib/prisma";

import { SignupUserInput, signupUserSchema } from "@/lib/schema";
import { hash } from "bcryptjs";
import { AuthError } from "next-auth";

import { signIn } from "./auth";

export const login = async (formData: { email: string; password: string }) => {
  try {
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


export const signup = async (formData: SignupUserInput) => {
  try {
    const validatedFields = signupUserSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Validate failed.",
      };
    }

    const user = await prisma.user.findUnique({
      where: {
        email: formData.email,
      },
    });

    if (user) {
      return {
        success: false,
        message: "Account already exists.",
      };
    }

    const hashed_password = await hash(formData.password, 12);
    await prisma.user.create({
      data: {
        name: formData.name,
        email: formData.email,
        password: hashed_password,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
};
