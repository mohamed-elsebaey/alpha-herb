import ContactUs from "@/components/contact/ContactUs";
import Newsletter from "@/components/newsletter/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a question or need assistance? At Alpha Herb, we strive to provide the best customer service. Contact us easily through our contact page. We are happy to receive your inquiries and suggestions, and we will get back to you as soon as possible. Discover for yourself why thousands trust our products and services.",
  alternates: {
    canonical: "https://www.alpha-herbs.com/contact",
  },
};

function page() {
  return (
    <>
      <ContactUs />
      <Newsletter />
    </>
  );
}

export default page;
