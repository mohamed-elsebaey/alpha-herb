import Sectors from "@/components/(ADMIN)/sectors/Sectors";
import { getUserDataFromDB } from "@/db/db";
import { getSession } from "@/lib/lib";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "إدارة الزراعة والمعاملات",
};

async function page() {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;
  
  if (!userId) redirect("/");
  const user = await getUserDataFromDB(userId) as { role: string };
  const userRole = user.role;

  if (userRole === "USER") redirect("/");
  
  return (
    <>
      <Sectors userRole={userRole} />
    </>
  );
}

export default page;
