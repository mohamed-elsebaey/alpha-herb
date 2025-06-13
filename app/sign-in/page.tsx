import SignIn from "@/components/sign-In-up/SignIn";
import { getSession } from "@/lib/lib";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Join the Alpha Herb community and sign in to unlock more features. Share your knowledge, learn from experts, and connect with fellow herb enthusiasts.",
  alternates: {
    canonical: "https://www.alphaherb.net/sign-in",
  },
};

async function page() {
  const sessionData = await getSession();
  if (sessionData) {
    redirect("/");
  }
  return (
    <>
      <SignIn />
    </>
  );
}

export default page;
