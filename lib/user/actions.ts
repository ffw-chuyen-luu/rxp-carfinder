"use server";

import prisma from "@/lib/prisma";

import { SignupUserInput, signupUserSchema } from "@/lib/schema";
import { hash } from "bcryptjs";


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
