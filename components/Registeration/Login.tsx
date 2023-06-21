"use client";

import Link from "next/link";
import React, { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { userLoginSchema } from "@/lib/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import type { iUserLogin } from "./../../types";

export default function Login() {
  const {
    register,
    formState: { errors },
  } = useForm<iUserLogin>({ resolver: zodResolver(userLoginSchema) });

  function login(e: FormEvent) {
    e.preventDefault();
    const formdata = new FormData(e.target as HTMLFormElement);
    signIn("credentials", {
      email: formdata.get("email"),
      password: formdata.get("password"),
      callbackUrl: "/",
    });
  }

  return (
    <div>
      <h1 className={"text-xl my-4 text-center"}>Please Login to continue</h1>
      <form
        onSubmit={login}
        className={
          "min-w-[300px] w-[400px] flex flex-col gap-4 border border-b-slate-300 mt-6 rounded-sm py-12 px-6 xsm:p-2"
        }
      >
        <h2
          className={
            "mb-4 xsm:mt-6 text-blue-500 text-xl font-semibold text-center"
          }
        >
          Login{" "}
          <span className="text-gray-900">
            Or{" "}
            <Link
              className="pb-1 border-b-gray-900 border-b-2"
              href={"/Registeration"}
            >
              Create an account
            </Link>
          </span>
        </h2>

        <label className={`flex flex-col gap-2`}>
          <span className={"text-gray-700"}>Email</span>
          <Input
            type={"text"}
            {...register("email")}
            required={true}
            placeholder={"example@gmail.com"}
          />
          {errors.email && <span>{errors?.email?.message}</span>}
        </label>
        <label className={`flex flex-col gap-2`}>
          <span className={"text-gray-700"}>Password</span>
          <Input
            type={"password"}
            placeholder={"*******"}
            {...register("password")}
            required={true}
          />
        </label>
        <Button type="submit" className="bg-blue-500">
          Login
        </Button>
      </form>
    </div>
  );
}
