import { NextApiRequest, NextApiResponse } from "next";
import { Doctor } from "@/database/models/models";
import { connect_database } from "@/database/connection";
export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const id = JSON.parse(req.body).id;
    try {
      await connect_database();
      if (id && id.length > 0) {
        console.log("id: ", id);
        const doctor = await Doctor.findById({ _id: id });
        if (doctor) {
          res.status(200).json(doctor);
        } else {
          res.status(404).json({
            message: "Doctor not found",
          });
        }
      } else {
        res.status(400).json({
          message: "Incomplete information",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: err,
      });
    }
  }
}
