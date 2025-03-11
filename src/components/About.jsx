import React from "react";
import Container from "./Container";

function About() {
  return (
    <section className="pt-10 sm:pt-16">
      <Container>
        <h5 className="text-lg font-semibold" data-aos="fade-up">Tentang Kami</h5>
        <h2 className="text-2xl font-bold text-[#222F99] mb-6" data-aos="fade-up">Window Home</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="mb-4" data-aos="fade-up">
              Kami adalah penyedia jasa profesional dalam pembuatan dan
              pemasangan berbagai produk aluminium berkualitas di Jakarta dan
              sekitarnya. Sebagai spesialis aluminium dan kaca, kami menawarkan
              beragam produk seperti kusen aluminium, jendela kaca, pintu
              aluminium, kitchen set, partisi, sekat ruangan, dan kebutuhan
              custom lainnya.{" "}
            </p>
            <p className="mb-4" data-aos="fade-up">
              Kami melayani pesanan dan pemasangan di seluruh area Jabodetabek,
              termasuk Bekasi, Bogor, Jakarta Timur, Jakarta Selatan, Jakarta
              Pusat, Cikarang, Karawang, Kramat Jati, Pulo Gadung, Pondok Kopi,
              Pondok Bambu, Cawang, dan sekitarnya.{" "}
            </p>
            <p className="mb-4" data-aos="fade-up">
              Dengan tim profesional dan berpengalaman, kami memastikan setiap
              produk yang kami buat memiliki kualitas unggulan, daya tahan
              tinggi, serta pemasangan yang presisi. Jika Anda membeli produk
              dari kami dan membutuhkan layanan pemasangan, tim ahli kami siap
              datang langsung ke lokasi Anda untuk memastikan hasil terbaik
              tanpa perlu repot mencari jasa pemasangan tambahan.{" "}
            </p>
            <p data-aos="fade-up">
              Hubungi kami sekarang melalui WhatsApp atau telepon untuk
              konsultasi dan pemesanan!
            </p>
          </div>
          <div data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.488275271218!2d106.99747889999999!3d-6.3307253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69950ed2f10e63%3A0xef182ba8e0176738!2sWindowhome!5e0!3m2!1sid!2sid!4v1741319519319!5m2!1sid!2sid"
              className="w-full h-72 border border-gray-400"
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

export default About;
