import ContactUs from "@/components/contact/ContactUs";
import Newsletter from "@/components/newsletter/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a question or need assistance? Contact Alpha Herb for premium herbal products and expert guidance. We're here to help! ",
  keywords: [
    // English Keywords
    "contact Alpha Herb",
    "herbal products support",
    "customer service",
    "natural remedies help",
    "herb consultation",
    // Arabic Keywords
    "تواصل مع الفا هيرب",
    "دعم المنتجات العشبية",
    "خدمة العملاء",
    "استشارات الأعشاب",
    "منتجات طبيعية",
  ],
  alternates: {
    canonical: "https://www.alphaherb.net/contact",
  },
  openGraph: {
    title: "Contact Us - Alpha Herb ",
    description: "Contact Alpha Herb for premium herbal products and expert guidance ",
    url: "https://www.alphaherb.net/contact",
    siteName: "Alpha Herb",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    type: "website",
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
