import React from "react";
import MainButton from "./MainButton";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-100 md:h-screen md:mt-0 mt-10">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Ace Math & Physics – Learn Smarter, Not Harder!
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          "Join thousands of students who have transformed their learning
          experience with step-by-step explanations, real-world applications,
          and interactive lessons. Whether you're preparing for exams or just
          want to master these subjects, I’m here to guide you!"
        </p>
        <MainButton text="Join Now" className="mt-4 " />
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center md:mb-0 mb-5 ">
        <img
          src="https://cdn.prod.website-files.com/6591cfa135e450f1bb1af997/6591cfa135e450f1bb1afa9a_girl-studying-at-computer-2-min-p-800.jpg"
          alt="Hero"
          className="w-80 md:w-full max-w-xl rounded-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
