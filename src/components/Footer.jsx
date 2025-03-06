import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Container from './Container';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Company Logo" className="h-10" />
              <h5 className="text-lg font-semibold">WINDOW HOME</h5>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white text-xl"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-white text-xl"><FaInstagram /></a>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Kontak</h5>
            <p className="flex items-center space-x-2"><FaWhatsapp /> <span>+62 812 3456 7890</span></p>
            <p className="flex items-center space-x-2"><FaPhone /> <span>(021) 123-4567</span></p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Workshop</h5>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt size={20} />
              <p>RT001, RW05, No257, KP.Cibitung, Kel.Padurenan, Kec.Mustika Jaya, Kota Bekasi</p>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Area Layanan</h5>
            <p>Jabodetabek</p>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>&copy; 2024 WindowHome. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
