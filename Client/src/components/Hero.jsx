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
  reverseLayout = false, // Toggle layout direction
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-10 md:gap-16 ${ClassName}`}
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
        <h2 className="text-xl font-semibold text-indigo-600">{subject}</h2>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          {headertext}
        </h1>
        <p className="text-gray-600 mt-4 text-lg">{desctext}</p>
        <MainButton text={btnText} className={`mt-4 ${btnClassName}`} />
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
        <img
          src={imgPath}
          alt={subject}
          className={`rounded-xl max-w-full h-auto object-cover flex-shrink-0 ${imgClassName}`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
