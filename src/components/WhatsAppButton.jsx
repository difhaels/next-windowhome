import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6282124106727" // Ganti dengan nomor WhatsApp kamu
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:right-16 flex items-center justify-center bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <img src="/wa.svg" alt="WhatsApp" width={30} height={30} />
    </a>
  );
}
