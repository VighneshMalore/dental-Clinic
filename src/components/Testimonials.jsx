import React from "react";
import { FaStar, FaRegThumbsUp } from "react-icons/fa";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah",
      date: "2023-08-15",
      rating: 5,
      message:
        "I had a wonderful experience at Sakthi Dental Clinic. The staff was friendly and professional, and the dentist was very gentle and thorough. I highly recommend them!",
      likes: 2,
      avatar: man,
    },
    {
      name: "Emily",
      date: "2023-07-22",
      rating: 5,
      message:
        "Sakthi Dental Clinic is the best dental clinic I’ve ever been to. The environment is so welcoming, and the care is top-notch. My kids love coming here!",
      likes: 3,
      avatar:woman,
    },
    {
      name: "Jessica",
      date: "2023-06-10",
      rating: 4,
      message:
        "The clinic is clean and modern, and the staff is very knowledgeable. I was happy with the treatment I received.",
      likes: 1,
      avatar: man,
    },
  ];
  return <>
  <div className=" mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-600 pl-3">
        Patient Testimonials
      </h2>
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="mb-8 border-l-4 border-dotted border-gray-300 pl-4"
        >
          <div className="flex items-center gap-4 mb-2">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>

          <div className="flex items-center text-blue-600 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`mr-1 ${
                  i < item.rating ? "text-blue-600" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="text-gray-800 mb-2">{item.message}</p>

          <div className="flex items-center text-sm text-gray-600 gap-2">
            <FaRegThumbsUp />
            <span>{item.likes}</span>
          </div>
        </div>
      ))}
    </div>
  </>;
};

export default Testimonials;
