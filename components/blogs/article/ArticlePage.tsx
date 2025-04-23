import React from "react";

function ArticlePage({ articleData }: { articleData: Blog }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">
        {articleData.title}
      </h1>
      <p className="text-lg text-gray-700 mb-16 text-center">
        {articleData.description}
      </p>
    </div>
  );
}

export default ArticlePage;
