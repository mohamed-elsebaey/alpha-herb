import React from "react";
import type { Metadata } from "next";

import Blogs from "@/components/blogs/Blogs";

export const metadata: Metadata = {
  title: "Alpha Herb Blog: Your Guide to Natural Healing",
  description:
    "Discover the world of natural healing with Alpha Herb. Our comprehensive blog provides you with reliable and in-depth information about the benefits of herbs, from traditional remedies to the latest scientific research. Benefit from our expertise in herbal medicine to improve your health and wellness. Join our vibrant community of herbal enthusiasts and share your experiences with us. We are committed to providing you with accurate and helpful information to support your personal health goals.",
  keywords: [
    // English Keywords - General
    "herbal medicine",
    "natural healing",
    "medicinal herbs",
    "traditional remedies",
    "holistic health",
    "herbal remedies",
    "wellness blog",

    // English Keywords - Specific Herbs
    "peppermint",
    "stevia",
    "chamomile",
    "ginger",
    "turmeric",
    "sage",
    "thyme",
    "rosemary",
    "lavender",
    "green tea",
    "echinacea",
    "aloe vera",
    "cinnamon",
    "oregano",
    "basil",
    "mint leaves",
    "natural sweeteners",
    "medicinal plants",

    // Arabic Keywords - General
    "الطب العشبي",
    "العلاج الطبيعي",
    "الأعشاب الطبية",
    "العلاجات التقليدية",
    "الصحة الشاملة",
    "العلاج بالأعشاب",
    "مدونة الصحة والعافية",

    // Arabic Keywords - Specific Herbs
    "نعناع",
    "ستيفيا",
    "بابونج",
    "زنجبيل",
    "كركم",
    "مريمية",
    "زعتر",
    "إكليل الجبل",
    "خزامى",
    "شاي أخضر",
    "اكيناسيا",
    "صبار",
    "قرفة",
    "أوريجانو",
    "ريحان",
    "أوراق النعناع",
    "محليات طبيعية",
    "نباتات طبية",
    "أعشاب علاجية",
    "زهورات طبية",
    "توابل طبيعية",
    "مستخلصات عشبية",
  ],
  alternates: {
    canonical: "https://www.alpha-herbs.com/blog",
  },
};

function BlogPage() {
  return (
    <>
      <Blogs />
    </>
  );
}

export default BlogPage;
