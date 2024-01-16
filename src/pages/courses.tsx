import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Shimmer from "../../components/shimmer";
import defaultImg from "../../public/img/defaultImg.jpg";
import { Course as CourseType } from "@prisma/client";
// import { Course } from "@/store/atoms/course.js";

function Courses() {
  const [courses, setCourses] = useState([]);

  const allcourses = async () => {
    try {
      const response = await axios.get(`/api/admin/courses/`);
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    allcourses();
  }, []);

  return (
    <div className="pt-40">
      {courses.length === 0 ? (
        <Shimmer /> // Show shimmer while loading
      ) : (
        <div className="flex justify-center flex-wrap mt-10">
          {courses.map((course, i) => (
            <Course course={course} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

interface CourseProps {
  course: CourseType;
}

export function Course({ course }: CourseProps) {
  const DEFAULT_IMAGE_URL = defaultImg; // Provide a placeholder or default image URL

  const isValidImageUrl = (url: string) =>
    url && typeof url === "string" && url.trim() !== "";
  const imageUrl = isValidImageUrl(course.imageLink)
    ? course.imageLink
    : DEFAULT_IMAGE_URL;

  return (
    <div className="hover:animate-bounce">
      <div className="card">
        <Link href={`/courses/${course?.id}`}>
          <div className="wrapper bg-gray-400 antialiased text-gray-900 p-10">
            <div>
              <div style={{ width: "250px", height: "250px" }}>
                <img
                  src={course?.imageLink}
                  alt="product image"
                  className="w-full h-full object-cover object-center rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="font-bold text-lg line-clamp-1">
                  {course?.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-yellow-600">
                    ${course?.price}
                  </p>
                  <button className="px-4 py-2 bg-sky-500 text-white rounded">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Courses;

// Added for custom client session handling
Courses.auth = true;
