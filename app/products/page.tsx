
import  Products  from "@/components/products/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "......",
  alternates: {
    canonical: "https://www.alpha-herbs.com/products",
  },
};

function page() {
  return (
    <>
      <Products/>
    </>
  );
}

export default page;
