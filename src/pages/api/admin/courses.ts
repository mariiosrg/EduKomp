import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../server/db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const courses = await prisma.course.findMany();
    return res.status(200).json({ success: true, courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
