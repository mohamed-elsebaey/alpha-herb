import type { Metadata } from "next";
import { redirect } from "next/navigation";

import Profile from "@/components/profile/Profile";
import { getSession } from "@/lib/lib";
import { getUserDataFromDB } from "@/db/db";

import MedicinalPlants from "@/components/(ADMIN)/(Agriculture Department)/MedicinalPlants";

export const metadata: Metadata = {
  title: "قسم النباتات الطبية والعطرية",
};

async function page() {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;

  let user: any;
  if (userId) {
    user = await getUserDataFromDB(userId);
  } else {
    redirect("/");
  }

  return (
    <>
      <MedicinalPlants/>
    </>
  );
}

export default page;
