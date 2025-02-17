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

  const sessionData = await getSession();

  if (!sessionData) {
    redirect('/sign-in')
  }

  const userId = sessionData.user.id;

  addUserCommentToArticleByUserIdArticleId(userId,1,comment)

  revalidatePath("/blog");

  return { };

}
