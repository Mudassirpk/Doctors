import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import docImage from "@/public/james.jpg";
import { iDoctor } from "@/types";

type Props = {
  doctor: iDoctor;
};

export default function DoctorCard({ doctor }: Props) {
  return (
    <div className={"bg-amber-50"}>
      <Card className={"p-4"}>
        <CardTitle className={"pb-4 border-b border-b-slate-300"}>
          <span className={"text-blue-500"}>Doctor,</span> {doctor.name}
        </CardTitle>
        <CardContent className={"py-4 items-center px-0 flex gap-4"}>
          <div
            className={
              "h-[50px]  aspect-square rounded-full relative overflow-hidden"
            }
          >
            <Image
              src={docImage}
              alt={"Image of a doctor"}
              fill={true}
              className={"object-cover"}
            />
          </div>
          <div>
            <p>{doctor.specialization}</p>
            <p className={"text-[10px] text-gray-700"}>
              {doctor.experience} Years of Experience
            </p>
          </div>
        </CardContent>
        <CardDescription className={"text-[14px]"}>
          {doctor.description}
          <span className="flex items-center gap-2 font-semibold my-4">
            <MapPin className="text-blue-500" />
            {doctor.location}
          </span>
        </CardDescription>
        <CardFooter className={"p-0 w-full flex flex-col gap-2 mt-4"}>
          <Button className="w-full">
            <Link href={`/doctor/${doctor._id}`} className={"w-full"}>
              Book an appointment
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
