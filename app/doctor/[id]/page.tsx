import { getServerSession } from "next-auth";

import DoctorProfile from "@/components/Doctor/DoctorProfile";
import DoctorDescription from "@/components/Doctor/DoctorDescription";
import DoctorBooking from "@/components/Doctor/DoctorBooking";
import DoctorReviews from "@/components/Doctor/DoctorReviews";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { iDoctor } from "@/types";
type Props = {
  params: { id: string };
};

export default async function Doctor({ params }: Props) {
  console.log("params: ", params.id);
  const id = params.id;
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect(`/Registeration/login?callbackUrl=/doctor/${params.id}`);
  }

  const response: Response = await fetch(
    "http://localhost:3000/api/doctors/getsingledoctor",
    {
      method: "post",
      body: JSON.stringify({
        id,
      }),
    }
  );

  const doctor: iDoctor = await response.json();
  return (
    <main className="px-[10%] sm:px-[5%]">
      <DoctorProfile
        name={doctor.name}
        specialization={doctor.specialization}
        qualification={doctor.qualification}
        location={doctor.location}
        email={doctor.email}
        phone={doctor.phone}
      />
      <DoctorDescription description={doctor.description} />
      <DoctorBooking />
      <DoctorReviews reviews={doctor.reviews} doctorId={doctor._id} />
    </main>
  );
}
