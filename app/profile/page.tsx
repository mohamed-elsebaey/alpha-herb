import type { Metadata } from "next";
import { redirect } from "next/navigation";

import Profile from "@/components/profile/Profile";
import { getSession } from "@/lib/lib";
import { getUserDataFromDB } from "@/db/db";

export const metadata: Metadata = {
  title: "Profile",
};

async function ProfilePage() {
  const sessionData = await getSession();

  if (!sessionData?.user?.id) {
    redirect("/sign-in?profile");
  }

  const user = (await getUserDataFromDB(sessionData.user.id)) as User;

  if (!user) {
    throw new Error("User data not found");
  }

  return <Profile userData={user} />;
}

export default ProfilePage;
