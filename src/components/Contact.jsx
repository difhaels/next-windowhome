"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Container from "./Container";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nbfm76v", "template_8fbx5id", form.current, {
        publicKey: "o1twaftzXdYckdrKK",
      })
      .then(
        () => {
          alert("Sent Successfully!");
        },
        (error) => {
          alert("OOOPS Something Wrong!");
        }
      );
  };

  return (
    <section className="pt-10 sm:pt-16">
      <Container>
        <h3
          className="mx-auto text-xl font-semibold mb-6 py-1 text-white px-5 bg-[#222F99] w-fit"
          data-aos="fade-up"
        >
          KONTAK
        </h3>
        <div className="grid md:grid-cols-2 gap-8 pt-10">
          {/* Left Section */}
          <div className="p-6 ">
            <div className="flex items-center mb-4" data-aos="fade-up">
              <img src="/logo.png" alt="Logo" className="w-auto h-16 mr-3" />
              <h2 className="text-xl font-semibold">WindowHome</h2>
            </div>
            <div className="mb-4">
              <h4 className="text-2xl text-[#222F99]" data-aos="fade-up">
                Kontak
              </h4>
              <p className="flex items-center gap-2 my-2" data-aos="fade-up">
                <FaPhoneAlt className="text-[#FF2E63]" /> +62 821-2410-6727
              </p>
              <p className="flex items-center gap-2 " data-aos="fade-up">
                <FaEnvelope className="text-[#FF2E63]" /> info@windowhome.com
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-2xl text-[#222F99]" data-aos="fade-up">Workshop</h4>
              <p className="flex items-start gap-2 mt-2" data-aos="fade-up">
                <FaMapMarkerAlt className="text-[#FF2E63]" /> Jl. Raya Cikiwul No. 51, RT 03/RW 05, Kelurahan Cikiwul, Kecamatan Bandar Gerbang, 17152
              </p>
            </div>
            <div>
              <h4 className="text-2xl text-[#222F99]" data-aos="fade-up">Ikuti Kami</h4>
              <div className="flex gap-3 mt-2" data-aos="fade-up">
                <a
                  href="https://www.facebook.com/share/16PPWKvsww/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="text-blue-600 text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/kusenaluminium_windowhome?igsh=MWVnNm16bmFnbXp0cw=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="text-pink-500 text-2xl" />
                </a>
                <a
                  href="https://youtube.com/@kusenaluminiumwindowhome?si=df82Nwe1DvxC8AXb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="text-red-500 text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                className="w-full p-2 border rounded"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="user_email"
                className="w-full p-2 border rounded"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="user_noHp"
                className="w-full p-2 border rounded"
                placeholder="No Hp"
                required
              />
              <input
                type="text"
                name="user_subject"
                className="w-full p-2 border rounded"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                rows="4"
                className="w-full p-2 border rounded"
                placeholder="Your Message"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#222F99] cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
