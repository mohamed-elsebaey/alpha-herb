import React from "react";
import Image from "next/image";
import Link from "next/link";

const sectorsData = [
  {
    id: 1,
    img: "https://img1.wsimg.com/isteam/stock/14366/:/rs=w:1920,m",
    name: "قسم النباتات الطبية والعطرية",
    description: "",
    role : ['CEO','DEV'],
    link: "admin/medicinal-plants",
  },
];
const Sectors = () => {
  return (
    <>
      <div className="py-10">
        <div className="container text-primary">
          {/* Heading section  */}
          <div className="text-center my-16">
            <h1 className="text-4xl font-bold">إدارة الزراعة والمعاملات</h1>
          </div>

          {/* sector Card section  */}
          <div className="flex justify-center gap-20 flex-wrap">
            {sectorsData.map((sector) => (
              <Link href={sector.link} key={sector.id}>
                <div className="rounded-2xl bg-white hover:bg-primary/10 shadow-xl duration-300 max-w-[500px] overflow-hidden cursor-pointer">
                  <Image
                    src={sector.img}
                    width={350}
                    height={350}
                    alt=""
                    className=""
                    loading="lazy"
                  />
                  <div className="p-4 text-center">
                    <h1 className="text-2xl font-bold  ">{sector.name}</h1>
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
