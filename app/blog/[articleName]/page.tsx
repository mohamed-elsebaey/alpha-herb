import ArticlePage from "@/components/blogs/article/ArticlePage";
import CommentsSection from "@/components/blogs/comments/CommentsSection";
import { getArticleDateByArticleTitle } from "@/db/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { cache } from "react";

interface BlogPostPageProps {
  params: Promise<{
    articleName: string;
  }>;
}

const articleData_cache = cache(getArticleDateByArticleTitle);

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  // get the article name from the URL /.....
  let articleName = (await params).articleName;
  // decode URL
  articleName = decodeURIComponent(articleName);
  // GET the article Data from DB
  const articleData = (await articleData_cache(articleName)) || "";
  return {
    title: articleData.title ? articleData.title : "",
    description: articleData.description
      ? articleData.description
      : "Explore the world of medicinal and aromatic plants...",
    alternates: {
      canonical: `https://www.alphaherb.net/blog/${articleName}`,
    },
  };
}

async function BlogPostPage({ params }: BlogPostPageProps) {
  let articleName = (await params).articleName;
  articleName = decodeURIComponent(articleName);

  const articleData = (await articleData_cache(articleName)) || "";

  if (!articleData) {
    return notFound();
  }
  return (
    <>
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto">
          <div className={`flex flex-col justify-center text-primary`}>
            <ArticlePage articleData={articleData}/>
          </div>
        </div>
      </section>
      <hr className="text-primary" />
      <CommentsSection articleId={articleData.id} />
      <hr className="text-primary" />
    </>
  );
}

export default BlogPostPage;
