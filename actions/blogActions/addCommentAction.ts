"use server";

import { addUserCommentToArticleByUserIdArticleId } from "@/db/db";
import { getSession } from "@/lib/lib";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addCommentAction(
  prevState: { message?: string },
  formData: FormData
) {
  const comment = formData.get("comment")?.toString() || "";
  const articleId = Number(formData.get("blogId")) || 0;

  const sessionData = await getSession();

  if (!sessionData) {
    redirect("/sign-in");
  }

  const userId = sessionData.user.id;

  addUserCommentToArticleByUserIdArticleId(userId, articleId, comment);

  revalidatePath("/blog");

  return {};
}
