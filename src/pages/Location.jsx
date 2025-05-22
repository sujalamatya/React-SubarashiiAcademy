import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Locationimg from "../assets/loc.jpg";

export default function Location() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${Locationimg})` }}
        className="relative h-80 md:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <div className=" backdrop-blur-sm rounded-lg p-8 max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Location
          </h1>
        </div>
      </div>

      {/* Description */}
      <section className="max-w-4xl mx-auto mt-12 px-6 text-center md:text-left">
        <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
          Subarashii Educational Academy is located in Putalisadak-28,
          Kathmandu.
          <br />
          Near Sankhar Dev Campus.
        </p>
      </section>

      {/* Map + Info */}
      <section className="flex flex-col md:flex-row max-w-6xl mx-auto mt-16 px-6 gap-12">
        {/* Map */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
          <iframe
            title="Subarashii Education Academy Location"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=27%C2%B042'10.1%22N%2085%C2%B019'20.5%22E+(Subarashii%20Education%20Academy)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Subarashii Education Academy
          </h2>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Working Days
            </h3>
            <p className="text-gray-700">Sunday - Friday</p>
            <p className="text-gray-700">9am - 6pm</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">Address</h3>
            <p className="text-gray-700">Putalisadak, Kathmandu, Nepal</p>
            <a
              href="https://www.google.com/maps/@27.7028833,85.3224453,3a,66.4y,277.28h,99.53t/data=!3m8!1e1!3m6!1sAF1QipNL8v34P8_XFfkMBa68JyRbpBJ_90OgbnmCHBzi!2e10!3e11!6s%2F%2Flh5.ggpht.com%2Fp%2FAF1QipNL8v34P8_XFfkMBa68JyRbpBJ_90OgbnmCHBzi%3Dw900-h600-k-no-pi-9.534742921072151-ya92.60058655006819-ro0-fo100!7i4096!8i2048?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-red-600 underline"
            >
              Street View
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">Contact</h3>
            <p className="text-gray-700">9851197011</p>
            <p className="text-gray-700">01-4216164</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/SubarashiiEducationalAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-red-600 underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/subarashiieducationalacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-red-600 underline"
            >
              Instagram
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800">Email</h3>
            <p className="text-gray-700">subarashii22@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
