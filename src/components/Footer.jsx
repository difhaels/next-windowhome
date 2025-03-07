import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Company Logo" className="h-10" />
              <div>
                <h1 className="text-lg font-semibold">WINDOW HOME</h1>
                <h1>Kusen Aluminium</h1>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16PPWKvsww/" target="_blank" className="text-white text-xl">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/kusenaluminium_windowhome?igsh=MWVnNm16bmFnbXp0cw==" target="_blank"  className="text-white text-xl">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/@kusenaluminiumwindowhome?si=df82Nwe1DvxC8AXb" target="_blank"  className="text-white text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Kontak</h5>
            <p className="flex items-center space-x-2">
              <FaWhatsapp /> <span>0821 - 2410 - 6727</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhone /> <span>0821 - 2111 - 0038</span>
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Workshop</h5>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt size={20} />
              <p>
                Jl. Raya Cikiwul No. 51, RT 03/RW 05, Kelurahan Cikiwul, Kecamatan Bandar Gerbang, 17152 (Pusat)
              </p>
            </div>
            <div className="flex items-start space-x-3 my-4">
              <FaMapMarkerAlt size={20} />
              <p>
                Jl. Pasir Angin, RT 03/RW 03, Kecamatan Cileungsi, Kabupaten Bogor, 16820 (Cabang)
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt size={20} />
              <p>
                Jl. Tiga Putra, Gang 11, Blok Singkuk No. 12, Kelurahan Meruyung, Kecamatan Limo, Kota Depok (Cabang)
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Area Layanan</h5>
            <p>Jabodetabek</p>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>&copy; 2025 WindowHome. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
