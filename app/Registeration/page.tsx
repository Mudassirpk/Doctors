import React from "react";
import SignUp from "@/components/Registeration/SignUp";
import Link from "next/link";
export default function Registeration() {
  return (
    <main className={"px-[10%] xl:px-[5%] lg:px-[2.5%]"}>
      <section className="flex flex-col items-center">
        <h1 className={"text-3xl text-center font-semibold mt-12"}>
          Welcome to, <span className={"text-blue-500"}>Doctors</span>
        </h1>
        <SignUp />
      </section>
    </main>
  );
}
