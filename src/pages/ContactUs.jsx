import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Contact Form */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">We would love to hear from you</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Message</label>
              <textarea
                name="message"
                placeholder="Type your message..."
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Reach Us</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <span>
                B2/8, SBM Layout, Anthivadi,<br />
                Hosur, Tamil Nadu 635109, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:info@sakthidentalclinic.in" className="hover:underline">
                info@sakthidentalclinic.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-600" />
              <span>
                +91 9862890897 / +91 9363298118
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-blue-600" />
              <span><strong>Sunday to Saturday:</strong> 9am – 8pm</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
