import Divider from "@/components/ui/Divider";
import React from "react";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center sm:px-[5%] px-[10%]">
      <h1 className="my-6 text-2xl font-semibold text-slate-900">
        About, <span className="text-blue-500">Doctors</span>
        <Divider thickness={1} space={10} />
      </h1>
      <p className="max-w-[800px] text-center">
        Doctors is platform where you can easily book appointments with doctors
        in your region.
      </p>
      <p className="max-w-[800px] text-center my-2 text-gray-800">
        Doctors provide interactive user interface for users of every kind to
        easily approach best medical specialists and physicians. Users can
        easily book appointment(onsite/online) with doctors.
      </p>
      <p className="max-w-[800px] text-center my-2 text-gray-800">
        Users can fix the appointment time and date{" "}
        <span className="font-semibold">
          (The feature depends on doctor&apos;s and user&apos;s time flexibility).
        </span>
      </p>
    </main>
  );
}
