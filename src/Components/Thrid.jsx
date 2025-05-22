import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ServicesSection() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "IELTS",
      description: `The International English Language Testing System is one of the most trusted exams 
      to assess English proficiency for education, migration, and work worldwide.`,
    },
    {
      title: "Japanese Classes",
      description: `From N5 (basic comprehension) to N1 (advanced fluency), our courses are designed for 
      learners at every level seeking Japanese language mastery.`,
    },
    {
      title: "PTE",
      description: `PTE Academic is a globally recognized computer-based English test accepted by 
      universities and governments. Ideal for students and professionals abroad.`,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Other Services
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              {service.description}
            </p>
            <button className="mt-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition duration-300">
              Learn More <i className="fa fa-arrow-right ml-2" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
