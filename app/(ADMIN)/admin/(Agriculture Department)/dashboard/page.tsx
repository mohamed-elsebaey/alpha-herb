import DataTabel from "@/components/(ADMIN)/DataTabel";
import { getUserDataFromDB } from "@/db/db";
import { getSession } from "@/lib/lib";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const roles = ["CEO", "DEV"];
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;
  let user: any;
  userId ? (user = await getUserDataFromDB(userId)) : redirect("/");
  const userRole = user?.role;

  !roles.includes(userRole) ? redirect("/") : "";
  return (
    <div className="container mt-[120px] mb-[80px] text-primary" dir="rtl">
      <div className="text-center my-16">
        <h1 className="text-2xl md:text-4xl font-bold">
          بيانات الزراعة والمعاملات
        </h1>
      </div>
      <DataTabel role={userRole} />
    </div>
  );
}

export default page;