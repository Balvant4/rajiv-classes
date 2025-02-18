import React from "react";

const Banner2 = () => {
  return (
    <div className=" bg-[#d9441f] text-white sm:text-center sm:py-20 py-5 w-full px-5 sm:px-0 ">
      <div>
        <h1 className=" text-2xl xl:text-3xl pb-4">
          Money shouldn’t dictate access to education.
        </h1>
        <p className=" text-lg lg:px-10 md:px-40 ">
          We want to live in a world where all kids have access to a great
          education - not just those whose families can afford one.
        </p>
      </div>
      <div className=" flex flex-col xl:flex-row  items-center justify-between sm:px-32 text-center pt-10 sm:pt-0">
        <div className=" flex flex-col justify-center items-center">
          <svg
            className="w-[7rem] h-[7rem] "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 className=" text-3xl pb-4">1-to-1 tutoring</h1>
          <p className=" px-10">
            Work with the same tutor every week, for 6 months or for 6 years!
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center pb-10 pt-10">
          <svg
            className="w-[7rem] h-[7rem]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
            />
          </svg>
          <h1 className=" text-3xl pb-4">1-to-1 tutoring</h1>
          <p className=" px-10">
            Work with the same tutor every week, for 6 months or for 6 years!
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <svg
            className="w-[7rem] h-[7rem]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
            />
          </svg>
          <h1 className=" text-3xl pb-4">1-to-1 tutoring</h1>
          <p className=" px-10">
            Work with the same tutor every week, for 6 months or for 6 years!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
