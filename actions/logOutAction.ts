"use server";
import { logout } from "@/lib/lib";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logOutAction() {
  await logout();
  revalidatePath("/");
  redirect("/");
}
