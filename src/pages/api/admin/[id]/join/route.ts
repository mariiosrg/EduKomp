import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../../server/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  try {
    const { id } = req.query;
    const joinCourse = await prisma.joinedCourse.create({
      data: {
        username: session?.user?.email!,
        courseId: id as string,
      },
    });

    return res.status(200).json({ success: true, joinCourse });
  } catch (error) {
    console.error("Error post join course:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
