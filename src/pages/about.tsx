import Container from "../../components/container";

Container;
const about = () => {
  return (
    <div className="px-4 md:p-8 lg:px-36 min-h-screen space-y-4 pb-10">
      <Container className="pt-40">
        <h1 className="text-2xl font-bold text-gray-600 dark:text-white">
          KELOMPOK 4
        </h1>
        <br />
        <div className="md:flex-shrink-0">
          <div className="flex items-center gap-6">
            <img
              alt="Course Image"
              className="h-48 w-full object-cover md:w-48"
              height="200"
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="p-6 py-4">
              <h5 className="font-semibold">Mario Mora Siregar</h5>
              <p className="text-sm font-medium text-muted-foreground">
                50421781
              </p>
            </div>

            <img
              alt="Course Image"
              className="h-48 w-full object-cover md:w-48"
              height="200"
              src="https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="p-6 py-4">
              <h5 className="font-semibold">Sheila Laksmi Andini </h5>
              <p className="text-sm font-medium text-muted-foreground">
                51421417
              </p>
            </div>

            <img
              alt="Course Image"
              className="h-48 w-full object-cover md:w-48"
              height="200"
              src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="p-6 py-4">
              <h5 className="font-semibold">Dimas Ginanjar</h5>
              <p className="text-sm font-medium text-muted-foreground">
                50421389
              </p>
            </div>
          </div>
        </div>
        <br />
        <h1 className="text-2xl font-bold text-gray-600 dark:text-white">
          Our Mission
        </h1>
        <div className="text-gray-600 text-lg dark:text-white">
          <br /> EduKomp is an online web source that can be access all
          Indonesian students or college students. We provide various of courses
          in technology field, We want to help students who are eager to learn
          in tech fields. Right know, EduKomp has more than 3+ courses that can
          be accessed online, anytime and anywhere. At EduKomp, our mission is
          to empower educators and learners alike by providing a cutting-edge
          platform for creating, selling, and accessing online courses. Whether
          you're a passionate teacher looking to share your expertise or a
          curious learner eager to acquire new skills, EduKomp is your gateway
          to a world of educational possibilities.
        </div>
        <br />
        <div className="text-gray-600 text-lg dark:text-white">
          Whether you're a lifelong learner or an educator with expertise to
          share, Educourse is the ideal place to achieve your educational goals.
          Join us today, and embark on a journey of knowledge and growth.
        </div>
      </Container>
    </div>
  );
};

export default about;
