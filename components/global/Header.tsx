"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserMenu from "../Dashboard/UserMenu";
import { iPatient } from "@/types";

export default function Header() {
  const [isUserModel, setIsUserModel] = useState(false);
  const { data, status } = useSession();
  const user: iPatient = data?.user;

  return (
    <header
      className={`${
        !user && "sm:flex-col sm:gap-2"
      } px-[10%] sm:px-[5%] py-6 sm:py-3 border items-center flex justify-between border-b-blue-100`}
    >
      <Link href="/" className="text-3xl font-semibold text-blue-600">
        Doctors
      </Link>
      <ul className="flex gap-2 items-center text-slate-900">
        <li>
          <Link href={"/About"}>About</Link>
        </li>
        {status === "authenticated" ? (
          <li className="relative">
            <p
              onClick={() => setIsUserModel(!isUserModel)}
              className="cursor-pointer select-none border-l-gray-950 border-l pl-3 text-blue-500 text-2xl font-semibold"
            >
              {user.name}
            </p>
            {isUserModel && <UserMenu />}
          </li>
        ) : (
          <li className="flex gap-2 items-center">
            <Link
              className={"px-4 py-2 bg-blue-500 text-white rounded-sm"}
              href={"/Registeration"}
            >
              Create an account
            </Link>
            <Link
              className={"px-4 py-2 bg-blue-500 text-white rounded-sm"}
              href={"/Registeration/login"}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}
