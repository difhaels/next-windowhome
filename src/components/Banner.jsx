"use client"
import Image from "next/image";

export default function Banner() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bg.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-90 blur-xs"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-4xl mx-auto px-6 md:px-12 text-white">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Solusi Kusen Aluminium Rumah Keluarga
        </h1>
        <p className="text-lg md:text-xl mt-3 max-w-2xl">
          Kusen Aluminium Window Home telah membantu banyak pelanggan dalam pemasangan kusen, pintu, jendela, dan kitchen set aluminium dengan kualitas terbaik.
        </p>
        <button
          onClick={scrollToProjects}
          className="mt-6 px-6 py-3 bg-[#222f99] text-white font-medium shadow-lg hover:bg-[#06179a] transition-all cursor-pointer"
        >
          Lihat Proyek Kami
        </button>
      </div>
    </div>
  );
}
