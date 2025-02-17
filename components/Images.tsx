import Image from "next/image";

function Images() {
  return (
    <div className="relative pb-[80px] pt-[80px]">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto flex justify-between gap-4 items-center flex-wrap">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {/*  */}
          <div className="hidden w-1/2 flex-wrap lg:flex">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={350}
                height={350}
                src="/images/imageGallery/1.jpeg"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                priority={true}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={350}
                height={350}
                src="/images/imageGallery/2.jpeg"
                alt="gallery"
                className="block h-full w-full rounded-lg  object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                width={350}
                height={350}
                src="/images/imageGallery/3.jpg"
                alt="gallery"
                className="block h-full w-full rounded-lg rounded-bl-[100px] object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex w-full lg:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                width={350}
                height={350}
                src="/images/imageGallery/4.jpg"
                alt="gallery"
                className="block h-full w-full rounded-lg rounded-tr-[100px] object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={350}
                height={350}
                src="/images/imageGallery/5.jpg"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={350}
                height={350}
                src="/images/imageGallery/6.jpeg"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="#D2B48C"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Images;
