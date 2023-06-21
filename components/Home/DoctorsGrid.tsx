import React from "react";
import DoctorCard from "@/components/Home/DoctorCard";
import { iDoctor } from "@/types";

export default async function DoctorsGrid() {
  const response: Response = await fetch("http://localhost:3000/api/doctors/", {
    method: "GET",
    cache: "no-store",
  });
  const doctors: iDoctor[] = (await response.json()).doctors;
  return (
    <section className={"mb-4 mt-6"}>
      <h1 className={"text-2xl text-slate-900 font-semibold"}>Doctors</h1>
      <div
        className={
          "w-full py-4 gap-4 grid grid-cols-4 xl:grid-cols-3 midlg:grid-cols-2 sm:grid-cols-1"
        }
      >
        {doctors &&
          doctors.map((doctor: iDoctor) => {
            return <DoctorCard doctor={doctor} key={doctor._id} />;
          })}
      </div>
    </section>
  );
}
