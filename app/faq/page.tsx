import FAQ from "@/components/faq/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Alpha Herbs",
  description:
    "Have questions about the world of herbs? Our Alpha Herb FAQ page is the perfect place to find the answers you're looking for. Discover the benefits of herbs, learn about our products, and get clear, comprehensive answers to all your inquiries. Search now!",
  alternates: {
    canonical: "https://www.alphaherb.net/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Alpha Herbs",
    description:
      "Find answers to common questions about herbs, their benefits, and our products at Alpha Herbs.",
    url: "https://www.alphaherb.net/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Alpha Herbs",
    description:
      "Find answers to common questions about herbs, their benefits, and our products at Alpha Herbs.",
  },
  keywords:
    "herbs FAQ, herbal questions, herb benefits, Alpha Herbs help, herbal medicine FAQ, natural remedies questions, " +
    "medicinal herbs, organic herbs, herbal supplements, herbal remedies, herb shop, buy herbs online, " +
    "اعشاب طبية, فوائد الاعشاب, علاج بالاعشاب, اعشاب طبيعية, متجر اعشاب, شراء اعشاب, " +
    "الطب البديل, العلاج بالنباتات, اسئلة شائعة عن الاعشاب, الاعشاب والصحة, " +
    "herbal tea benefits, herbal medicine guide, natural healing, holistic medicine, " +
    "شاي اعشاب, دليل الاعشاب, العلاج الطبيعي, الطب التكميلي",
};

function page() {
  return (
    <>
      <FAQ />
    </>
  );
}

export default page;
