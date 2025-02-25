import Mint from "@/components/blogs/article/Mint";
import CommentsSection from "@/components/blogs/comments/CommentsSection";
import React from "react";

interface BlogPostPageProps {
  params: Promise<{
    articleName: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  return {
    title: params.articleName,
    description:
      params.articleName == "mint-natures-refreshing-remedy-for-digestion-and-more"
        ? "Explore the world of mint, its benefits, and how to use it."
        : "Explore the world of medicinal and aromatic plants...",
    alternates: {
      canonical: `https://www.alpha-herbs.com/blog/${params.articleName}`,
    },
  };
}

async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  let articleId = 0;
  let data = (
    <>
      <h1 className="font-bold text-6xl text-primary my-5">
        {params.articleName ? `Blog Section | ${params.articleName.split("-")[0].toUpperCase()}` : "Blog Section"}
      </h1>
      <h2 className="font-semibold text-3xl text-primary2 my-5">Soon ...</h2>
    </>
  );

    if (params.articleName == "mint-natures-refreshing-remedy-for-digestion-and-more") {
    data = <Mint />;
    articleId = 1;
  }

  return (
    <>
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto">
          <div
            className={`flex flex-col justify-center text-primary ${
              params.articleName !==
              "mint-natures-refreshing-remedy-for-digestion-and-more"
                ? "text-center"
                : ""
            }`}
          >
            {data}
          </div>
        </div>
      </section>
      <hr className="text-primary" />
      {articleId == 1 && <CommentsSection articleId={articleId} />}
      <hr className="text-primary" />
    </>
  );
}

export default BlogPostPage;
