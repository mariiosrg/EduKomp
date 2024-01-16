import { courseState } from "@/store/atoms/course";
import {
  courseDescription,
  courseImage,
  coursePrice,
  courseTitle,
  joinedCourse,
} from "@/store/selectors/course";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Course = () => {
  const { query } = useRouter();
  const setCourse = useSetRecoilState(courseState);
  const init = async () => {
    const response = await axios.get(`/api/admin/${query.id}/route`);

    setCourse({ course: response?.data?.courses });
  };

  useEffect(() => {
    init();
  }, [setCourse, query.id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <GrayTopper />
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Course;

function GrayTopper() {
  const title = useRecoilValue(courseTitle);
  return (
    <div className="h-60 bg-gray-900 top-0 min-w-full -mb-96 mt-10">
      <div className="h-60 flex justify-center flex-col">
        <div>
          <h1 className="text-2xl flex justify-center -mt-20 font-bold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

function CourseCard() {
  const session = useSession();
  const imageLink = useRecoilValue(courseImage);
  const desc = useRecoilValue(courseDescription);
  const joined = useRecoilValue(joinedCourse);

  const isUserJoined = joined?.some(
    (course) => course.username === session.data?.user?.email
  );

  const router = useRouter();

  const handleJoinCourse = async () => {
    await axios.post(`/api/admin/${router.query.id}/join/route`);
    router.push("/courses");
    toast.success("Successfully joined course!");
  };

  return (
    <div className="md:flex md:justify-center md:h-screen border:none md:border p-5 shadow-lg w-1 md:p-5 md:w-3 lg:my-5 z-20 rounded-lg pt-40">
      <div className="flex flex-col items-center">
        <img
          className="rounded-lg flex justify-start"
          src={imageLink}
          alt="product image"
          style={{ height: "400px", width: "400px" }}
        />
        <div className="mt-2">
          <div className="">
            <p className="font-medium">Description</p>
            <p className="text-gray-500">{desc}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center font-semibold text-lg text-yellow-600">
                $<Price />
              </div>
            </div>
            {isUserJoined ? (
              <div
                style={{
                  backgroundColor: "green",
                  padding: "8px",
                  borderRadius: "5px",
                  color: "white",
                  cursor: "default",
                }}
              >
                Already joined
              </div>
            ) : (
              <button
                className="text-sm"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "8px",
                  borderRadius: "5px",
                }}
                onClick={handleJoinCourse}
              >
                Join Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Price() {
  const price = useRecoilValue(coursePrice);
  return (
    <>
      <p className="font-semibold text-lg">{price} </p>
    </>
  );
}
