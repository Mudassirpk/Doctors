"use client";
import React, { SetStateAction, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { Textarea } from "../ui/textarea";
import { iPatient, iReview } from "@/types";
import { useSession } from "next-auth/react";
import { FieldValues, useForm } from "react-hook-form";
import z, { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type Props = {
  doctorId: string;
  setReviews: React.Dispatch<SetStateAction<iReview[] | null | undefined>>;
  reviews: iReview[];
};

const reviewInputSchema: ZodType<{ message: string }> = z.object({
  message: z
    .string()
    .min(4, { message: "Review should be atleast 4 characters" }),
});

function UserReview({ doctorId, reviews, setReviews }: Props) {
  const { data } = useSession();
  const user: iPatient = data?.user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iReview>({
    resolver: zodResolver(reviewInputSchema),
  });

  async function submitReview(data: FieldValues) {
    const post_data = {
      ...data,
      commentorId: user._id,
      commentorName: user.name,
      doctorId: doctorId,
    };
    return await axios.post("/api/doctors/addreview/", {
      data: post_data,
    });
  }

  const mutation = useMutation({
    mutationFn: (data: FieldValues) => submitReview(data),
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      setReviews([...reviews, data.data.reviews]);
    },
  });

  return (
    <div className="py-4">
      <h1 className="text-xl mb-2 font-semibold text-gray-800">
        Give your review about doctor
      </h1>
      <form
        onSubmit={handleSubmit((data: FieldValues) => mutation.mutate(data))}
        className="flex gap-2 flex-col items-center"
      >
        <Textarea
          {...register("message")}
          className="text-lg text-slate-800"
          placeholder="Your review ..."
        />
        <div
          className={`w-full flex items-center  ${
            errors.message ? "justify-between" : "justify-end"
          }`}
        >
          {errors.message && (
            <span className="text-red-900 ">{errors.message.message}</span>
          )}
          <button
            disabled={mutation.isLoading}
            type="submit"
            className={`w-max self-end py-2  px-2 rounded-sm text-white ${
              mutation.isLoading ? "bg-gray-700" : "bg-blue-500"
            }`}
          >
            Submit
          </button>
        </div>
      </form>
      <p className="text-yellow-600 my-2 flex gap-1 items-center">
        <RiErrorWarningLine className="text-lg text-yellow-600" /> Please keep
        the reviews as per community standards
      </p>
    </div>
  );
}

export default UserReview;
