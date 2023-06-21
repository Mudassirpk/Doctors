"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

// helpers
import { user_signup_schema } from "@/lib/zodschema";
import { iUserSignUp } from "@/types";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [serverValidationError, setServerValidationError] = useState<{
    property: string;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserSignUp>({
    resolver: zodResolver(user_signup_schema),
  });

  async function signUp(data: iUserSignUp) {
    return await axios.post("/api/registeration/signup/", data);
  }

  const mutation = useMutation({
    mutationFn: (user: iUserSignUp) => signUp(user),
    onSuccess: () => {
      setServerValidationError(null);
      router.push("/Registeration/login");
    },
    onError: (err: any) => {
      setServerValidationError({
        property: err.response.data.property,
        message: err.response.data.message,
      });
    },
  });

  return (
    <div className={"w-full flex flex-col mb-6 items-center"}>
      <h1 className={"text-xl my-4 text-center"}>Please Signup to continue</h1>
      <form
        onSubmit={handleSubmit((data: iUserSignUp) => mutation.mutate(data))}
        className={
          "min-w-[300px] flex flex-col gap-4 border border-b-slate-300 mt-6 rounded-sm py-6 px-6 xsm:p-2"
        }
      >
        <h2
          className={
            "mb-4 xsm:mt-6 text-blue-500 text-xl font-semibold text-center"
          }
        >
          Signup{" "}
          <span className="text-gray-900">
            Or{" "}
            <Link
              className="pb-1 border-b-gray-900 border-b-2"
              href={"/Registeration/login"}
            >
              Login
            </Link>
          </span>
        </h2>

        {/* personal information */}
        <div>
          <h3 className="mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4 border border-gray-300 rounded-sm p-6">
            <label className={`flex flex-col gap-2`}>
              <span className={"text-gray-700"}>Name</span>
              <Input
                className={` ${
                  errors.name && "outline-2 outline outline-red-400"
                }`}
                required={true}
                {...register("name")}
                type={"text"}
                placeholder={"John doe"}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </label>
            <label className={"flex flex-col gap-2"}>
              <span className={"text-gray-700"}>Email</span>
              <Input
                className={` ${
                  errors.email && "outline-2 outline outline-red-400"
                }`}
                {...register("email")}
                type={"text"}
                placeholder={"example@gmail.com"}
                required={true}
              />
              {errors.email || mutation.isError ? (
                <span className="text-red-500">
                  {errors.email
                    ? errors?.email?.message
                    : serverValidationError?.property === "email" &&
                      serverValidationError.message}
                </span>
              ) : null}
            </label>
            <label className={"flex flex-col gap-2 col-span-2"}>
              <span className={"text-gray-700"}>Phone</span>
              <Input
                className={` ${
                  errors.phone && "outline-2 outline outline-red-400"
                }`}
                {...register("phone")}
                type={"tel"}
                placeholder={"+12234567890"}
                required={true}
              />
              {errors.phone || mutation.isError ? (
                <span className="text-red-500">
                  {errors.phone
                    ? errors?.phone?.message
                    : serverValidationError?.property === "phone" &&
                      serverValidationError.message}
                </span>
              ) : null}
            </label>
          </div>
        </div>

        {/* personal information */}

        {/* Location */}
        <div>
          <h3 className="mb-4">Location</h3>
          <div className="border border-gray-300 rounded-sm p-4">
            <label className={"flex flex-col gap-2"}>
              <span className={"text-gray-700"}>Address</span>
              <Input
                className={` ${
                  errors.address && "outline-2 outline outline-red-400"
                }`}
                {...register("address")}
                type={"text"}
                placeholder={"Country, State, City"}
                required={true}
              />
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </label>
          </div>
        </div>

        {/* Location */}

        {/* Secuirity */}
        <div>
          <h3 className="mb-4">Secuirity</h3>
          <div className="grid grid-cols-1 gap-4 border border-gray-300 rounded-sm p-6">
            <label className={"flex flex-col gap-2"}>
              <span className={"text-gray-700"}>Password</span>
              <Input
                className={` ${
                  errors.password && "outline-2 outline outline-red-400"
                }`}
                type={"password"}
                {...register("password")}
                placeholder={"*******"}
                required={true}
                minLength={8}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </label>
            <label className={"flex flex-col gap-2"}>
              <span className={"text-gray-700"}>Confirm Password</span>
              <Input
                className={` ${
                  errors.confirmPassword && "outline-2 outline outline-red-400"
                }`}
                type={"password"}
                {...register("confirmPassword")}
                placeholder={"*******"}
                required={true}
                minLength={8}
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>
          </div>
        </div>
        {/* Secuirity */}

        <Button
          disabled={mutation.isLoading && true}
          type={"submit"}
          className={` ${
            mutation.isLoading ? "bg-gray-600" : "bg-blue-500"
          } text-white`}
        >
          Signup
        </Button>
      </form>
    </div>
  );
}
