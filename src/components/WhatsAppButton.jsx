"use client";
import React from "react";
import Image from "next/image";

export default function WhatsAppButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16921236563/ny9-CNn08aoaENOo1oQ_",
      });
    }
  };

  return (
    <a
      href="https://wa.me/6282124106727"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 sm:right-16 flex items-center justify-center bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <Image src="/wa.svg" alt="WhatsApp" width={30} height={30} priority />
    </a>
  );
}
