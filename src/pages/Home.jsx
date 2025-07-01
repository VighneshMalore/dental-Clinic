import React from "react";
import banner1 from "../assets/banner1.jpg";
import Pediatricdentistry from "../assets/Pediatricdentistry.png";
import bleaching from "../assets/bleaching.png";
import filling from "../assets/filling.png";
import RootCanalTreatment from "../assets/RootCanalTreatment .png";
import Marquee from "react-fast-marquee";
import Impants from "../assets/Impants.png";
import lasersurgery from "../assets/laser-surgery.png";
import OrthodonicTreatment from "../assets/OrthodonicTreatment.png";
import Aligner from "../assets/Aligner.png";  
import Testimonials from "../components/Testimonials";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          className="w-full h-[40vh] md:h-auto rounded-2xl shadow-2xl object-cover md:object-fill"
          src={banner1}
          alt="Dental Clinic Banner"
        />
        {/* Text Section */}
        <div className="absolute bottom-6 left-6 text-white max-w-md">
          <h1 className="text-xl md:text-4xl font-bold mb-2">
            Sakthi Dental Clinic
          </h1>
          <p className="text-sm md:text-base leading-snug">
            Your trusted dental care provider for women and children. Experience
            gentle, personalized care in a comfortable environment.
          </p>
        </div>
      </div>
      <div className="mx-6 px-1 py-3 text-sm font md:text-2xl font-bold mt-4">
        Welcome to Sakthi Dental Clinic
      </div>
      <div className="mx-6 px-1 py-3 text-sm md:text-lg font-normal">
        At Sakthi Dental Clinic, we are dedicated to providing exceptional
        dental care for women and children in a warm and welcoming
        atmosphere.Our team of experienced professionals is committed to
        ensuring your comfort and well-being throughout your visit. We offer a
        comprehensive range of services, from routine <br />
        check-ups to advanced treatments, tailored to meet your unique needs.
      </div>

      <div>
        <div className="text-2xl font-bold mb-6 border-l-4 border-blue-600 pl-3">
          Why Choose Sakthi Dental Clinic?
        </div>
        <div className="mx-6 px-2 py-3 text-sm md:text-4xl font-bold">
          Our Commitment to Your Care
        </div>
        <div className="mx-6 px-2 py-1 text-sm md:text-lg font-normal">
          We prioritize your comfort and satisfaction, offering personalized
          treatment plans and a<br /> gentle approach to dental care.
        </div>
        <div className="flex justify-center items-center flex-wrap gap-7 ">
          <div className="border-2 border-[#0D171C] rounded-lg p-4 m-2 border-dotted md:w-1/5 h-[25vh]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="20"
              height="20"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="black"
                strokeWidth="3"
              />
              <circle cx="35" cy="40" r="5" fill="black" />
              <circle cx="65" cy="40" r="5" fill="black" />
              <path
                d="M30,65 Q50,80 70,65"
                fill="none"
                stroke="black"
                strokeWidth="3"
              />
            </svg>
            <div>
              <div className="text-lg font-bold">Gentle Care</div>
              <div>
                Our team is trained to provide gentle and compassionate care,
                ensuring a comfortable experience for all patients.
              </div>
            </div>
          </div>
          <div className="border-2 border-[#0D171C] rounded-lg p-4 m-2 border-dotted md:w-1/5 h-[25vh]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 4L6 8v8c0 7 10 12 10 12s10-5 10-12V8l-10-4z" />
              <path d="M12 17l3 3 5-5" />
            </svg>
            <div>
              <div className="text-lg font-bold">Experienced Team</div>
              <div>
                Our experienced dentists and staff are dedicated to providing
                the highest quality dental care.
              </div>
            </div>
          </div>
          <div className="border-2 border-[#0D171C] rounded-lg p-4 m-2 border-dotted md:w-1/5 h-[25vh]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="14" r="4" />
              <circle cx="22" cy="16" r="4" />
              <path d="M4 26c0-4 8-6 8-6" />
              <path d="M28 26c0-4-8-6-8-6" />
            </svg>

            <div>
              <div className="text-lg font-bold">Personalized Treatment</div>
              <div>
                We create customized treatment plans tailored to your specific
                needs and preferences.
              </div>
            </div>
          </div>
          <div className="border-2 border-[#0D171C] rounded-lg p-4 m-2 border-dotted md:w-1/5 h-[25vh]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="16" cy="16" r="12" />
              <path d="M16 10v6l4 2" />
            </svg>

            <div>
              <div className="text-lg font-bold">Convenient Scheduling</div>
              <div>
                We offer flexible scheduling options to accommodate your busy
                lifestyle.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-2xl font-bold mb-6 border-l-4 border-blue-600 pl-3">
            Core Treatment
          </div>
          <Marquee pauseOnHover={true} speed={40} gradient={false}>
            <div className="flex gap-6 py-4">
              {[
                {
                  src: Pediatricdentistry,
                  title: "Routine Check-ups and Cleanings",
                  desc: "Regular check-ups and professional cleanings are essential for maintaining optimal oral health.",
                },
                {
                  src: RootCanalTreatment,
                  title: "Root Canal Therapy",
                  desc: "A root canal treats infected pulp by cleaning and sealing the tooth to prevent further infection.",
                },
                {
                  src: filling,
                  title: "Fillings and Restorations",
                  desc: "We provide high-quality fillings and restorations to repair damaged or decayed teeth.",
                },
                {
                  src: bleaching,
                  title: "Teeth Whitening",
                  desc: "Enhance your smile with our safe and effective teeth whitening treatments.",
                },
                {
                  src: lasersurgery,
                  title: "Laser Surgery",
                  desc: "Laser surgery utilizes focused light beams (lasers) to perform surgical procedures, offering precision and potentially reduced trauma compared to traditional methods",
                },
                {
                  src: Impants,
                  title: "Implant Dentistry",
                  desc: "Implant dentistry involves the placement of artificial tooth roots (implants) to support replacement teeth, providing a durable and natural-looking solution for missing teeth.",
                },
                {
                  src: OrthodonicTreatment,
                  title: "Orthodonic Treatment",
                  desc: "Orthodontic treatment involves the use of braces or aligners to correct misaligned teeth and jaws, improving both function and aesthetics.",
                },
                {
                  src: Aligner,
                  title: "Aligner Therapy",
                  desc: "Aligner therapy uses clear, removable aligners to gradually shift teeth into their desired positions, offering a discreet alternative to traditional braces.",
                },
                 
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[250px] max-w-xs border-2 border-[#0D171C] rounded-lg p-4 border-dotted bg-white shadow-md flex-shrink-0"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-sm md:text-lg font-bold mb-1">
                    {item.title}
                  </div>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
      <div>
       <Testimonials/>
      </div>
      <div >
        <Facilities/>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Footer/>
      </div>
    </>
  );
};

export default Home;
