import AboutUs from "@/components/about/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "At Alpha Herb, we are passionate about harnessing the healing power of nature. Our mission is to provide high-quality products and resources to help you experience the full benefits of herbal wellness. Join our community of like-minded individuals who share a commitment to natural living. Backed by scientific research and guided by our core values of sustainability and quality, we are dedicated to empowering you to live a healthier, more fulfilling life. Discover our story and explore our range of products today.",
  alternates: {
    canonical: "https://www.alphaherb.net/about",
  },
};

function page() {
  return (
    <>
      <AboutUs />
    </>
  );
}

export default page;
