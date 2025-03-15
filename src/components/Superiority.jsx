import React from "react";
import Container from "./Container";

function Superiority() {
  return (
    <section className="pt-16">
      <Container>
        <h3
          data-aos="fade-up"
          className="text-center text-2xl font-semibold mb-6"
        >
          Keunggulan Rumah Kusen Aluminium
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="bg-white shadow-md p-4 text-center rounded-lg"
            data-aos="fade-up"
          >
            <img
              src="/teamwork.svg"
              alt="Tim Profesional"
              className="mx-auto  w-auto h-50"
            />
            <p className="text-lg font-semibold text-gray-800">
              Tim Profesional
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Tim berpengalaman dengan hasil pemasangan presisi, rapi, dan
              berkualitas tinggi.
            </p>
          </div>

          <div
            className="bg-white shadow-md p-4 text-center rounded-lg"
            data-aos="fade-up"
          >
            <img
              src="/bestprice.svg"
              alt="Harga Terjangkau"
              className="mx-auto  w-auto h-50"
            />
            <p className="text-lg font-semibold text-gray-800">
              Harga Terjangkau
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Dapatkan layanan berkualitas dengan harga yang bersaing dan
              transparan.
            </p>
          </div>

          <div
            className="bg-white shadow-md p-4 text-center rounded-lg"
            data-aos="fade-up"
          >
            <img
              src="/faster.svg"
              alt="Proses Cepat"
              className="mx-auto  w-auto h-50"
            />
            <p className="text-lg font-semibold text-gray-800">Proses Cepat</p>
            <p className="text-sm text-gray-600 mt-2">
              Kami memastikan pemasangan dilakukan dengan efisiensi tanpa
              mengurangi kualitas.
            </p>
          </div>

          <div
            className="bg-white shadow-md p-4 text-center rounded-lg"
            data-aos="fade-up"
          >
            <img
              src="/guarantee.svg"
              alt="Bergaransi"
              className="mx-auto  w-auto h-50"
            />
            <p className="text-lg font-semibold text-gray-800">Bergaransi</p>
            <p className="text-sm text-gray-600 mt-2">
              Jaminan kualitas terbaik dengan layanan purna jual yang dapat
              diandalkan.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Superiority;
