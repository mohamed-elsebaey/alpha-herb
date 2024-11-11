import React from "react";
import type { Metadata } from "next";

import Blogs from "@/components/blogs/Blogs";

export const metadata: Metadata = {
  title: "Alpha Herb Blog: Your Guide to Natural Healing",
  description:
    "Discover the world of natural healing with Alpha Herb. Our comprehensive blog provides you with reliable and in-depth information about the benefits of herbs, from traditional remedies to the latest scientific research. Benefit from our expertise in herbal medicine to improve your health and wellness. Join our vibrant community of herbal enthusiasts and share your experiences with us. We are committed to providing you with accurate and helpful information to support your personal health goals.",
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
