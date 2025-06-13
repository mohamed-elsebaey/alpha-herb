import Products from "@/components/products/Products";
import React, { Suspense } from "react";

interface BlogPostPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  
  const title = `${params.category} - Alpha Herb Products`;
  
  const description = `Explore our premium ${params.category} collection at Alpha Herb. High-quality natural products and medicinal herbs.`;
  
  return {
    title,
    description,
    keywords: `${params.category}, herbs, natural products, medicinal plants, Alpha Herb, organic herbs`,
    openGraph: {
      title,
      description,
      url: `https://www.alphaherb.net/products/${params.category}`,
      type: 'website',
      siteName: 'Alpha Herb',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.alphaherb.net/products/${params.category}`,
    },
  };
}

async function page(props: BlogPostPageProps) {
  const params = await props.params;
  return (
    <div className="container mx-auto px-4">
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-4 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        }
      >
        <Products selectedCategory={params.category} />
      </Suspense>
    </div>
  );
}

export default page;
