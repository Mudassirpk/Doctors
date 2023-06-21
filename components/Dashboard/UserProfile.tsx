"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

import userImage from "@/public/james.jpg";
import { iPatient } from "@/types";

export default function UserProfile() {
  const { data, status } = useSession();
  console.log(status)
  console.log(data)
  const user: iPatient = data?.user;
  return (
    <section className="flex sm:flex-col gap-4 items-center">
      <div className="relative w-[100px] aspect-square">
        <Image
          alt="user"
          fill={true}
          src={userImage}
          className="object-cover rounded-sm"
        />
      </div>
      <div className="flex-1 sm:text-center">
        <p className="font-semibold text-2xl text-slate-800">{user.name}</p>
        <p className="text-gray-700">{user.email}</p>
        <p className="text-gray-700">{user.address}</p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button className="bg-blue-500">Edit Profile</Button>
        <Button className="bg-red-500">Logout</Button>
      </div>
    </section>
  );
}
