"use client";
import { addOrRemoveLikeAction } from "@/actions/blogActions/addOrRemoveLikeAction";
import { Heart } from "lucide-react";
import { useState } from "react";

function HeartButton({
  userIsLiked,
  total_names,
  articleId,
  isAuthenticated,
}: {
  userIsLiked: boolean;
  total_names: string[];
  articleId: number;
  isAuthenticated: boolean;
}) {
  const [liked, setLiked] = useState(userIsLiked);
  const [likesNumber, setLikesNumber] = useState(total_names.length);

  const onChangeHeartState = async () => {
    if (isAuthenticated) {
      setLiked(() => !liked);
      setLikesNumber(liked ? likesNumber - 1 : likesNumber + 1);
      addOrRemoveLikeAction(articleId);
    } else {
      alert("You need to log in first to be able to like this article.");
    }
  };
  return (
    <>
      <Heart
        size={18}
        className={`
          ${liked ? "fill-red-500 text-red-500" : "fill-transparent text-gray-500"}
          cursor-pointer transition-all duration-300 ease-in-out
          hover:scale-110 hover:text-red-400 active:scale-90
        `}
        onClick={onChangeHeartState}
      />
      <span className={`
        ${liked ? "text-red-500" : "text-gray-500"}
        ml-1 text-sm font-medium transition-colors duration-300
      `}>
        {likesNumber}
      </span>
    </>
  );
}

export default HeartButton;
