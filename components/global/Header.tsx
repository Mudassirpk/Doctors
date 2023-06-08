import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-[10%] py-6 border items-center flex justify-between border-b-blue-100">
      <Link href="/" className="text-3xl font-semibold text-blue-600">
        Doctors
      </Link>
      <ul className="flex gap-2 text-slate-900">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/about"}>Appointments</Link>
        </li>
      </ul>
    </header>
  );
}
