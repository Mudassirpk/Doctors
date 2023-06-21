import Login from "@/components/Registeration/Login";
import React from "react";

export default function Registeration() {
  return (
    <main className={"px-[10%] xl:px-[5%] lg:px-[2.5%]"}>
      <section className="flex flex-col items-center">
        <h1 className={"text-3xl text-center font-semibold mt-12"}>
          Welcome to, <span className={"text-blue-500"}>Doctors</span>
        </h1>
        <Login />
      </section>
    </main>
  );
}
