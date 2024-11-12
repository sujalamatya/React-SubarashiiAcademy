import product from "../assets/product-jaba.jpg";
import javaCup from "../assets/javacup.jpg";
import coffeeico from "../assets/coffee-ico.jpg";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Thrid() {
  const ref = useRef();

  const isInView = useInView(ref);
  return (
    <div className="mb-[4rem]">
      <h1 className="mt-[6.25rem] self-stretch text-center justify-normal  text-3xl">
        Other services:
      </h1>
      <div className="grid gap-4 grid-cols-3 grid-rows-1 top-0 mt-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView && { opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="ml-[6.25rem]"
        >
          {/* IELTS SERVICE sjnhfdjkhasjdhoashdoh */}
          <h1 className="text-2xl font-bold">IELTS</h1>
          <div className="">
            <p className="mt-5">
              The International English Language <br></br>Testing System is a
              test of English <br></br>language proficiency and one <br></br>of
              the world's most popular and respected forms<br></br> of English
              in education and migration.
            </p>
            <button className="mt-6 p-3 border border-solid border-orange bg-orange-500 text-white">
              Learn More
            </button>
          </div>
        </motion.div>
        <div>
          <h1 className="text-2xl font-bold">Japanese Classes</h1>
          <p className="mt-5">
            •Level N1: Refers to the ability to comprehend Japanese used in a
            diversity of conditions. <br></br>• Level N2: Indicates the ability
            to comprehend Japanese used in daily circumstances and other
            conditions. <br></br>• Level N3: Indicates the ability to comprehend
            Japanese in daily circumstances to a particular level. <br></br>•
            Level N4: Indicates the ability to comprehend basic Japanese.{" "}
            <br></br>• Level N5: Indicates the ability to comprehend some
            rudimentary Japanese.
          </p>
          <button className="mt-6 p-3 border border-solid border-orange bg-orange-500 text-white">
            Learn More
          </button>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -200 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" top-0  mr-[6.25rem]"
        >
          <h1 className="text-2xl font-bold">PTE</h1>
          <p className="mt-5">
            The PTE Academic exam is a computer-based English language test
            accepted by educational institutions worldwide. The full form of PTE
            is the Pearson Test of English. Known as an English language test
            for candidates looking to apply to universities or countries abroad
            that use English as their primary source of communication.
          </p>
          <button className="mt-6 p-3 border border-solid border-orange bg-orange-500 text-white">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}
