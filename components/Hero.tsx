import Link from "next/link";

const videosNames = [
  "1",
  "2",
  "3",
];

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
          <div className="relative z-10 inline-block pt-11 lg:pt-0 w-full bg-white shadow-lg rounded-lg rounded-tl-[80px] overflow-hidden">
            <video
              src={`https://res.cloudinary.com/dyryptpqq/video/upload/v1/Alphaherb-videos/${randomVideo}`}
              className="w-full aspect-video"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              title="Hero Video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
