"use client"
import React, { useState } from "react";
import Container from "./Container";

export default function Product() {
  const categories = [
    { name: "Pintu Sliding", images: Array(7).fill("/pintuKaca1.png") },
    { name: "Pintu Utama", images: Array(7).fill("/pintuKaca1.png") },
    { name: "Pintu Kamar", images: Array(7).fill("/pintuKaca1.png") },
    { name: "Pintu Kaca", images: Array(7).fill("/pintuKaca1.png") },
    { name: "Pintu Kayu", images: Array(7).fill("/pintuKaca1.png") },
    { name: "Jendela Dobel", images: Array(7).fill("/pintuKaca1.png") },
    { name: "Sekat Shower", images: Array(7).fill("/pintuKaca1.png") },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCategories =
    selectedCategory === "All"
      ? categories
      : categories.filter((category) => category.name === selectedCategory);

  return (
    <section className="pt-10 sm:pt-16">
      <Container>
        <h2 className="text-center text-2xl font-bold mb-6">PRODUK</h2>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <h5 className="text-lg font-medium">Kategori :</h5>
          <select
            className="border border-gray-300 rounded-md p-2 text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {filteredCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <p className="text-lg font-semibold mb-4">{category.name}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.images.map((image, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt="Product"
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
