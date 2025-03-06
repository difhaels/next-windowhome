import React from 'react';
import Container from './Container';

function Tentang() {
  return (
    <section className='pt-10 sm:pt-16'>
      <Container>
        <h5 className="text-lg font-semibold">Tentang Kami</h5>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Window Home</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              Kami merupakan usaha yang bergerak di bidang jasa service dan pembuatan aluminum kaca Jakarta. Sebagai spesialis pembuatan kusen, kami menyediakan berbagai produk seperti kusen aluminum, kaca jendela, dan pintu aluminium. Menerima pesanan / jual produk untuk di segala area Jabodetabek mulai dari Bekasi, Kota Bogor, Jakarta Timur, Jakarta Selatan, Jakarta Pusat, Cikarang, Karawang, Kramat Jati, Pulo Gadung, Pondok Kopi, Pondok Bambu, Cawang dan lain-lain.
            </p>
            <p className="mb-4">
              Rumah Kusen Aluminium Jakarta adalah solusi tepat untuk Anda karena semua produk memiliki kualitas unggulan dan tetap terjaga sehingga mampu bertahan lama. Tersedia juga layanan jasa pemasangan kusen pintu dan jendela bersama tim ahli kami.
            </p>
            <p>
              Bagi anda yang membeli produk pintu atau jendela di toko kami dan ingin sekaligus memasang, kami siap untuk datang ke tempat Anda dan segera melakukan pemasangan. Jadi, Anda tidak perlu repot-repot mencari jasa pasang pintu dan jendela. Hubungi layanan kami secara online melalui WhatsApp dan telepon yang tersedia.
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31621.154340649302!2d106.84559949999999!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699e89a2b03db1%3A0x2a8ff894f1e1b75e!2sJakarta!5e0!3m2!1sen!2sid!4v1617205274941!5m2!1sen!2sid"
              className="w-full h-72 border border-gray-400 rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="Lokasi Kami"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Tentang;
