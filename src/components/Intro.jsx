import Container from "./Container";

function Intro() {
  
  return (
    <div className="bg-[#212529] text-white text-center py-16">
      <Container>
        <h1 data-aos="fade-up" className="text-4xl">Selamat Datang di Website</h1>
        <h1 data-aos="fade-up" className="text-4xl font-semibold">Kusen Aluminium Window Home</h1>
        <div data-aos="fade-up" className="w-20 h-1 bg-gray-500 mx-auto my-4 rounded-full"></div>
        <h1 data-aos="fade-up" className="text-xl">
        Kami adalah spesialis dalam pembuatan dan pemasangan berbagai produk berkualitas berbahan aluminium, mulai dari kusen, pintu, dan jendela aluminium hingga kitchen set, partisi, sekat ruangan, dan berbagai kebutuhan custom lainnya. Dengan pengalaman dan keahlian di bidang ini, kami siap memberikan solusi terbaik yang sesuai dengan kebutuhan dan desain interior maupun eksterior Anda. Hubungi kami sekarang untuk konsultasi dan informasi lebih lanjut mengenai layanan dan produk yang kami tawarkan!</h1>
      </Container>
    </div>
  );
}

export default Intro;
