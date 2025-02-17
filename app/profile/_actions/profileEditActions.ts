"use server";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/cloudinary";
import { updateUserProfileData } from "@/db/db";
import { revalidatePath } from "next/cache";

export async function profileEditActions(
  prevState: unknown,
  formData: FormData
) {
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const country = formData.get("country") as string;
  const image = formData.get("image") as File;
  const pickedImage = formData.get("pickedImage") as string;

  const fullName = `${first_name} ${last_name}`;

  // if you use CLOUDINARY
  let imageUrl: string = pickedImage;
  try {
    if (image.size != 0) {
      imageUrl = await uploadImage(image, email);
    }
  } catch {
    throw new Error("Saving image failed!");
  }

  // update dataBase Where Email
  updateUserProfileData(
    email,
    fullName,
    phone,
    country,
    imageUrl
  );

  revalidatePath("/", "layout");
  redirect("/profile");

  return {};
}
