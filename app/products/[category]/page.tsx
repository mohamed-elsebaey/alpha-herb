import Products from "@/components/products/Products";
import React, { Suspense } from "react";

interface BlogPostPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  return {
    title: params.category,
    alternates: {
      canonical: `https://www.alpha-herbs.com/products/${params.category}`,
    },
  };
}

async function page(props: BlogPostPageProps) {
  const params = await props.params;
  return (
    <div>
      <Suspense fallback="Loading...">
        <Products selectedCategory={params.category} />
      </Suspense>
    </div>
  );
}

export default page;
