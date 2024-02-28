"use client";

import { SignupUserInput, signupUserSchema } from "@/lib/schema";
import { signup } from "@/lib/user/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function SignupForm() {
  const [submitting, setSubmitting] = useState(false);
  const [state, setState] = useState<{
    success: boolean;
    message?: string | undefined;
  }>({ success: false });

  const methods = useForm<SignupUserInput>({
    resolver: zodResolver(signupUserSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<SignupUserInput> = async (data) => {
    setSubmitting(true);
    const res = await signup(data);
    setState(res);

    if (res && res.success) {
      reset();
    } else {
      reset({ confirmPassword: "" });
    }

    setSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="bg-white p-4 max-w-md rounded border-gray-400 shadow mx-auto mb-8"
    >
      {state && state.success && (
        <p className="bg-green-300 p-1 text-center mb-2">
          Created your account, you can login now.
        </p>
      )}

      {state && !state.success && state.message && (
        <p className="bg-red-500 text-white p-1 text-center mb-2">
          {state.message}
        </p>
      )}
      <div className="block mb-4">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          type="text"
          {...register("name")}
          required={true}
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">
            {errors.name.message?.toString()}
          </p>
        )}
      </div>
      <div className="block mb-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          required={true}
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">
            {errors.email.message?.toString()}
          </p>
        )}
      </div>
      <div className="block mb-4">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          required={true}
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">
            {errors.password.message?.toString()}
          </p>
        )}
      </div>
      <div className="block mb-4">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          id="confirm_password"
          type="password"
          {...register("confirmPassword")}
          required={true}
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        />

        {errors.confirmPassword && (
          <p className="mt-1 text-xs text-red-500">
            {errors.confirmPassword.message?.toString()}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-white hover:bg-opacity-70 py-2 px-4 rounded"
      >
        {submitting ? "Submitting..." : "Sign up"}
      </button>
    </form>
  );
}
