import { Cairo } from "next/font/google";

import { getUserDataFromDB } from "@/db/db";
import { getSession } from "@/lib/lib";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "ADMIN",
    template: "%s | ADMIN ",
  },
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;
  
  const user: any = !userId ? null : await getUserDataFromDB(userId);
  
  if (!userId) {
    redirect("/");
  }
  const userRole = user?.role;

  if (userRole === "USER") {
    redirect("/");
  }

  return <div className={cairo.className}>{children}</div>;
}
