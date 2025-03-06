"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClasses = (path) =>
    `block px-4 py-2 ${pathname === path ? "text-white" : "text-gray-400 hover:text-white"}`;

  return (
    <nav className="bg-[#212529] fixed top-0 w-full z-50 shadow-md">
      <Container>
        <div className="flex items-center justify-between sm:justify-start py-3 sm:gap-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-white text-lg font-semibold">WindowHome</span>
          </Link>
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
          <div
            className={`absolute top-16 left-0 w-full bg-gray-900 md:static md:flex md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
          >
            <Link href="/" className={linkClasses("/")}>Home</Link>
            <Link href="/about" className={linkClasses("/about")}>Tentang Kami</Link>
            <Link href="/service" className={linkClasses("/service")}>Layanan</Link>
            <Link href="/product" className={linkClasses("/product")}>Produk</Link>
            <Link href="/contact" className={linkClasses("/contact")}>Kontak</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;