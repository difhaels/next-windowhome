import Container from "./Container";

function Intro() {
  return (
    <div className="bg-[#212529] text-white text-center py-16">
      <Container>
        <h1 className="text-4xl">Selamat Datang di Website</h1>
        <h1 className="text-4xl font-semibold">Kusen Aluminium Window Home</h1>
        <div className="w-20 h-1 bg-gray-500 mx-auto my-4 rounded-full"></div>
        <h1 className="text-xl">
          Kami merupakan spesialis jasa pembuatan dan pemasangan Kusen Pintu Aluminium, dan Jendela Aluminium. Segera Hubungi Kami untuk informasi selengkapnya.
        </h1>
      </Container>
    </div>
  );
}

export default Intro;
