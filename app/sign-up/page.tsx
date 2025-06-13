import SignIn from "@/components/sign-In-up/SignIn";
import { getSession } from "@/lib/lib";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Join the vibrant Alpha Herb community and explore the world of natural herbs. Share your knowledge with our community, learn from our experts, and discover new recipes daily. Sign up now and start your journey with us!",
  alternates: {
    canonical: "https://www.alphaherb.net/sign-up",
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
