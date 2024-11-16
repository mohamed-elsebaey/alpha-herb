import Link from "next/link";
import React from "react";


function ProductsTab() {
  return (
    <div className="mt-[120px]">
      <div className="mx-auto max-w-[520px] text-center mb-3">
        <span className="mb-2 block text-lg font-semibold text-primary">
          Products
        </span>
        <h2 className="mb-4 text-3xl font-bold  sm:text-[40px]/[48px] text-nowrap">
          Our vital products
        </h2>
      </div>
      <div className="flex items-center justify-center gap-5 py-4 md:py-8 flex-wrap">
        <Link
          href="/products"
          className="text-gray-900 border border-gray-200 hover:border-gray-500 min-w-36 focus:text-white focus:ring-4 focus:outline-none focus:bg-primary focus:ring-primary/30  rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "
        >
          All categories
        </Link>
        <Link
          href="/products/dried-leaves"
          className="text-gray-900 border border-gray-200 hover:border-gray-500 min-w-36 focus:text-white focus:ring-4 focus:outline-none focus:bg-primary focus:ring-primary/30  rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "
        >
          Dried Leaves
        </Link>
        <Link
          href="/products/flowers"
          className="text-gray-900 border border-gray-200 hover:border-gray-500  min-w-36 focus:text-white focus:ring-4 focus:outline-none focus:bg-primary focus:ring-primary/30  rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3  "
        >
          Flowers
        </Link>
        <Link
          href="/products/seeds"
          className="text-gray-900 border border-gray-200 hover:border-gray-500  min-w-36 focus:text-white focus:ring-4 focus:outline-none focus:bg-primary focus:ring-primary/30  rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3  "
        >
          Seeds
        </Link>
      </div>
    </div>
  );
}

export default ProductsTab;
