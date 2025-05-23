import React from "react";
import Navbar from "../Components/Navbar";
import Locationimg from "../assets/loc.jpg";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Location() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative h-[60vh] min-h-[320px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Locationimg})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg">
            Our&nbsp;Location
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Find us at the heart of Kathmandu—easy to reach, easier to stay
            inspired.
          </p>
        </div>
      </section>

      {/* ─── DESCRIPTION ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-lg md:text-xl leading-relaxed text-center md:text-left text-gray-700">
          Subarashii Educational Academy is located in Putalisadak‑28,
          Kathmandu, near Shankar Dev Campus.
        </p>
      </section>

      {/* ─── MAP + INFO ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto grid gap-12 px-6 pb-20 lg:grid-cols-2">
        {/* Map */}
        <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
          <iframe
            title="Subarashii Educational Academy Map"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=27.7028,85.3223+(Subarashii%20Education%20Academy)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            className="w-full h-[400px] lg:h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Subarashii Education Academy
          </h2>

          <InfoLine
            icon={<FaClock className="text-blue-600" />}
            title="Working Days"
            content={
              <>
                Sunday – Friday
                <br />
                9 AM – 6 PM
              </>
            }
          />

          <InfoLine
            icon={<FaMapMarkerAlt className="text-blue-600" />}
            title="Address"
            content="Putalisadak, Kathmandu, Nepal"
            link={{
              href: "https://www.google.com/maps/@27.7028833,85.3224453,3a,66.4y,277.28h,99.53t/data=!3m8!1e1!3m6!1sAF1QipNL8v34P8_XFfkMBa68JyRbpBJ_90OgbnmCHBzi",
              label: "Street View",
            }}
          />

          <InfoLine
            icon={<FaPhoneAlt className="text-blue-600" />}
            title="Contact"
            content={
              <>
                9851197011
                <br />
                01‑4216164
              </>
            }
          />

          <InfoLine
            icon={<FaEnvelope className="text-blue-600" />}
            title="Email"
            content="subarashii22@gmail.com"
          />

          <div className="flex space-x-6 pt-4">
            <SocialLink
              href="https://www.facebook.com/SubarashiiEducationalAcademy"
              label="Facebook"
              icon={<FaFacebook />}
            />
            <SocialLink
              href="https://www.instagram.com/subarashiieducationalacademy/"
              label="Instagram"
              icon={<FaInstagram />}
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Helper Components ────────────────────────────────────── */

function InfoLine({ icon, title, content, link }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        {link ? (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-red-600 underline"
          >
            {link.label}
          </a>
        ) : (
          <p className="text-gray-700">{content}</p>
        )}
      </div>
    </div>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-2xl text-blue-600 hover:text-red-600 transition-colors"
    >
      {icon}
    </a>
  );
}
