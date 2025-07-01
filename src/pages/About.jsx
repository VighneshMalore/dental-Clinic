import React from "react";
import woman from "../assets/woman.png";
import man from "../assets/man.png";
import Footer from "../components/Footer";
const About = () => {
  const teamMembers = [
    {
      name: "Dr. Anupriya ",
      title: "Founder",
      img: woman,
    },
    {
      name: "Dr. Ananya Iyer",
      title: "Prosthodontist",
      img: woman,
    },
    {
      name: "Dr. Meera Subramanian",
      title: "Endodontist",
      img: woman,
    },
    {
      name: "Dr. Arvind Kumar",
      title: "Orthodontist",
      img: man,
    },
    {
      name: "Dr. Sneha N",
      title: "Dental Surgeon",
      img: woman,
    },
    {
      name: "Dr. Srinivas Rohit Ramanujam ",
      title: "Implantologist",
      img: man,
    },
    {
      name: "Dr. Balu ",
      title: "Laser Surgeon",
      img: man,
    },
    {
      name: "Dr. Vikram Raj Kishore",
      title: "Aligners Partner",
      img: man,
    },
    {
      name: "Dr. Ajay Jumar",
      title: "Oral & Maxillofacial Surgeon",
      img: man,
    },
  ];
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>

        <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
          <img
            src={woman}
            alt="Dr. Anupriya"
            className="w-32 h-32 object-cover rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold">Dr. Anupriya</h3>
            <p className="text-blue-600">Lead Dentist</p>
            <p className="mt-2 text-gray-700">
              Bringing over 20 years of expertise, Dr. Anupriya stands as a
              leading figure in modern dentistry at Hosur. A proud alumna of the
              renowned Government Dental College, she began her professional
              journey after graduating in 2000. Her passion for delivering
              exceptional dental care was further nurtured during six impactful
              years at Mathura Clinic, where she refined her clinical skills and
              deepened her commitment to patient wellbeing.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
          <p className="text-gray-700">
            In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with
            a clear vision — to make high-quality dental care accessible to all.
            Her dedication extends beyond private practice, reflected in her
            long-standing service with the Primary Health Center at Chandara
            Hospital, where she has been a trusted dental consultant for over a
            decade.
          </p>
        </div>

        <div className="mb-10">
          <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
          <p className="text-gray-700">
            To provide personalized and comprehensive dental services in a warm
            and welcoming environment. We strive to empower our patients with
            the knowledge and tools to maintain optimal oral health throughout
            their lives.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Our Team</h4>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-4">Our Team</h4>
              <div className="flex flex-col gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-blue-600 text-sm">{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
