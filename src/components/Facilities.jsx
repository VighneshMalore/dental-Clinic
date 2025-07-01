import React from "react";
import bannerfacillity1 from "../assets/bannerfacillity1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";
import banner6 from "../assets/banner6.png";
import banner7 from "../assets/banner7.png";
const Facilities = () => {
  const facilities = [
    {
      src: banner6,
      title: "Comfortable Waiting Area",
      desc: "Relax in our comfortable waiting area with amenities to make your visit pleasant.",
    },
    {
      src: banner4,
      title: "Child-Friendly Environment",
      desc: "We have a dedicated play area for children to keep them entertained before their appointments.",
    },
    {
      src: banner5,
      title: "Modern Equipment",
      desc: "Our clinic is equipped with the latest dental technology for accurate diagnoses and effective treatments.",
    },
    {
      src: banner7,
      title: "Sterilization Standards",
      desc: "We adhere to strict sterilization protocols to ensure a safe and hygienic environment.",
    },

  ];
  return (
    <div className="mb-5 pb-2">
  <div className="text-2xl font-bold mb-6 border-l-4 border-blue-600 pl-3">
    Clinic Facilities & Amenities
  </div>
  <div className="flex flex-wrap justify-center gap-6">
    {facilities.map((facility, index) => (
      <div
        key={index}
        className="border-[#0D171C] border rounded-lg p-4 m-2 md:w-1/5 flex flex-col items-center"
      >
        <img
          src={facility.src}
          alt={facility.title}
          className="w-full h-auto object-cover mb-2 rounded"
        />
        <div className="text-md font-bold text-center">{facility.title}</div>
        <div className="text-sm text-gray-600 text-center">{facility.desc}</div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Facilities;
