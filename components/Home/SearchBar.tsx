import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  return (
    <section className={"w-full pb-4 pt-6"}>
      <h1 className={"mb-2 font-semibold text-slate-900 text-xl"}>
        Find Doctors
      </h1>
      <div className={"flex sm:flex-col gap-2"}>
        <Input
          placeholder={
            "Enter the suspected disease to find the related doctors"
          }
          className={"outline-none"}
        />
        <Button>Search</Button>
      </div>
    </section>
  );
}
