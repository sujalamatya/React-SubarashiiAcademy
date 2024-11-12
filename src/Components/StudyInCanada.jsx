import Canada from "../assets/Studycanada.png";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function StudyInCanada() {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <>
      <div className="grid gap-4 grid-cols-2 grid-rows-1 top-0 mt-[50px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView && { opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="self-center  ml-[6.25rem]"
        >
          <h1 className="font-quicksand font-extrabold text-4xl">
            STUDY IN<br></br> CANADA
          </h1>
          <p className="mt-5 font-roboto">
            -The top advantages of studying in Canada. Most Popular Courses to
            Study in Canada.<br></br> -Best Colleges and Universities in Canada.{" "}
            <br></br>-How Much Does It Cost To Study In Canada From Nepal in
            2023 Living expenses in Canada for international students.<br></br>{" "}
            -Guide to Apply for a Canada Student Visa
          </p>
          <button className="p-3 mt-5 border border-solid border-black transition-all duration-300 ease-in-out hover:text-white hover:bg-red-600">
            {" "}
            Learn More <i className="fa fa-arrow-right"></i>
          </button>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: +200 }}
          animate={isInView && { opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mr-[6.25rem]"
        >
          <img src={Canada} alt="coffie crop" />
        </motion.div>
      </div>
    </>
  );
}
