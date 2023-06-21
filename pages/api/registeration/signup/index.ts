import { connect_database } from "@/database/connection";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/database/models/models";
import bcrypt from "bcryptjs";
import { iPatient } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await connect_database();
    const new_user: iPatient = req.body;
    const password = new_user.password;
    try {
      const encrypted_password = await bcrypt.hash(password, 10);
      const new_signup_user = await new User({
        name: new_user.name,
        email: new_user.email,
        phone: new_user.phone,
        address: new_user.address,
        password: encrypted_password,
      });

      const saved_user: iPatient = await new_signup_user.save();

      if (saved_user) {
        saved_user.password = "";
        res.status(200).json({
          message: "Account created successfuly",
          user: saved_user,
        });
      }
    } catch (err: any) {
      console.log(err);
      if (err.code && err.code === 11000) {
        res.status(409).json({
          message: `${
            err.keyPattern["phone"] ? "Phone number" : "Email"
          } already in use`,
          property: `${err.keyPattern["phone"] ? "phone" : "email"}`,
        });
      } else {
        res.status(400).send(err);
      }
    }
  }
}
