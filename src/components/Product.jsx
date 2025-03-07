"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";

export default function Product({ full }) {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
        setFilteredCategories(formattedCategories);

        if (!full) {
          const allProducts = formattedCategories.flatMap((cat) => cat.images);
          const shuffled = allProducts.sort(() => 0.5 - Math.random()).slice(0, 18);
          setRandomProducts(shuffled);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [full]);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);

    if (selected === "All") {
      setFilteredCategories(categories);
    } else {
      setFilteredCategories(categories.filter((cat) => cat.name === selected));
    }
  };

  return (
    <section className="pt-10 sm:pt-16">
      <Container>
        <h3 className="mx-auto text-xl font-semibold mb-6 py-1 text-white px-5 bg-[#222F99] w-fit">PRODUK</h3>

        {full && (
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h5 className="text-lg font-medium">Kategori :</h5>
            <select
              className="border border-gray-300 p-2 text-sm"
              value={selectedCategory}
              onChange={handleCategoryChange}
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

        {full
          ? filteredCategories.map((category, index) => (
              <div key={index} className="mb-8">
                <p className="text-lg font-semibold mb-4">{category.name}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.images.map((image, idx) => (
                    <div key={idx} className="bg-white shadow-md overflow-hidden">
                      <div className="relative w-full h-40">
                        <Image 
                          src={image.url} 
                          alt={image.name} 
                          fill 
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-center text-sm font-medium p-2">
                        {image.name.replace(/-/g, " ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {randomProducts.map((image, idx) => (
                <div key={idx} className="bg-white shadow-md overflow-hidden">
                  <div className="relative w-full h-40">
                    <Image 
                      src={image.url} 
                      alt={image.name} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-center text-sm font-medium p-2">
                    {image.name.replace(/-/g, " ")}
                  </p>
                </div>
                
              ))}
            </div>}

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
