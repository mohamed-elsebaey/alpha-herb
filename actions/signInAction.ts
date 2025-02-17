"use server";
import { userDataAuthentication } from "@/db/db";
import { addUserSessions } from "@/lib/lib";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormStateType = {
  errors?: {
    email?: string;
    password?: string;
  };
};
export async function signInFormAction(
  state: FormStateType,
  formData: FormData
): Promise<FormStateType> {
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";

  const errors: { email?: string; password?: string } = {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "* Invalid Email";
  }
  // else if (password.length < 8) {
  //   errors.password = "* Invalid Password"; // Clearer message
  // }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const userData = await userDataAuthentication(email, password);

  if (userData.errors) {
    return userData;
  }

  addUserSessions(userData);
  revalidatePath("/");
  redirect("/");
}
