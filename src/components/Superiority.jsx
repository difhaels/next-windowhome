import React from "react";
import Container from "./Container";

function Superiority() {
  return (
    <section className="pt-16">
      <Container>
        <h3 data-aos="fade-up" className="text-center text-2xl font-semibold mb-6">
          Keunggulan Rumah Kusen Aluminium
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="bg-white shadow-md p-4 text-center rounded-lg"
            data-aos="fade-up"
          >
            <img
              src="/worker.svg"
              alt="Worker"
              className="mx-auto mb-3 w-12 h-12"
            />
            <p className="text-lg font-medium">Tim Profesional</p>
          </div>
          <div
            className="bg-white shadow-md p-4 text-center rounded-lg"
            data-aos="fade-up"
          >
            <img
              src="/cheap.svg"
              alt="Cheap"
              className="mx-auto mb-3 w-12 h-12"
            />
            <p className="text-lg font-medium">Harga Terjangkau</p>
          </div>
          <div
            className="bg-white shadow-md p-4 text-center rounded-lg"
            data-aos="fade-up"
          >
            <img
              src="/fast.svg"
              alt="Fast"
              className="mx-auto mb-3 w-12 h-12"
            />
            <p className="text-lg font-medium">Proses Cepat</p>
          </div>
          <div
            className="bg-white shadow-md p-4 text-center rounded-lg"
            data-aos="fade-up"
          >
            <img
              src="/guarantee.svg"
              alt="Guarantee"
              className="mx-auto mb-3 w-12 h-12"
            />
            <p className="text-lg font-medium">Bergaransi</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Superiority;
