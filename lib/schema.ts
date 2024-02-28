import { TypeOf, object, string } from "zod";

export const loginUserSchema = object({
  email: string({ required_error: "Email is required" })
    .min(3, "Email is required")
    .email("Invalid email address"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required"),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>;
