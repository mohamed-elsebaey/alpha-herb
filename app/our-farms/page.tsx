import OurFarms from "@/components/our-farms/OurFarms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Farms | Namaa Organic Farms ",
  description:
    "At Namaa, we are dedicated to providing you with the freshest, most flavorful organic produce. Our commitment to quality begins with our soil, which we nourish with love and care. We use sustainable farming practices to ensure that our products are not only delicious but also good for the environment.",
  keywords: [
    "Namaa Farms",
    "Organic Farming",
    "Sustainable Agriculture",
    "Fresh Produce",
    "Organic Herbs",
    "مزارع نماء",
    "زراعة عضوية",
    "زراعة مستدامة",
    "منتجات طازجة",
    "أعشاب عضوية",
    "خضروات عضوية",
    "مزارع مصر",
    "Egypt Farms",
    "Organic Vegetables",
    "Local Produce"
  ],
  alternates: {
    canonical: "https://www.alpha-herbs.com/our-farms",
  },
};

function page() {
  return (
    <>
      <OurFarms />
    </>
  );
}

export default page;
