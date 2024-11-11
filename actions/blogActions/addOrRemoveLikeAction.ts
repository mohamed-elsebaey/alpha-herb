"use server";

import { getArticleLikeStateByUserIdArticleId } from "@/db/db";
import { getSession } from "@/lib/lib";
import { revalidatePath } from "next/cache";

export async function addOrRemoveLikeAction(articleId: any) {
  const sessionData = await getSession();

  if (!sessionData) {
    return;
  }

  const userId: any = sessionData.user.id;

  const likeState = await getArticleLikeStateByUserIdArticleId(
    userId,
    articleId
  );

  revalidatePath("/blog");
}
