import ProductsTab from "@/components/products/ProductsTab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Organic Herbs & Spices | Products",
    template: `%s | Alpha Herb - Premium Organic Products`,
  },
  description:
    "Discover our premium organic herbs, spices, and botanical products. We offer high-quality, sustainably sourced ingredients including culinary herbs, medicinal plants, and aromatic spices. All products are certified organic, carefully dried, and packaged to maintain maximum freshness and potency.",
  keywords: [
    "organic herbs",
    "organic spices",
    "premium herbs",
    "culinary herbs",
    "medicinal plants",
    "dried herbs",
    "botanical products",
    "Alpha Herb products",
    "natural herbs",
    "herbal tea",
    "spice blends",
    "cooking herbs",
    "organic farming",
    "sustainable herbs",
    "أعشاب عضوية",
    "توابل طبيعية",
    "أعشاب طبية",
    "بهارات عضوية",
    "شاي أعشاب",
    "نباتات طبية",
    "أعشاب مجففة",
    "توابل للطبخ",
    "زراعة عضوية",
    "منتجات عشبية",
    "خلطات بهارات",
    "أعشاب للطبخ",
    "منتجات طبيعية",
    "زراعة مستدامة"
  ],
  alternates: {
    canonical: "https://www.alpha-herbs.com/products",
  },
  openGraph: {
    title: "Premium Organic Herbs & Spices | Alpha Herb",
    description: "Explore our collection of premium organic herbs, spices, and botanical products. Sustainably sourced and carefully processed for maximum quality.",
    type: "website",
    url: "https://www.alpha-herbs.com/products",
    siteName: "Alpha Herb",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white min-h-screen">
      <ProductsTab />
      {children}
    </div>
  );
}
