import Sectors from "@/components/(ADMIN)/sectors/Sectors";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "إدارة الزراعة والمعاملات",
};

function page() {
  return (
    <>
      <Sectors />
    </>
  );
}

export default page;
