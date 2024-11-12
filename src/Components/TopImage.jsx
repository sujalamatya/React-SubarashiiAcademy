import TopImg from "../assets/bg1.jpg";
import Japan from "../assets/StudyJapan.png";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TopImage() {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div
        style={{ backgroundImage: `url(${TopImg})` }}
        className="top-0 lg:h-screen bg-cover bg-center bg-no-repeat h-[600px] w-full relative z-0"
      >
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute z-10 top-[30%] left-[25%] text-white bg-transparent backdrop-blur-xl p-5 rounded-lg"
        >
          <h1 className="text-4xl">Welcome to Subarashii Education Academy</h1>
        </motion.div>
      </div>

      <div className="flex items-center justify-center  mt-10">
        <div className="self-stretch text-center w-[850px] h-auto justify-normal">
          <p className="font-sans font-extralight text-xl">
            Subarashii Educational Academy, a branch of Sakura International
            Japanese Academy (SIJA) in Saitama, Japan, provides Japanese
            language courses (up to N4 and N5) and cultural exchange programs
            for global students. With 10+ years of experience in language
            instruction and visa processing, Subarashii offers innovative,
            effective learning through skilled instructors in both online and
            offline formats.
          </p>
          <button className="p-3 mt-5 border border-solid border-black transition-all duration-300 ease-in-out hover:text-white  hover:bg-yellow-800">
            {" "}
            Learn More <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-1 top-0 mt-[50px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView && { opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="ml-[6.25rem]"
        >
          <img src={Japan} alt="coffie crop" />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: +200 }}
          animate={isInView && { opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="self-center mr-[150px] ml-11"
        >
          <h1 className="font-quicksand font-extrabold text-4xl">
            STUDY IN<br></br> JAPAN
          </h1>
          <p className="mt-5 font-roboto">
            -Japan has the 2nd largest economy in the world.<br></br> -Knowing
            Japanese brings business opportunities.<br></br> -Japanese is a
            gateway to other Asian languages & cultures. <br></br>
            -Japanese-speakers are the Internet’s 3rd largest language group.
            <br></br> -The Japanese are innovators.
          </p>
          <button className="p-3 mt-5 border border-solid border-black transition-all duration-300 ease-in-out hover:text-white hover:bg-red-600">
            {" "}
            Learn More <i className="fa fa-arrow-right"></i>
          </button>
        </motion.div>
      </div>
    </>
  );
}
