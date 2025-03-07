import React from "react";
import Container from "./Container";

function Services() {
  const services = [
    {
      img: "/pemasangan.svg",
      text: "Melayani pemasangan kusen aluminium, pintu, dan jendela kaca untuk berbagai bangunan Anda. Semua pemasangan dijamin awet dan tahan lama dan letaknya presisi dengan bangunan.",
    },
    {
      img: "/pintu.svg",
      text: "Menerima pembuatan produk pintu aluminium / kayu untuk menambah nilai estetik pada rumah anda. Dapatkan produk pintu tentunya berkualitas tinggi, awet, kuat serta tahan lama di toko kami.",
    },
    {
      img: "/kaca.svg",
      text: "Menerima pembuatan produk pintu jendela kaca untuk menambah nilai estetik pada rumah anda. Dapatkan produk jendela tentunya berkualitas tinggi, awet, kuat serta tahan lama di toko kami.",
    },
    {
      img: "/kusen.svg",
      text: "Menerima pembuatan produk kusen aluminium untuk menambah nilai estetik pada rumah anda. Dapatkan produk kusen tentunya berkualitas tinggi, awet, kuat serta tahan lama di toko kami.",
    },
  ];

  return (
    <section className="pt-10 sm:pt-16">
      <Container>
      <h3 className="mx-auto text-xl font-semibold mb-6 py-1 text-white px-5 bg-[#222F99] w-fit">LAYANAN KAMI</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md p-4 text-center rounded-lg" data-aos="fade-up">
            <img src={service.img} alt="Service" className="mx-auto mb-3 w-full h-auto object-cover" />

            <p className="text-sm text-gray-700">{service.text}</p>
            <div className="mt-4">
              <a href="https://wa.me/628212410672" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">Hubungi</a>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}

export default Services;
