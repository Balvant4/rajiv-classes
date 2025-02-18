import React from "react";
import HeroSection from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <div>
      <HeroSection
        headertext="Ace Math & Physics – Learn Smarter, Not Harder!"
        desctext="Join thousands of students who have transformed their learning
                experience with step-by-step explanations, real-world applications,
                and interactive lessons. Whether you're preparing for exams or just
                want to master these subjects, I’m here to guide you!"
        imgPath="https://cdn.prod.website-files.com/6591cfa135e450f1bb1af997/6591cfa135e450f1bb1afa9a_girl-studying-at-computer-2-min-p-800.jpg"
        ClassName="px-6 md:px-16  py-12 bg-gray-100 xl:h-screen  md:mt-20 xl:mt-10 mt-10 flex-col md:flex-row"
        btnText="Join Now"
        btnClassName="mt-4 w-full bg-indigo-500  hover:bg-indigo-600 rounded-xl"
        imgClassName="w-80 md:w-[40rem] md:h-[30rem]"
      />
      <Testimonials />
      <Banner />

      <HeroSection
        subject="Mathematics"
        headertext="Master Math with Confidence"
        desctext="Personalized math tutoring for K-12 students, helping them improve problem-solving skills and achieve academic excellence."
        // listItems={["Algebra", "Geometry", "Trigonometry", "Calculus"]}
        imgPath="https://cdn.prod.website-files.com/6591cfa135e450f1bb1af997/6591cfa135e450f1bb1afaad_girl-studying-at-computer-min-p-800.jpg"
        ClassName="px-5 py-5 xl:py-10 xl:px-40"
        btnText="Join Math Class"
        btnClassName="mt-4 bg-[#f04e23] hover:bg-[#d9441f] rounded-xl"
        imgClassName="w-80 md:w-[40rem] md:h-[20rem]"
        reverseLayout={false} // Keep default layout
      />

      <HeroSection
        subject="Physics"
        headertext="Physics Simplified"
        desctext="Our physics tutors make complex topics easy to grasp, ensuring students gain confidence in their understanding of the physical world."
        // listItems={[
        //   "Newton's Laws",
        //   "Electricity & Magnetism",
        //   "Quantum Physics",
        // ]}
        imgPath="https://cdn.prod.website-files.com/6591cfa135e450f1bb1af997/6722697bdbe0e8aa923f844f_free-math-tutor-img-fixed.jpg"
        ClassName="px-5 py-5 xl:py-10 xl:px-40"
        btnText="Start Physics Tutoring"
        btnClassName="mt-4 bg-[#f04e23] hover:bg-[#d9441f] rounded-xl"
        imgClassName="w-80 md:w-[40rem] md:h-[20rem]"
        reverseLayout={true} // Reverse layout for alternating design
      />

      <HeroSection
        subject="Biology"
        headertext="Excel in Biology"
        desctext="Get expert guidance in biology topics, from cell biology to human anatomy, with our interactive tutoring sessions."
        // listItems={["Cell Biology", "Genetics", "Human Anatomy", "Ecology"]}
        imgPath="https://cdn.prod.website-files.com/6591cfa135e450f1bb1af997/67226a3a86145e80eae7232a_tutoring-all-subjects.jpg"
        ClassName="px-5 py-5 xl:py-10 xl:px-40"
        btnText="Get Biology Help"
        btnClassName="mt-4 bg-[#f04e23] hover:bg-[#d9441f] rounded-xl"
        imgClassName="w-80 md:w-[40rem] md:h-[20rem]"
        reverseLayout={false}
      />
    </div>
  );
};

export default Home;
