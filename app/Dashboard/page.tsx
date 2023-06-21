import { getServerSession } from "next-auth";
import Divider from "@/components/ui/Divider";
import React from "react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

// components
import AppointmentsTable from "@/components/Dashboard/Table";
import UserProfile from "@/components/Dashboard/UserProfile";
import { redirect } from "next/navigation";
export default async function Appointments() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/Registeration/login?callbackUrl=/Dasboard");
  }

  return (
    <main className="px-[10%] sm:px-[5%]">
      <div className="px-4 border my-6 border-gray-300 pb-6 rounded-sm">
        <h1 className="my-6 font-semibold text-2xl text-slate-800">
          Your Profile <Divider thickness={1} space={10} />
        </h1>
        <UserProfile />
      </div>
      <div className="px-4 border my-6 border-gray-300 rounded-sm">
        <h1 className="my-6 font-semibold text-2xl text-slate-800">
          Your Appointments <Divider thickness={1} space={10} />
        </h1>
        <AppointmentsTable />{" "}
      </div>
    </main>
  );
}
