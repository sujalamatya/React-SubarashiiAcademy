import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TopImg from "../assets/bg1.jpg";
import Japan from "../assets/StudyJapan.png";

export default function TopImage() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${TopImg})` }}
        className="w-full h-[600px] lg:h-screen bg-cover bg-center bg-no-repeat relative"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/3  transform -translate-x-1/2 text-center  p-6 rounded-xl max-w-xl text-white"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Welcome to <br />
            Subarashii Education Academy
          </h1>
        </motion.div>
      </section>

      {/* Academy Description */}
      <section className="py-12 px-4 flex justify-center bg-white text-center">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-800">
            Subarashii Educational Academy, a branch of Sakura International
            Japanese Academy (SIJA) in Saitama, Japan, provides Japanese
            language courses (up to N4 and N5) and cultural exchange programs
            for global students. With 10+ years of experience in language
            instruction and visa processing, Subarashii offers innovative,
            effective learning through skilled instructors in both online and
            offline formats.
          </p>
          <button className="mt-6 px-6 py-3 border border-black text-black hover:bg-yellow-700 hover:text-white transition duration-300 font-medium rounded-md">
            Learn More <i className="fa fa-arrow-right ml-2" />
          </button>
        </div>
      </section>

      {/* Study in Japan Section */}
      <section className=" px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <img
              src={Japan}
              alt="Study in Japan Illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Study in Japan
            </h2>
            <ul className="text-gray-700 space-y-2 leading-relaxed">
              <li>Japan has the 2nd largest economy in the world.</li>
              <li>Knowing Japanese opens business opportunities.</li>
              <li>It's a gateway to Asian languages & cultures.</li>
              <li>Japanese is the internet’s 3rd largest language group.</li>
              <li>Japan is home to innovation and technology.</li>
            </ul>
            <button className="mt-6 px-6 py-3 border border-black text-black hover:bg-red-600 hover:text-white transition duration-300 font-medium rounded-md">
              Learn More <i className="fa fa-arrow-right ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
