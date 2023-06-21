import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { Doctor, Review } from "@/database/models/models";
export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      const reviewData = req.body.data;
      const { doctorId } = req.body.data;
      const review = {
        commentorId: reviewData.commentorId,
        commentorName: reviewData.commentorName,
        message: reviewData.message,
      };
      const updatedDoctor = await Doctor.findByIdAndUpdate(
        { _id: doctorId },
        {
          $push: { reviews: review },
        },
        {
          new: true,
        }
      );
      if (updatedDoctor) {
        res.status(201).json({
          message: "Review added",
          reviews: updatedDoctor.reviews.pop(),
        });
      }
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  }
}
