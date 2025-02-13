import OurFarms from "@/components/our-farms/OurFarms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Farms",
  description:
    "At Namaa, we are dedicated to providing you with the freshest, most flavorful organic produce. Our commitment to quality begins with our soil, which we nourish with love and care. We use sustainable farming practices to ensure that our products are not only delicious but also good for the environment.",
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
