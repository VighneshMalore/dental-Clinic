import React from "react";
import aligner from "../Treatments/Aligner.png";
import denture from "../Treatments/Artificial Complete Denture.png";
import bleaching from "../Treatments/Bleaching.png";
import bridge from "../Treatments/Fixed Partial Denture.png";
import flap from "../Treatments/Flap-surgery.png";
import implant from "../Treatments/Impants.png";
import laser from "../Treatments/Laser-Surgery.png";
import ortho from "../Treatments/Orthodonic-Treatment.png";
import pediatric from "../Treatments/Pediatric-dentistry.png";
import rootCanal from "../Treatments/Root Canal Treatment.png";
import cleaning from "../Treatments/Teeth Cleaning.png";
import extraction from "../Treatments/Teeth Extraction.png";
import filling from "../Treatments/Tooth-Filling.jpg";
import veneer from "../Treatments/Veneer Treatment.jpg";
import wisdom from "../Treatments/Wisdom Teeth Removal.png";

const treatments = [
  {
    title: "Teeth Cleaning & Scaling",
    description:
      "We offer advanced, non-surgical gum care using LASER technology to remove plaque and tartar buildup. Scaling and root planing restore gum health and prepare for surgical procedures if needed.",
    image: cleaning,
  },
  {
    title: "Tooth Filling",
    description:
      "We restore damaged teeth with high-quality materials and techniques. Our fillings seal gaps, prevent future decay, and preserve your natural smile.",
    image: filling,
  },
  {
    title: "Tooth Extraction",
    description:
      "When necessary, we gently remove teeth using safe techniques, prioritizing patient comfort and stress-free recovery.",
    image: extraction,
  },
  {
    title: "Artificial Complete Denture",
    description:
      "We craft custom dentures using durable materials to restore both function and aesthetics, giving you confidence and daily comfort.",
    image: denture,
  },
  {
    title: "Dental Implants",
    description:
      "Biocompatible titanium implants replace missing teeth with a strong, natural-feeling foundation, restoring both bite and smile.",
    image: implant,
  },
  {
    title: "Laser Dentistry",
    description:
      "Using state-of-the-art LASER equipment, we perform soft-tissue procedures and gum care with minimal discomfort and faster healing.",
    image: laser,
  },
  {
    title: "Root Canal Therapy",
    description:
      "We remove infected pulp, clean the canals, and seal the tooth—relieving pain and saving your natural tooth structure.",
    image: rootCanal,
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "We perform safe and effective removal of impacted wisdom teeth using modern techniques and anesthesia for a smooth experience.",
    image: wisdom,
  },
  {
    title: "Fixed Partial Denture (Bridge)",
    description:
      "We offer natural-looking dental bridges that replace missing teeth and restore chewing function while maintaining oral structure.",
    image: bridge,
  },
  {
    title: "Teeth Whitening (Bleaching)",
    description:
      "Our whitening treatments use safe bleaching agents to remove stains and restore the brightness of your natural teeth.",
    image: bleaching,
  },
  {
    title: "Veneers",
    description:
      "We provide custom-made veneers to fix chips, discoloration, and gaps—creating a flawless, long-lasting smile.",
    image: veneer,
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Our friendly team offers gentle dental care for children, promoting healthy habits and ensuring stress-free visits.",
    image: pediatric,
  },
  {
    title: "Flap Surgery",
    description:
      "To treat advanced gum disease, we lift the gum, clean infected tissue, and reposition it for proper healing and stability.",
    image: flap,
  },
  {
    title: "Orthodontic Braces",
    description:
      "We offer traditional and ceramic braces to correct misaligned teeth, improve bite, and enhance facial symmetry.",
    image: ortho,
  },
  {
    title: "Clear Aligners",
    description:
      "Discreet, removable aligners gradually shift your teeth without the visibility of metal braces—comfortable and effective.",
    image: aligner,
  },
];

const Treatment = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Our Treatments</h2>
      <p className="text-gray-600 mb-10">
        Explore a wide range of treatments designed to restore, protect, and
        enhance your smile.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4"
          >
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
            <p className="text-gray-700 text-sm">{treatment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatment;
