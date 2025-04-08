"use client";
import Image from "next/image";

export default function Banner() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/bg.jpg"
          alt="Banner"
          fill
          className="object-cover brightness-80"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-12 w-full">
          {/* KIRI: Gambar produk */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/produk.png"
              alt="produk"
              width={350}
              height={350}
              className="object-contain"
              priority
            />
          </div>

          {/* KANAN: Text */}
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Solusi Kusen Aluminium Rumah Keluarga
            </h1>
            <p className="text-lg md:text-xl mt-3 max-w-xl">
              Kusen Aluminium Window Home telah membantu banyak pelanggan dalam
              pemasangan kusen, pintu, jendela, dan kitchen set aluminium dengan
              kualitas terbaik.
            </p>
            <button
              onClick={scrollToProjects}
              className="mt-6 px-6 py-3 bg-[#222f99] text-white font-medium shadow-lg hover:bg-[#06179a] transition-all cursor-pointer"
            >
              Lihat Proyek Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
