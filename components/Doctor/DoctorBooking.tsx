"use client";

import React, { useState } from "react";
import BookAppointmentForm from "./BookAppointmentForm";
import { Button } from "@/components/ui/button";
export default function DoctorBooking() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  return (
    <section className="px-4 sm:flex-col sm:gap-2 sm:py-4 py-2  flex items-center justify-between border border-gray-300 rounded-sm my-6">
      <p>Monday to Friday | 9 AM to 6 PM</p>
      <Button
        onClick={() => setIsBookingFormOpen(!isBookingFormOpen)}
        className="bg-blue-500 text-lg"
      >
        Book Appointment
      </Button>
      {isBookingFormOpen && <BookAppointmentForm setBookingForm={setIsBookingFormOpen}  />}
    </section>
  );
}
