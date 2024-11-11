import OurFarms from "@/components/our-farms/OurFarms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Farms",
  description:
    "......",
  alternates: {
    canonical: "https://www.alpha-herbs.com/our-farms",
  },
};

function page() {
  return (
    <>
      <OurFarms/>
    </>
  );
}

export default page;
