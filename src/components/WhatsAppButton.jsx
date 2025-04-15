"use client";
import React from "react";
import Image from "next/image";
import { phoneNumber } from "@/utils/nohp";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 sm:right-16 flex items-center space-x-3 z-50">
      <div className="flex flex-col space-y-2">
        <div className="bg-white text-gray-700 px-3 py-1 rounded-lg shadow-md text-xs">
          Konsultasi Gratis
        </div>
        <div className="bg-white text-gray-700 px-3 py-1 rounded-lg shadow-md text-xs">
          Chat Admin
        </div>
      </div>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <Image
          src="/wa.svg"
          alt="WhatsApp"
          width={30}
          height={30}
          priority
          className="pointer-events-none" // agar tidak menghalangi klik
        />
      </a>
    </div>
  );
}
