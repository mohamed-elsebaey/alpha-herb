import type { Metadata } from "next";
import { redirect } from "next/navigation";

import Profile from "@/components/profile/Profile";
import { getSession } from "@/lib/lib";
import { getUserDataFromDB } from "@/db/db";

export const metadata: Metadata = {
  title: "Profile",
};

async function page() {

  const sessionData = await getSession();
  const userId = sessionData?.user?.id;

  let user : any;
  if (userId) {
    user = await getUserDataFromDB(userId);
  }else{
    redirect("/sign-in?profile");
  }

  return (
    <>
      <Profile userData={user}/>
    </>
  );
}

export default page;
