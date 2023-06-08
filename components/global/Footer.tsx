import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="text-center py-6 border border-t-blue-200 text-xl">
      All rights resserved{" "}
      <Link href={"/"} className="text-blue-500 font-semibold">
        Doctors
      </Link>
    </footer>
  );
}
