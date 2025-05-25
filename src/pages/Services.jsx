import React from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import Bg3 from "../assets/bg3.jpg";

const servicesList = [
  {
    title: "IELTS Coaching",
    points: [
      "Comprehensive preparation for Listening, Reading, Writing & Speaking.",
      "Personalized feedback and flexible batch timings.",
      "Experienced instructors with proven track record.",
    ],
  },
  {
    title: "Japanese Language Classes",
    points: [
      "Courses from beginner (N5) to advanced (N1) levels.",
      "Interactive sessions focusing on real-life communication.",
      "Cultural insights to complement language skills.",
    ],
  },
  {
    title: "PTE Academic Preparation",
    points: [
      "Computer-based test training accepted worldwide.",
      "Improve speaking, writing, reading, and listening skills.",
      "Mock tests and strategy sessions included.",
    ],
  },
  {
    title: "Study Abroad Consultation",
    points: [
      "Guidance on university and course selection.",
      "Application and scholarship assistance.",
      "Visa and immigration support for Japan, Canada, and beyond.",
    ],
  },
  {
    title: "Visa & Immigration Support",
    points: [
      "Complete help with visa applications and documentation.",
      "Interview preparation and follow-up.",
      "Stay updated on immigration policy changes.",
    ],
  },
  {
    title: "Cultural Exchange Programs",
    points: [
      "Immersive programs to understand and adapt to new cultures.",
      "Networking with local and international students.",
      "Experience-based learning outside the classroom.",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat h-[70vh] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${Bg3})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our wide range of programs tailored to your educational and
            cultural aspirations.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-yellow-800 mb-12 text-center md:text-left"
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesList.map(({ title, points }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">
                  {title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed flex-grow">
                  {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <button className="mt-6 px-5 py-2 bg-red-600 text-white hover:bg-red-700 transition duration-300 font-medium rounded-md shadow-md self-start">
                  Learn More <i className="fa fa-arrow-right ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
