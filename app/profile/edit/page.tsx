import { Metadata } from "next";
import { redirect } from "next/navigation";

import { getUserDataFromDB } from "@/db/db";
import { getSession } from "@/lib/lib";

import EditProfile from "@/components/profile/EditProfile";

export const metadata: Metadata = {
  title: "Profile Edit",
};


async function page() {
  const sessionData = await getSession();

  if (!sessionData?.user?.id) {
    redirect("/sign-in?path=edit");
  }

  const user = (await getUserDataFromDB(sessionData.user.id)) as User;

  if (!user) {
    throw new Error("User data not found");
  }

  return <EditProfile userData={user}/>;
}

export default page;
