import React from "react";
import Image from "next/image";
import Link from "next/link";

const sectorsData = [
  {
    id: 1,
    img: "/hero.png",
    name: "قسم النباتات الطبية والعطرية",
    description: "",
    role: ["CEO", "DEV"],
    link: "admin/medicinal-plants",
  },
  {
    id: 2,
    img: "/dashboard.png",
    name: "Alpha Herb Dashboard",
    description: "",
    role: ["CEO", "DEV"],
    link: "admin/dashboard",
  },
];
const Sectors = ({ userRole }: { userRole: string }) => {
  return (
    <>
      <div className="py-10">
        <div className="container text-primary">
          {/* Heading section  */}
          <div className="text-center my-16">
            <h1 className="text-2xl md:text-4xl font-bold">إدارة الزراعة والمعاملات</h1>
          </div>

          {/* sector Card section  */}
          <div className="flex justify-center gap-20 flex-wrap ">
            {sectorsData.map((sector) => (
              <Link
                href={sector.link}
                key={sector.id}
                className={`${sector.role.includes(userRole) ? "" : "hidden"}`}
              >
                <div className="rounded-2xl bg-white hover:bg-primary2/10 hover:scale-105 shadow-xl duration-300 max-w-[500px] overflow-hidden cursor-pointer h-[320px] w-[350px]">
                  {" "}
                  {/* أضفنا h-48 w-48 هنا */}
                  <Image
                    src={sector.img}
                    alt=""
                    width={350}
                    height={350}
                    className="h-64 w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="p-4 text-center">
                    <h1 className="text-2xl font-bold whitespace-nowrap">{sector.name}</h1>
                    <p className="text-lg">{sector.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sectors;
