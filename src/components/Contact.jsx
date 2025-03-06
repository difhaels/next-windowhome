"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";      
import Container from "./Container";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_xm9lavy", "template_rfa93iy", form.current, {
                publicKey: "Ggx8QKUvf0yO2OLdX",
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
                <h2 className="text-center text-2xl font-bold mb-6">KONTAK</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src="/logo.png" alt="Logo" className="w-12 h-12 mr-3" />
                            <h2 className="text-xl font-semibold">WindowHome</h2>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-lg font-medium">Kontak</h4>
                            <p className="flex items-center gap-2"><FaPhoneAlt /> +62 812-3456-7890</p>
                            <p className="flex items-center gap-2"><FaEnvelope /> info@windowhome.com</p>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-lg font-medium">Workshop</h4>
                            <p className="flex items-start gap-2"><FaMapMarkerAlt /> RT001, RW05, No257, KP.Cibitung, Kel.Padurenan, Kec.Mustika Jaya, Kota Bekasi</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Ikuti Kami</h4>
                            <div className="flex gap-3 mt-2">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="text-blue-600 text-xl" /></a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="text-pink-500 text-xl" /></a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="text-blue-400 text-xl" /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <input type="text" name="user_name" className="w-full p-2 border rounded" placeholder="Name" required />
                            <input type="email" name="user_email" className="w-full p-2 border rounded" placeholder="Email" required />
                            <input type="text" name="user_noHp" className="w-full p-2 border rounded" placeholder="No Hp" required />
                            <input type="text" name="user_subject" className="w-full p-2 border rounded" placeholder="Subject" required />
                            <textarea name="message" rows="4" className="w-full p-2 border rounded" placeholder="Your Message"></textarea>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Send</button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}
