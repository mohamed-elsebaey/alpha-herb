import { grtAllUserCommentsWithTheirNamesAndProfilePicturePathByBlogId } from "@/db/db";
import CommentForm from "./CommentForm";
import Image from "next/image";

async function CommentsSection({ articleId }: { articleId: any }) {
  const allCommentsData =
    await grtAllUserCommentsWithTheirNamesAndProfilePicturePathByBlogId(
      articleId
    );
  return (
    <>
      <section className="bg-white py-8 lg:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
              Discussion ({allCommentsData.length})
            </h2>
          </div>
          <CommentForm />
          {/* Users Comments Start */}
          {allCommentsData.map((userComment: any) => (
            <div
              className="p-6 mb-3 text-base bg-white border-t "
              key={userComment.id}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                    <div className="mr-2 w-7 h-7 overflow-hidden rounded-full">
                      <Image
                        width={500}
                        height={500}
                        src={userComment.profilePath}
                        className=" h-full w-full object-cover object-center"
                        alt={userComment.name}
                        loading="lazy"
                      />
                    </div>
                    {userComment.name}
                  </div>
                  <p className="text-sm text-gray-600">
                    {userComment.created_at.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                {/* <!-- Dropdown menu Start --> */}
                <button
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* <div className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                      Remove
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                      Report
                    </a>
                  </li>
                </ul>
              </div> */}
              </div>
              {/* <!-- Dropdown menu End --> */}
              <p className="text-gray-500">{userComment.comment}</p>
              <div className="flex items-center mt-4 space-x-4">
                {/* <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CommentsSection;
