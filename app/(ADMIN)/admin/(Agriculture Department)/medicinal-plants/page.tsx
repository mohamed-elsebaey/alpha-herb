import type { Metadata } from "next";
import { redirect } from "next/navigation";

// import Profile from "@/components/profile/Profile";
import { getSession } from "@/lib/lib";
import { getUserDataFromDB } from "@/db/db";

import MedicinalPlants from "@/components/(ADMIN)/(Agriculture Department)/MedicinalPlants";

export const metadata: Metadata = {
  title: "قسم النباتات الطبية والعطرية",
};

export default async function MedicinalPlantsPage() {
  const session = await getSession();
  
  if (!session?.user?.id) {
    redirect("/");
  }

  const user = await getUserDataFromDB(session.user.id) as User;
  
  if (!user) {
    redirect("/");
  }

  return <MedicinalPlants />;
}
