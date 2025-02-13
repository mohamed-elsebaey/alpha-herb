import Products from "@/components/products/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Indulge in the pure essence of nature with our premium selection of organic herbs, flowers, and seeds. From the aromatic basil and zesty coriander to the soothing chamomile and flavorful cumin, our products are carefully cultivated and dried to preserve their natural goodness. Elevate your culinary creations and enjoy the benefits of these versatile ingredients in your everyday life.",
  alternates: {
    canonical: "https://www.alpha-herbs.com/products",
  },
};

function page() {
  return (
    <>
      <Products selectedCategory="all"/>
    </>
  );
}

export default page;
