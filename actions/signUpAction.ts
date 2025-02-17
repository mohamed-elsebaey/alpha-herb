"use server";

import { addNewUser } from "@/db/db";
import { addUserSessions } from "@/lib/lib";
// import { sendMail } from "@/lib/mail";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormStateType = {
  errors?: {
    email?: string;
    password?: string;
  };
};
export async function signUpFormAction(
  state: FormStateType,
  formData: FormData
): Promise<FormStateType> {
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";

  // Error handling and validation
  const errors: { email?: string; password?: string } = {};

  if (!email) {
    errors.email = "* Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "* Please enter a valid email address.";
  } else if (password.length < 8) {
    errors.password = "* Password must be at least 8 characters long."; // Clearer message
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // step 1 --- check if email exits or not
  // step 2 --- if email not exits add data to mysql database

  // ********************************************************************
  const verificationCode = Math.floor(Math.random() * 10000);
  // ********************************************************************

  const newUserData = await addNewUser(email, password, verificationCode);

  if (newUserData.errors) {
    return newUserData;
  }

  // step 3 --- send verificationCode to new users

  function generateVerificationMessage(verificationCode: number): string {
    const codeDigits = verificationCode.toString().split("");

    const formattedCode = codeDigits
      .map(
        (digit) => `<span style="display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 5px;">${digit}</span>`
      )
      .join("");

    return `
      <p>Thank you for signing up!</p>
      <p>Your verification code is:<br><span style="font-weight: bold; color : teal;">${formattedCode}</span></p>
      <p>Please enter this code on the verification page to activate your account.</p>
    `;
  }

  // const message = generateVerificationMessage(verificationCode);
  generateVerificationMessage(verificationCode);
  
  //  await sendMail({
  //   to: email,
  //   name: "Alpha-Herbs.com",
  //   subject: "Verify Your Email",
  //   body: message,
  // });
  // revalidatePath("/sign-in");

  addUserSessions(newUserData);
  revalidatePath("/");
  redirect("/");

}
