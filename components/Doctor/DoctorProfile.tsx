import React from "react";
import img from "@/public/james.jpg";
import Image from "next/image";

// icons
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { TbSchool } from "react-icons/tb";

type Props = {
  name: string;
  specialization: string;
  email: string;
  phone: string;
  location: string;
  qualification: string;
};

export default function DoctorProfile({
  name,
  specialization,
  qualification,
  email,
  phone,
  location,
}: Props) {
  return (
    <section className="w-full md:flex-col flex gap-4 rounded-sm mt-10 mb-6 p-4 items-center border border-gray-300">
      <div className="relative w-[200px] xsm:w-full aspect-square">
        <Image
          alt="doctor's image"
          src={img}
          fill={true}
          className="object-cover rounded-sm"
        />
      </div>
      <div className="flex flex-col gap-[1px] md:w-full md:items-center">
        <div className="flex gap-2 items-center md:flex-col md:mb-2">
          <h1 className="text-2xl font-semibold text-gray-800">
            Doctor {" " + name}
          </h1>
          <h2 className="text- bg-blue-500 px-2 py-1 text-white rounded-[20px] text-center">
            {specialization}
          </h2>
        </div>
        <p className="text-lg text-gray-700 flex items-center gap-1">
          <HiOutlineMail />
          {email}
        </p>
        <p className="text-lg text-gray-700 flex items-center gap-1">
          <CiLocationOn />
          {location}
        </p>
        <p className="text-lg text-gray-700 flex items-center gap-1">
          <AiOutlinePhone />
          {phone}
        </p>
        <p className="text-lg text-gray-700 px-2 py-1 rounded-sm flex items-center gap-1 bg-blue-100 mt-2">
          <TbSchool />
          {qualification}
        </p>
      </div>
    </section>
  );
}
