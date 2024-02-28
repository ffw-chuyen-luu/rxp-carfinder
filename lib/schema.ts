import { TypeOf, object, string } from "zod";

export const loginUserSchema = object({
  email: string({ required_error: "Email is required" })
    .min(5, "Email is too short")
    .email("Invalid email address"),
  password: string({ required_error: "Password is required" }).min(
    1,
    "Password is required"
  ),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>;

export const signupUserSchema = object({
  name: string({ required_error: "Full name is required" }).min(
    3,
    "Full name is too short"
  ),
  email: string({ required_error: "Email is required" })
    .min(5, "Email is too short")
    .email("Invalid email address"),
  password: string({ required_error: "Password is required" }).min(
    1,
    "Password is too short"
  ),
  confirmPassword: string({
    required_error: "Confirm password is required",
  }).min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type SignupUserInput = TypeOf<typeof signupUserSchema>;
