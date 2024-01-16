import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../server/db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    await prisma.$connect();
    const { id } = req.query;
    const courses = await prisma.course.findUnique({
      where: { id: id as string },
      include: {
        joinedCourses: true,
      },
    });
    res.status(200).json({ success: true, courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
};
