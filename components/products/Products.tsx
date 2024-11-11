"use client";
import React, { useState } from "react";
import { products } from "./types";
import Image from "next/image";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") {
      return true;
    }
    return product.category === selectedCategory;
  });
  return (
    <div className="container py-[110px]">
      <div className="mx-auto max-w-[520px] text-center mb-3">
        <span className="mb-2 block text-lg font-semibold text-primary">
          Products
        </span>
        <h2 className="mb-4 text-3xl font-bold  sm:text-[40px]/[48px] text-nowrap">
          Our vital products
        </h2>
      </div>
      <div className="flex items-center justify-center gap-5 py-4 md:py-8 flex-wrap">
        {/* <button
          type="button"
          className="text-primary hover:text-white border border-primary/60 bg-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/30 rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "
          onClick={() => setSelectedCategory("All")}
        >
          All categories
        </button> */}
        <button
          type="button"
          className="text-gray-900 border border-gray-200 hover:border-gray-500 min-w-36 focus:text-white focus:ring-4 focus:outline-none focus:bg-primary focus:ring-primary/30  rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "
          onClick={() => setSelectedCategory("DriedLeaves")}
        >
          Dried Leaves
        </button>
        <button
          type="button"
          className="text-gray-900 border border-gray-200 hover:border-gray-500  min-w-36 focus:text-white focus:ring-4 focus:outline-none focus:bg-primary focus:ring-primary/30  rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3  "
          onClick={() => setSelectedCategory("Flowers")}
        >
          Flowers
        </button>
        <button
          type="button"
          className="text-gray-900 border border-gray-200 hover:border-gray-500  min-w-36 focus:text-white focus:ring-4 focus:outline-none focus:bg-primary focus:ring-primary/30  rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3  "
          onClick={() => setSelectedCategory("Seeds")}
        >
          Seeds
        </button>
      </div>
      <div className="mx-auto w-[80%] grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ImageCard
            key={product.id}
            src={product.imageUrl}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;

const ImageCard = ({ src, name }: { src: any; name: any }) => {
  return (
    <div>
      <Image width={350} height={350} className="h-auto max-w-full rounded-lg" src={src} alt={name} loading="lazy"/>
    </div>
  );
};
