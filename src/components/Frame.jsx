import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "./WhatsAppButton";
export default function Frame({ children }) {
  return (
    <div className="pt-14">
      <Navbar />
      {children}
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
