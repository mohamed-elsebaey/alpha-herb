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
  title: "Alpha Herb",
  description:
    "Build your natural products with Alpha Herb. We are a leading supplier of bulk medicinal and aromatic herbs. We provide customized solutions to meet your needs, whether you are a functional food producer, herbal medicine manufacturer, or cosmetics company. Our product quality is our guarantee of your success.",
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
