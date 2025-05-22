import React from "react";
import Navbar from "../Components/Navbar";

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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesList.map(({ title, points }) => (
              <div
                key={title}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
