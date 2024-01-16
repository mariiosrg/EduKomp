import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../server/db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { courseId } = req.query;
    const courseData = req.body;
    // If courseId is provided, update the existing course
    const updatedCourse = await prisma.course.update({
      where: { id: courseId as string },
      data: courseData,
    });
    return res.status(200).json({
      success: true,
      message: "Course updated successfully",
      course: updatedCourse,
    });
  } catch (error) {
    console.error("Error updating course:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
