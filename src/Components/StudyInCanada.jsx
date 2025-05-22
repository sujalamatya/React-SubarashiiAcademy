import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Canada from "../assets/Studycanada.png";

export default function StudyInCanada() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Study in Canada
          </h2>
          <ul className="text-gray-700 space-y-3 text-base md:text-lg leading-relaxed list-disc list-inside">
            <li>Discover the top advantages of studying in Canada.</li>
            <li>Explore the most popular courses and institutions.</li>
            <li>
              Understand tuition and living costs for Nepali students in 2023.
            </li>
            <li>Get guidance on student visa application procedures.</li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition duration-300 font-medium rounded-md shadow-md">
            Learn More <i className="fa fa-arrow-right ml-2" />
          </button>
        </motion.div>

        {/* Image Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <img
            src={Canada}
            alt="Study in Canada Illustration"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
