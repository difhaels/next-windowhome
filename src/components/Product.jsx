"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";

export default function Product() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const grouped = data.reduce((acc, item) => {
          const category = acc.find((cat) => cat.name === item.category);
          if (category) {
            category.images.push(item.imageUrl);
          } else {
            acc.push({ name: item.category, images: [item.imageUrl] });
          }
          return acc;
        }, []);
        setCategories(grouped);
      });
  }, []);

  const filteredCategories =
    selectedCategory === "All"
      ? categories
      : categories.filter((category) => category.name === selectedCategory);

  return (
    <section className="pt-10 sm:pt-16">
      <Container>
        <h3 className="mx-auto text-xl font-semibold mb-6 py-1 text-white px-5 bg-[#222F99] w-fit">PRODUK</h3>
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
