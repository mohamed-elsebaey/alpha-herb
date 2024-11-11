import FAQ from "@/components/faq/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Have questions about the world of herbs? Our Alpha Herb FAQ page is the perfect place to find the answers you're looking for. Discover the benefits of herbs, learn about our products, and get clear, comprehensive answers to all your inquiries. Search now!",
  alternates: {
    canonical: "https://www.alpha-herbs.com/faq",
  },
};

function page() {
  return (
    <>
      <FAQ />
    </>
  );
}

export default page;
