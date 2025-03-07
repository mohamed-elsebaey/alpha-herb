import {
  getAllCommentsOnArticleByBlogId,
  getNamesOfThoseWhoLikedTheArticleByBlogId,
} from "@/db/db";
import HeartButton from "./HeartButton";
import { getSession } from "@/lib/lib";

async function LikesSection({ id }: { id: number }) {
  const total_names = await getNamesOfThoseWhoLikedTheArticleByBlogId(id);
  const total_comments = await getAllCommentsOnArticleByBlogId(id);

  const sessionData = await getSession();

  let email: string;
  if (sessionData) {
    email = sessionData.user.email;
  }

  const userIsLiked = Boolean(
    total_names.find(
      (user: { name: string; email: string }) => user.email === email
    )
  );
  return (
    <div className="flex ">
      <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
        <HeartButton
          userIsLiked={userIsLiked}
          total_names={total_names.map((user: { name: string }) => user.name)}
          articleId={id}
          isAuthenticated={Boolean(sessionData)}
        />
      </span>
      <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
        <svg
          className="h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          ></path>
        </svg>
        <span className="ml-1 flex">
          {total_comments[0].total_comments}
          <span className="hidden sm:block">&nbsp;Comments</span>
        </span>
      </span>
    </div>
  );
}

export default LikesSection;
