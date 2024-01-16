import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../../server/db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    await prisma.$connect();
    const { id } = req.query;
    const joinCourse = await prisma.joinedCourse.create({
      data: {
        username: session?.user?.email!,
        courseId: id as string,
      },
    });

    if (joinCourse) {
      res.status(200).json({ success: true, joinCourse });
    } else {
      res.status(404).json({ success: false, message: "No Course is present" });
    }
  } catch (error) {
    console.error("Error post join course:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
};
