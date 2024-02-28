"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginUserInput, loginUserSchema } from "@/lib/schema";

import { login } from "@/lib/user/actions";

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const methods = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<LoginUserInput> = async (data) => {
    setSubmitting(true);
    const res = await login(data);
    if (res) {
      reset({ password: "" });
      setError(res);
    }
    setSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="bg-white p-4 max-w-md rounded border-gray-400 shadow mx-auto mb-8"
    >
      {error && (
        <p className="bg-red-500 text-white p-1 text-center mb-2">{error}</p>
      )}
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

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-white hover:bg-opacity-70 py-2 px-4 rounded"
      >
        {submitting ? "Submitting..." : "Log in"}
      </button>
    </form>
  );
}
