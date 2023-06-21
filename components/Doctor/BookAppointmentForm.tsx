"use client";
import React, {
  EventHandler,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import DatePicker from "../ui/DatePicker";
import Timeslots from "./Timeslots";
import { useForm } from "react-hook-form";
import { iBookingForm, iPatient } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingFormSchema } from "@/lib/zodschema";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function BookAppointmentForm({
  setBookingForm,
}: {
  setBookingForm: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { data } = useSession();
  const user: iPatient = data?.user;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iBookingForm>({
    resolver: zodResolver(BookingFormSchema),
  });

  // handling date
  const [date, setDate] = useState<Date>();
  // -- handling date
  // handling timeslot
  const [TimeSlot, setTimeSlot] = useState<string>("");
  // -- handling timeslot

  function bookAppointment(data: iBookingForm) {
    const post_data = {
      ...data,
      timeslot: TimeSlot,
      date: date?.toString(),
      pId: user._id,
      docId: "xx9023dhen23hn45n2",
    };
    return axios.post("/api/appointments/bookappointment/", { post_data });
  }

  const mutation = useMutation({
    mutationFn: (data: iBookingForm) => bookAppointment(data),
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  function closeBookingForm(e: React.SyntheticEvent) {
    const target = e.target as HTMLElement;

    if (target.id === "booking-form-wrapper") {
      setBookingForm(false);
    }
  }

  return (
    <section
      id="booking-form-wrapper"
      onClick={closeBookingForm}
      className="fixed w-full h-full top-0 flex justify-center items-center left-0 bg-[rgba(0,0,0,.4)]"
    >
      <form
        className="w-[450px] bg-white rounded-sm p-4"
        onSubmit={handleSubmit((data: iBookingForm) => mutation.mutate(data))}
      >
        <h2 className="text-xl font-semibold text-slate-600">
          Book Appointment
        </h2>
        <label className="flex gap-1 flex-col my-2">
          <span className="text-slate-700">Patient's Name</span>
          <Input
            required={true}
            {...register("pName")}
            placeholder="Patient's Name"
            type="text"
          />
        </label>
        <label className="flex gap-1 flex-col my-2">
          <span className="text-slate-700">Patient's Age</span>
          <Input
            {...register("pAge", { valueAsNumber: true })}
            required={true}
            placeholder="Patient's Age"
            min={1}
            type="number"
          />
          <span>{errors.pAge && errors.pAge.message}</span>
        </label>
        <label className="flex gap-1 flex-col my-2">
          <span className="text-slate-700">Symptoms</span>
          <Textarea
            {...register("symptoms")}
            required={true}
            placeholder="Symptoms"
          />
        </label>
        <label className="flex gap-1 flex-col my-2 w-full">
          <span className="text-slate-700">Appointment Date</span>
          <DatePicker date={date} setDate={setDate} />
        </label>
        <label className="flex gap-1 flex-col my-2 w-full">
          <span className="text-slate-700">Appointment Time</span>
          <Timeslots setTimeSlot={setTimeSlot} currentTimeSlot={TimeSlot} />
        </label>
        <Button type="submit" className="bg-blue-500 w-full mt-2">
          Book Appointment
        </Button>
      </form>
    </section>
  );
}
