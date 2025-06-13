// Alpha Herb Main Page

import Hero from "@/components/Hero";
import Newsletter from "@/components/newsletter/Newsletter";
// import ProductsSection from "@/components/products-section/Product";
import Video from "@/components/Video";
import Stats from "@/components/stats/Stats";
import Images from "@/components/Images";
import { Metadata } from "next";
import Certificates from "@/components/Certificates";
import ProductsSection from "@/components/products-section/Product";

export const metadata: Metadata = {
  title: "Alpha Herb - Premium Medicinal & Aromatic Herbs Supplier",
  description: "Build your natural products with Alpha Herb. Leading supplier of bulk medicinal and aromatic herbs, providing customized solutions for functional food producers, herbal medicine manufacturers, and cosmetics companies. Premium quality guaranteed.",
  alternates: {
    canonical: "https://www.alphaherb.net",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Images />
      <Certificates/>
      <Stats />
      <ProductsSection />
      <Newsletter />
    </>
  );
}
