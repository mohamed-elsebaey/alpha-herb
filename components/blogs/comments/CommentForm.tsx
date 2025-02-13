"use client";
import { useActionState } from "react";

import { addCommentAction } from "@/actions/blogActions/addCommentAction";
import { useFormStatus } from "react-dom";

function PostCommentButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
      type="submit"
      disabled={pending}
    >
      {pending ? "Loading..." : "Post Comment"}
    </button>
  );
}

function CommentForm() {
  const blogId = 1;
  const [formState, formAction] = useActionState(addCommentAction, null);

  return (
    <form className="mb-6" action={formAction}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          name="comment"
          className="px-0 w-full text-sm h-20 text-gray-900 border-0 focus:ring-0 focus:outline-none"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <PostCommentButton />
    </form>
  );
}

export default CommentForm;
