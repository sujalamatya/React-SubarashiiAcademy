import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Locationimg from "../assets/loc.jpg";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${Locationimg})` }}
        className="top-0 bg-cover bg-center bg-no-repeat h-[31.25rem] w-full relative z-0"
      ></div>
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute z-10 top-[30%] left-[40%] text-white flex flex-col bg-transparent backdrop-blur-2xl gap-6 p-5 rounded-lg"
      >
        <h1 className="text-6xl">Location</h1>
      </motion.div>
      <div className="flex items-center justify-center  mt-10">
        <div className="self-stretch text-center w-[850px] h-auto justify-normal">
          <p className="font-sans font-extralight text-xl">
            Subarashii Educational Academy is located in Putalisadak-28,
            Kathmandu.<br></br>Near Sankhar dev campus.
          </p>
        </div>
      </div>

      <div className="flex mt-[6.25rem]">
        <div className=" ml-[6.25rem] w-[600px]">
          <iframe
            width="100%"
            height="500"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=27%C2%B042'10.1%22N%2085%C2%B019'20.5%22E+(Subarashii%20Education%20Academy)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
        <div className="w-[600px] ml-[6.25rem]">
          <h1 className="text-2xl">Subarashii Education Academy</h1>
          <p className="mt-11 font-semibold">Sunday - Friday</p>
          <p>9am - 6pm </p>
          <p className="mt-11 font-semibold">Putalisadak, Kathmandu, Nepal</p>
          <p className="text-blue-600 hover:text-red-600 underline">
            <a href="https://www.google.com/maps/@27.7028833,85.3224453,3a,66.4y,277.28h,99.53t/data=!3m8!1e1!3m6!1sAF1QipNL8v34P8_XFfkMBa68JyRbpBJ_90OgbnmCHBzi!2e10!3e11!6s%2F%2Flh5.ggpht.com%2Fp%2FAF1QipNL8v34P8_XFfkMBa68JyRbpBJ_90OgbnmCHBzi%3Dw900-h600-k-no-pi-9.534742921072151-ya92.60058655006819-ro0-fo100!7i4096!8i2048?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">
              street view
            </a>
          </p>
          <p className="mt-11 font-semibold">
            9851197011<br></br>01-4216164
          </p>
          <p className="text-blue-600 hover:text-red-600 underline mt-11">
            <a href="https://www.facebook.com/SubarashiiEducationalAcademy">
              Facebook
            </a>
          </p>
          <p className="text-blue-600 hover:text-red-600 underline">
            <a href="https://www.instagram.com/subarashiieducationalacademy/">
              Instagram
            </a>
          </p>
          <p className="font-semibold mt-11">subarashii22@gmail.com</p>
        </div>
      </div>
    </>
  );
}
