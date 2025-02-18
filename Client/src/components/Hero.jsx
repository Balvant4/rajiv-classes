import React from "react";
import MainButton from "./MainButton";

const HeroSection = ({
  headertext,
  desctext,
  imgPath,
  ClassName = "",
  btnText,
  btnClassName = "",
  imgClassName = "",
  subject,

  reverseLayout = false, // New prop to toggle layout
}) => {
  return (
    <section
      className={`flex flex-col ${
        reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between ${ClassName}`}
    >
      {/* Left Content */}
      <div className=" md:text-left max-w-lg">
        <h2 className="text-xl font-semibold text-indigo-600">{subject}</h2>{" "}
        {/* Subject */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          {headertext}
        </h1>
        <p className="text-gray-600 mt-4 text-lg">{desctext}</p>
        <MainButton text={btnText} className={`mt-4 ${btnClassName}`} />
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
        <img
          src={imgPath}
          alt={subject}
          className={`rounded-xl ${imgClassName}`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
