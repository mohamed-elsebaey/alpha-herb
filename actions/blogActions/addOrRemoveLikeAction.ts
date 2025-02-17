"use server";

import { getArticleLikeStateByUserIdArticleId } from "@/db/db";
import { getSession } from "@/lib/lib";
import { revalidatePath } from "next/cache";

export async function addOrRemoveLikeAction(articleId: number) {
  const sessionData = await getSession();

  if (!sessionData) {
    return;
  }

  const userId = sessionData.user.id;

  await getArticleLikeStateByUserIdArticleId(userId, articleId);

  revalidatePath("/blog");
}
