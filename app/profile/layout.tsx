import { getSession } from "@/lib/lib";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: {
    absolute: "Account Settings",
    template: "%s | Account Settings ",
  },
  description: "alpha herb ...... ",
  
  robots: {
    index: false,
    nocache: true,
  },
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (! await getSession()) {
    redirect("/");
  }
  return <>{children}</>;
}
