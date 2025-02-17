import type { Metadata } from "next";
// import { Inter, Open_Sans, Cairo } from "next/font/google";
import { Open_Sans } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Template from "./template";

import { getSession } from "@/lib/lib";
import { getUserDataFromDB } from "@/db/db";

import "./globals.css";

const open_Sans = Open_Sans({ subsets: ["latin"] });

const DEFAULT_PROFILE_IMAGE =
  "https://res.cloudinary.com/dyriptpqq/image/upload/v1729810401/AlphaHerbs-Images/usersProfileImages/alpha-herbs.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alpha-herbs.com/"),
  title: {
    default: "Alpha Herb - Premium Medicinal & Aromatic Herbs Supplier",
    template: `%s | Alpha Herb - Premium Herbs`,
  },
  description:
    "Discover the healing power of nature with Alpha Herb. Leading supplier of bulk medicinal and aromatic herbs for functional food, herbal medicine, and cosmetics industries.",
  keywords:
    "medicinal herbs, aromatic herbs, bulk herbs, natural products, herbal medicine, organic herbs, herbal supplements, botanical extracts, essential oils, dried herbs, wholesale herbs, premium herbs, natural healing, herb supplier, أعشاب طبية, زيوت عطرية, أعشاب عضوية, مستخلصات عشبية, نباتات طبية, توابل طبيعية, زيوت طبيعية, أعشاب بالجملة, مكملات عشبية, علاج طبيعي, مستخلصات نباتية, أعشاب مجففة, منتجات طبيعية, موردي الأعشاب, spices, natural remedies, herbal tea, organic farming, sustainable herbs, herb extracts, botanical ingredients, herbal ingredients, traditional medicine, holistic healing, plant extracts, herbal products, herbal raw materials",
  authors: [{ name: "Alpha Herb" }],
  creator: "Alpha Herb",
  publisher: "Alpha Herb",
  formatDetection: { telephone: false },
  verification: { google: "google-site-verification-code" },
  openGraph: {
    title: "Alpha Herb - Premium Medicinal & Aromatic Herbs Supplier",
    description:
      "Discover the healing power of nature with Alpha Herb. Leading supplier of bulk medicinal and aromatic herbs for functional food, herbal medicine, and cosmetics industries.",
    url: "https://www.alpha-herbs.com",
    siteName: "Alpha Herb",
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Alpha Herb - Premium Herbs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Herb - Premium Medicinal & Aromatic Herbs Supplier",
    description:
      "Discover the healing power of nature with Alpha Herb. Leading supplier of bulk medicinal and aromatic herbs.",
    images: ["opengraph-image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;
  const user = userId ? ((await getUserDataFromDB(userId)) as User) : null;
  const userRole = user?.role || 'USER';
  const profilePath = user?.profilePath || DEFAULT_PROFILE_IMAGE;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${open_Sans.className} mx-auto max-w-[1800px]`}>
        <Header userRole={userRole} profilePath={profilePath} />

        {/* Template used to add framer motion to every child */}
        <Template>{children}</Template>

        {/* website speed insights */}
        <SpeedInsights />

        {/* website Analytics  */}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
