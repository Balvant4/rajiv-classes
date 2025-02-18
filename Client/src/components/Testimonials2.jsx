import React from "react";
import { testimonials } from "./Testimonials";
import MainButton from "./MainButton";
import { Link } from "react-router-dom";

const Testimonials2 = () => {
  return (
    <section className="bg-white py-12 pt-20 md:pt-34">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Our Wall of Love
        </h2>
        <p className="text-gray-500 text-lg mt-2 px-4">
          This is a small collection of the wins we have collected from
          students, parents and tutors— a small sampling of quotes and videos to
          show that our program works. And they all have one thing in common:
          they are all a testament to our community of tutors and students who
          are making a difference in each others lives.
        </p>
      </div>

      <div className=" px-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-5 bg-gray-100 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
          >
            <p className="text-gray-800 text-base">"{testimonial.text}"</p>
            <div className="flex items-center mt-4 space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.img}
                alt={testimonial.name}
              />
              <div className="text-left">
                <p className="text-gray-900 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
        <div className=" flex justify-center items-center md:hidden ">
          <Link to="/">
            <MainButton
              text="Back to Home Page"
              className="bg-[#f04e23] hover:bg-[#d9441f] rounded-xl"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
