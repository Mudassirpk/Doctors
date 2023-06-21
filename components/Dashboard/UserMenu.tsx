"use client";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

type Props = {};

function UserMenu({}: Props) {
  return (
    <div className="absolute w-min right-0 top-[60px] border border-blue-500 rounded-sm flex flex-col items-center  bg-white shadow-2xl">
      <Link
        href={"/Dashboard"}
        className="text-gray-800 py-2 px-4 w-full text-center hover:bg-blue-100"
      >
        Dashboard
      </Link>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="text-gray-800 hover:bg-red-300 py-2 px-4 w-full text-center"
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
