"use server";
import { uploadImage } from "@/lib/cloudinary";
import { updateUserProfileData } from "@/db/db";
import { revalidatePath } from "next/cache";

export async function profileEditActions(
  prevState: { message?: string },
  formData: FormData
) {
  const first_name = formData.get("first_name")?.toString() || "";
  const last_name = formData.get("last_name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const country = formData.get("country")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const image = formData.get("image") as File | null;
  const pickedImage = formData.get("pickedImage")?.toString() || "";
  
  const fullName = `${first_name} ${last_name}`;

  // if use use CLOUDINARY
  let imageUrl: string = pickedImage;
  try {
    if (image) {
      imageUrl = await uploadImage(image, email);
    }
  } catch {
    throw new Error("Saving image failed!");
  }

  // update dataBase Where Email
  updateUserProfileData(email, fullName, phone, country, imageUrl);
  revalidatePath("/", "layout");

  return {};
}
