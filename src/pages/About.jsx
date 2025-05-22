import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Bg2 from "../assets/bg2.jpg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <Navbar />
      <section
        className="w-full bg-cover bg-center bg-no-repeat h-[70vh] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${Bg2})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Empowering global learners through expert guidance, quality
            training, and a passion for education.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 space-y-6"
          >
            <h2 className="text-3xl font-semibold text-yellow-800">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed">
              Subarashii Education Academy is more than just a consultancy —
              we're your trusted partner in navigating the journey of
              international education. With years of experience, we’ve helped
              countless students make their dreams of studying abroad a reality.
            </p>
            <p className="text-base leading-relaxed">
              From top-tier IELTS and PTE classes to expert guidance in
              university admissions and visa processing, we offer end-to-end
              support tailored to each student's goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-yellow-50 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-yellow-900 mb-4">
              Our Mission
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              To empower students through exceptional educational services that
              unlock academic, cultural, and personal growth opportunities
              worldwide.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-900 mt-8 mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Expert visa and admission consultants</li>
              <li>Certified IELTS and PTE instructors</li>
              <li>Strong global network of partner institutions</li>
              <li>Personalized approach to student success</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};
