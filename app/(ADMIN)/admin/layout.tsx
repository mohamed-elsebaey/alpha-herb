import { getSession } from "@/lib/lib";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

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
  if (!(await getSession())) {
    redirect("/");
  }
  return <>{children}</>;
}
