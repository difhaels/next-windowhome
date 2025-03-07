"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";

export default function Product({ full }) {
  const [categories, setCategories] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const grouped = {};
        data.forEach((item) => {
          if (!grouped[item.category]) {
            grouped[item.category] = [];
          }
          grouped[item.category].push({ url: item.imageUrl, name: item.name });
        });

        const formattedCategories = Object.entries(grouped).map(([name, images]) => ({
          name,
          images,
        }));

        setCategories(formattedCategories);

        if (!full) {
          // Ambil 18 produk random dari seluruh kategori
          const allProducts = formattedCategories.flatMap((cat) => cat.images);
          const shuffled = allProducts.sort(() => 0.5 - Math.random()).slice(0, 18);
          setRandomProducts(shuffled);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [full]);

  return (
    <section className="pt-10 sm:pt-16">
      <Container>
        <h3 className="mx-auto text-xl font-semibold mb-6 py-1 text-white px-5 bg-[#222F99] w-fit">PRODUK</h3>

        {/* Jika full true, tampilkan kategori */}
        {full && (
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h5 className="text-lg font-medium">Kategori :</h5>
            <select
              className="border border-gray-300 p-2 text-sm"
              onChange={(e) => setCategories([categories.find((cat) => cat.name === e.target.value)])}
            >
              <option value="All">All</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Jika full true, tampilkan semua kategori, jika false, hanya 18 random */}
        {full
          ? categories.map((category, index) => (
              <div key={index} className="mb-8">
                <p className="text-lg font-semibold mb-4">{category.name}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.images.map((image, idx) => (
                    <div key={idx} className="bg-white shadow-md overflow-hidden">
                      <img src={image.url} alt={image.name} className="w-full h-40 object-cover" />
                      <p className="text-center text-sm font-medium p-2">{image.name.replace(/-/g, " ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : // Jika full false, hanya tampilkan 18 produk random
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {randomProducts.map((image, idx) => (
                <div key={idx} className="bg-white shadow-md overflow-hidden">
                  <img src={image.url} alt={image.name} className="w-full h-40 object-cover" />
                  <p className="text-center text-sm font-medium p-2">{image.name.replace(/-/g, " ")}</p>
                </div>
              ))}
            </div>}

        {/* Jika full false, tampilkan tombol "Lihat Lainnya" */}
        {!full && (
          <div className="mt-6 text-center">
            <a href="/product" className="px-6 py-2 bg-[#222F99] text-white rounded-md">
              Lihat Lainnya
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
