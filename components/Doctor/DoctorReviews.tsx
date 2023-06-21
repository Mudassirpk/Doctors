"use client";

import React, { useEffect, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import UserReview from "./UserReview";
import { iReview } from "@/types";

export default function DoctorReviews({
  doctorId,
  reviews,
}: {
  doctorId: string;
  reviews: iReview[] | null | undefined;
}) {
  const [localReviews, setLocalReviews] = useState<
    iReview[] | null | undefined
  >();
  console.log(reviews);
  useEffect(() => {
    setLocalReviews(reviews);
  }, []);
  return (
    <section className="px-4 flex-col py-2 flex border border-gray-300 rounded-sm my-6">
      <h2 className="text-2xl font-semibold text-[#2E282A]">Reviews</h2>
      <div className="w-full mt-4 mb-2 flex flex-col gap-2">
        {localReviews &&
          localReviews.map((review: iReview) => {
            return (
              <div className="px-2 py-2 bg-orange-50 rounded-sm">
                <h3 className="text-xl font-semibold text-slate-700">
                  {review.commentorName}
                </h3>
                <p className="px-2 flex items-center gap-1">
                  <BsArrowReturnRight />
                  {review.message}
                </p>
              </div>
            );
          })}

        <UserReview
          reviews={localReviews as iReview[]}
          setReviews={setLocalReviews}
          doctorId={doctorId}
        />
      </div>
    </section>
  );
}
