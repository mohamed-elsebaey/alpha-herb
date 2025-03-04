import React from "react";

import ISO9001 from "@/public/certificates/ISO-9001.png";
import ISO22000 from "@/public/certificates/ISO-22000.png";
import ORGANIC from "@/public/certificates/ORGANIC.png";
import Image from "next/image";

function Certificates() {
  return (
    <div className="py-20">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto w-full">
        <div className="flex flex-wrap items-center">
          <div className="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
            <h2 className="mb-3 text-xs font-bold  tracking-wide text-primary2 xl:text-base">
              Our Certificates
            </h2>
            <h3 className="mb-3 font-bold text-primary text-3xl xl:text-4xl">
              GLOBALLY CERTIFIED
            </h3>
            {/* <div className="flex flex-wrap gap-4 justify-center items-center">
              <p className="bg-primary2 py-2 px-4 rounded-lg">ISO 9001</p>
              <p className="bg-primary2 py-2 px-4 rounded-lg">ISO 22000</p>
              <p className="bg-primary2 py-2 px-4 rounded-lg">NOP</p>
              <p className="bg-primary2 py-2 px-4 rounded-lg">ORGANIC</p>
              <p className="bg-primary2 py-2 px-4 rounded-lg">GLOBAL GAP</p>
            </div> */}
          </div>
          <div className="w-full max-w-full py-6 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0">
            <div className="flex flex-wrap justify-around items-center">
              <div className="w-36">
                <Image
                  src={ORGANIC.src}
                  alt=""
                  className=""
                  width={350}
                  height={350}
                  loading="lazy"
                />
              </div>
              <div className="w-24">
                <Image
                  src={ISO9001.src}
                  alt=""
                  className=""
                  width={350}
                  height={350}
                  loading="lazy"
                />
              </div>
              <div className="w-36">
                <Image
                  src={ISO22000.src}
                  alt=""
                  className=""
                  width={350}
                  height={350}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
