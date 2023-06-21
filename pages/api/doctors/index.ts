import { NextApiRequest, NextApiResponse } from "next";
import { connect_database } from "@/database/connection";
import { Doctor } from "@/database/models/models";
import { iDoctor } from "@/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    console.log('yp')
    try {
      await connect_database();
      const doctors: iDoctor[] = await Doctor.find();
      if (doctors.length > 0) {
        console.log(doctors)
        res.status(200).json({
          doctors,
        });
      } else {
        res.status(200).json({
          message: "No doctors found",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({
        err: err,
      });
    }
  }
}
