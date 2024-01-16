import Head from "next/head";
import Hero from "../../components/hero";
import SectionTitle from "../../components/sectionTitle";
import { benefitOne, benefitTwo } from "../../components/data";
import Benefits from "../../components/benefits";
import Testimonials from "../../components/testimonials";
import Promo from "../../components/promo";
import Video from "../../components/video";
import Faq from "../../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>EduKomp - Learn Anything on your schedule</title>
        <meta
          name="description"
          content="EduKomp is a course selling app built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <SectionTitle
        pretitle="EduKomp Benefits"
        title=" Why should you choose us?"
      >
        Whether you're looking to enhance your career, explore new hobbies, or
        further your education, EduKomp offers a diverse range of high-quality
        courses that you can access anytime, anywhere. With user-friendly
        features, personalized recommendations, and a supportive learning
        community, EduKomp is designed to help you achieve your learning goals
        and unlock your full potential.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <div className="mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-center">Promo</h1>
        <Promo />
      </div>
      <div className="mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-center">
          Free Video Course Sample
        </h1>
        <p className="text-lg text-center ">
          Phyton, is one of the demand skills in programming skills today.
          Here's our free video sample from one of our courses, Introduction to
          Phython. Care to know more? Register at EduKomp NOW.
        </p>
        <Video />
      </div>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our Students have to say"
      ></SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        This section answers frequently asked questions we receive about
        learning with EduKomp.
      </SectionTitle>
      <Faq />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;
