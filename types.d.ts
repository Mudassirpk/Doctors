// nextauth types
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
    } & Session["user"];
  }
}
// ----- nextauth types

// type for entities

import { SetStateAction } from "react";

interface iPatient {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  mapCordinate: string;
  appointments: [Appointments];
}

interface iDoctor {
  _id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  experience: string;
  qualification: string;
  description: string;
  mapCoordinate: string;
  location: string;
  appointments: [string];
  reviews: [Review];
}

interface iReview {
  _id: string;
  commentorId: string;
  commentorName: string;
  message: string;
  img: string;
}

interface iAppointment {
  _id: string;
  patient: string;
  doctor: string;
  time: string;
  onsite: boolean;
}

// end: types for entities

// types for application

interface iUserSignUp {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  confirmPassword: string;
}

interface iUserLogin {
  email: string;
  password: string;
}

type errorType = {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
};

// context types
interface iContext {
  user: iPatient | null;
  setUser: React.Dispatch<SetStateAction<iPatient | null>>;
}

// types for forms

interface iBookingForm {
  pName: string;
  pAge: number;
  symptoms: string;
}

interface iBookingFormCompleteType {
  pName: string;
  pAge: string;
  sysmptoms: string;
  date: string;
  timeslot: string;
}
