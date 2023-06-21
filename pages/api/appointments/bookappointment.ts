import { connect_database } from "@/database/connection";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      console.log("session: ", session);
      res.status(201).json(req.body);
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  }
}
