import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-[#F7FAFC] text-white p-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-6" alt="Logo" />
          <div className="text-[#0D171C] font-bold">Sakthi Dental Clinic</div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 items-center">
          <li className="text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300">
            <Link to="/treatments">Treatments</Link>
          </li>
          <li className="text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-semibold hover:text-[#1A202C] transition-colors duration-300 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            <Link to="/appointment">Fix a Appointment</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#0D171C] focus:outline-none z-50 relative"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 
        transform transition-transform duration-300 ease-in-out md:hidden
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Menu Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} className="w-6" alt="Logo" />
              <div className="text-[#0D171C] font-bold text-sm">
                Sakthi Dental Clinic
              </div>
            </div>
            <button
              onClick={toggleMenu}
              className="text-[#0D171C] focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300 py-2 px-3 rounded hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300 py-2 px-3 rounded hover:bg-gray-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/treatments"
                onClick={toggleMenu}
                className="block text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300 py-2 px-3 rounded hover:bg-gray-100"
              >
                Treatments
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                onClick={toggleMenu}
                className="block text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300 py-2 px-3 rounded hover:bg-gray-100"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300 py-2 px-3 rounded hover:bg-gray-100"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/appointment"
                onClick={toggleMenu}
                className="block text-[#0D171C] font-semibold hover:text-[#1A202C] transition-colors duration-300 py-2 px-3 rounded hover:bg-gray-100"
              >
                Fix a Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
