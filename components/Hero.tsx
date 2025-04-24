import Link from "next/link";
import heroImage from "@/public/hero.png";

const videosNames = ["1", "2", "3"];

const randomVideo = videosNames[Math.floor(Math.random() * 3)];

function Hero() {
  return (
    <div className="relative pb-[110px] pt-[120px] lg:pt-[150px] ">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto flex justify-between gap-4 items-center flex-wrap">
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-start">
          <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl text-primary">
            Discover Organic <br />
            Medicinal Plants.
          </h1>
          <p className="mb-8 max-w-[480px] text-base text-secondary ">
            Enhance your health and well-being with natural solutions from the
            plant world. Explore our vast selection of high-quality medicinal
            and aromatic herbs to craft a healthier, more beautiful you.
          </p>

          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white "
          >
            Get Started
          </Link>
        </div>
        <div className="w-full lg:w-6/12 flex justify-center">
          <div className="relative z-10 inline-block pt-11 lg:pt-0 w-full h-[400px]">
            <video
              src={`https://res.cloudinary.com/dyryptpqq/video/upload/v1/Alphaherb-videos/${randomVideo}`}
              className="shadow-lg rounded-lg rounded-tl-[80px] w-full h-full object-cover"
              poster={heroImage.src}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              // title="Hero Video"
            >
              Your browser does not support the video tag.
            </video>
            <span className="absolute -bottom-8 -left-8 z-[-1] hidden lg:block">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#115934" />
                <circle cx="2.5" cy="24.5" r="2.5" fill="#115934" />
                <circle cx="2.5" cy="46.5" r="2.5" fill="#115934" />
                <circle cx="2.5" cy="68.5" r="2.5" fill="#115934" />
                <circle cx="2.5" cy="90.5" r="2.5" fill="#115934" />
                <circle cx="24.5" cy="2.5" r="2.5" fill="#115934" />
                <circle cx="24.5" cy="24.5" r="2.5" fill="#115934" />
                <circle cx="24.5" cy="46.5" r="2.5" fill="#115934" />
                <circle cx="24.5" cy="68.5" r="2.5" fill="#115934" />
                <circle cx="24.5" cy="90.5" r="2.5" fill="#115934" />
                <circle cx="46.5" cy="2.5" r="2.5" fill="#115934" />
                <circle cx="46.5" cy="24.5" r="2.5" fill="#115934" />
                <circle cx="46.5" cy="46.5" r="2.5" fill="#115934" />
                <circle cx="46.5" cy="68.5" r="2.5" fill="#115934" />
                <circle cx="46.5" cy="90.5" r="2.5" fill="#115934" />
                <circle cx="68.5" cy="2.5" r="2.5" fill="#115934" />
                <circle cx="68.5" cy="24.5" r="2.5" fill="#115934" />
                <circle cx="68.5" cy="46.5" r="2.5" fill="#115934" />
                <circle cx="68.5" cy="68.5" r="2.5" fill="#115934" />
                <circle cx="68.5" cy="90.5" r="2.5" fill="#115934" />
                <circle cx="90.5" cy="2.5" r="2.5" fill="#115934" />
                <circle cx="90.5" cy="24.5" r="2.5" fill="#115934" />
                <circle cx="90.5" cy="46.5" r="2.5" fill="#115934" />
                <circle cx="90.5" cy="68.5" r="2.5" fill="#115934" />
                <circle cx="90.5" cy="90.5" r="2.5" fill="#115934" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
