import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Bg2 from "../assets/bg2.jpg";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${Bg2})` }}
        className="top-0 lg:h-screen bg-cover bg-center bg-no-repeat h-[600px] w-full relative z-0"
      >
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute z-10 top-[30%] left-[25%] text-white flex flex-col bg-transparent backdrop-blur-2xl gap-6 p-5 rounded-lg"
        >
          <h1 className="text-4xl">About Us</h1>
          <p className="w-[50rem]">
            <p>
              Welcome to Subarashii Education Academy! We are a team of
              experienced and passionate professionals dedicated to helping
              students achieve their dreams of studying abroad. With a wealth of
              knowledge and expertise in the field of international education
              and immigration, we provide comprehensive guidance and support to
              help students navigate the complex process of applying to foreign
              universities.
            </p>
            <br></br>
            <p>
              Our mission is to empower students with the tools and resources
              they need to succeed in their academic and professional pursuits.
              We believe that education is a transformative experience that
              opens doors to new opportunities and enriches lives in countless
              ways. That's why we are committed to providing personalized
              guidance and support to help each student reach their full
              potential through IELTS and PTE classes.
            </p>
          </p>
        </motion.div>
      </div>
    </>
  );
};
