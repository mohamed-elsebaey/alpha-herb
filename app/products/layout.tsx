import ProductsTab from "@/components/products/ProductsTab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Products",
    template: `%s | Alpha Herb`,
  },
  description:
    "Indulge in the pure essence of nature with our premium selection of organic herbs, flowers, and seeds. From the aromatic basil and zesty coriander to the soothing chamomile and flavorful cumin, our products are carefully cultivated and dried to preserve their natural goodness. Elevate your culinary creations and enjoy the benefits of these versatile ingredients in your everyday life.",
  alternates: {
    canonical: "https://www.alpha-herbs.com/products",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ProductsTab />
      {children}
    </div>
  );
}
