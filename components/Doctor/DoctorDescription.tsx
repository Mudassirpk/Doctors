import React from "react";

export default function DoctorDescription({
  description,
}: {
  description: string;
}) {
  return (
    <section className="p-4 border border-gray-300 rounded-sm">
      <h2 className="text-2xl font-semibold text-[#2E282A]">Description</h2>
      <p className="my-1 text-slate-700">{description}</p>
    </section>
  );
}
