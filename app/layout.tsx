import type { Metadata } from "next";
import { Inter, Open_Sans, Cairo } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const open_Sans = Open_Sans({ subsets: ["latin"] });

import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Template from "./template";
import { getSession } from "@/lib/lib";
import { getUserDataFromDB } from "@/db/db";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alpha-herbs.com/"),
  title: {
    default: "Alpha Herb - Premium Medicinal & Aromatic Herbs Supplier",
    template: `%s | Alpha Herb - Premium Herbs`,
  },
  description: "Discover the healing power of nature with Alpha Herb. Leading supplier of bulk medicinal and aromatic herbs for functional food, herbal medicine, and cosmetics industries.",
  keywords: "medicinal herbs, aromatic herbs, bulk herbs, natural products, herbal medicine, organic herbs",
  authors: [{ name: "Alpha Herb" }],
  creator: "Alpha Herb",
  publisher: "Alpha Herb",
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: "google-site-verification-code",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;

  let user : any;
  if (userId) {
    user = await getUserDataFromDB(userId);
  }

  const userRole = user?.role || false 
  
  const profilePath =
    user?.profilePath ||
    "https://res.cloudinary.com/dyryptpqq/image/upload/v1729810401/AlphaHerbs-Images/usersProfileImages/alpha-herbs.png";

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
