import React, { useState, useEffect } from "react";
import MainButton from "./MainButton";
import { Link } from "react-router-dom";

export const testimonials = [
  {
    text: "Mr. Rajiv Sir math classes are truly exceptional! His clear explanations and problem-solving techniques have helped me grasp even the most difficult algebra and calculus concepts.",
    name: "Ankit Kumar",
    position: "High School Student",
    img: "/images/TestimonialsImages/ankit.JPG",
  },
  {
    text: "Physics used to be a challenge for me, but thanks to Mr. Rajiv Sir engaging lessons and real-world examples, I now enjoy learning and applying physics principles with confidence!",
    name: "Abhisek Kumar",
    position: "College Student",
    img: "/images/TestimonialsImages/balvant.JPG",
  },
  {
    text: "Biology has never been more fascinating! The interactive teaching methods and in-depth explanations make every lesson enjoyable. I now have a strong foundation in genetics and ecology.",
    name: "Balvant Kumar",
    position: "College Student",
    img: "/images/TestimonialsImages/ankit.JPG",
  },
  {
    text: "Chemistry concepts are so easy to understand now! The structured lessons and practical applications have improved my knowledge significantly.",
    name: "balvant kumar",
    position: "High School Student",
    img: "/images/TestimonialsImages/balvant.JPG",
  },
  {
    text: "Mr. Rajiv Sir math classes are truly exceptional! His clear explanations and problem-solving techniques have helped me grasp even the most difficult algebra and calculus concepts.",
    name: "Ankit Kumar",
    position: "High School Student",
    img: "/images/TestimonialsImages/ankit.JPG",
  },
  {
    text: "Physics used to be a challenge for me, but thanks to Mr. Rajiv Sir engaging lessons and real-world examples, I now enjoy learning and applying physics principles with confidence!",
    name: "Abhisek Kumar",
    position: "College Student",
    img: "/images/TestimonialsImages/balvant.JPG",
  },
  {
    text: "Biology has never been more fascinating! The interactive teaching methods and in-depth explanations make every lesson enjoyable. I now have a strong foundation in genetics and ecology.",
    name: "Balvant Kumar",
    position: "College Student",
    img: "/images/TestimonialsImages/ankit.JPG",
  },
  {
    text: "Chemistry concepts are so easy to understand now! The structured lessons and practical applications have improved my knowledge significantly.",
    name: "balvant kumar",
    position: "High School Student",
    img: "/images/TestimonialsImages/balvant.JPG",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const delay = 4000; // Auto-slide delay in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, delay);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Move to previous testimonial
  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Move to next testimonial
  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mt-2">Real experiences from our learners</p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-5xl mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[0, 1].map((offset) => {
            const testimonialIndex = (index + offset) % testimonials.length;
            return (
              <div
                key={testimonialIndex}
                className="p-6 bg-gray-100 rounded-lg shadow-md transition duration-500"
              >
                <p className="text-lg font-medium text-gray-900">
                  "{testimonials[testimonialIndex].text}"
                </p>
                <div className="flex items-center mt-4 space-x-3">
                  <img
                    className="w-14 h-14 rounded-full"
                    src={testimonials[testimonialIndex].img}
                    alt="profile"
                  />
                  <div className="text-left">
                    <div className="text-gray-900 font-medium">
                      {testimonials[testimonialIndex].name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[testimonialIndex].position}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-5 mt-6">
        <button
          onClick={prevTestimonial}
          className="p-2 bg-gray-300 text-gray-900 rounded-full hover:bg-gray-400 transition cursor-pointer"
        >
          ◀
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 bg-gray-300 text-gray-900 rounded-full hover:bg-gray-400 transition cursor-pointer"
        >
          ▶
        </button>
      </div>

      {/* Read More Button */}
      <div className="flex justify-center mt-5">
        <Link to="/wall-of-love">
          <MainButton text="Read More Testimonials" />
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
