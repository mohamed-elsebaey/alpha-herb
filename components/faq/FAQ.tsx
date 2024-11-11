import FaqCard from "./FaqCard";

function FAQ() {
  return (
    // FAQ Section Start
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] ">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold  sm:text-[40px]/[48px] text-nowrap">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color ">
                {/* There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form. */}
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <FaqCard
              question="What are the steps in producing medicinal plants?"
              answer="Medicinal plants go through cultivation, production, cleaning, processing, sterilization, packaging, and export."
            />
            <FaqCard
              question="What is the company's primary goal?"
              answer="The company aims to provide high-quality, safe, and sustainable agricultural products to meet global food and medicine needs."
            />
            <FaqCard
              question=" How does the company contribute to the environment?"
              answer="The company focuses on sustainable agricultural practices to protect the environment."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <FaqCard
              question="How does the company ensure product quality?"
              answer="The company uses high-quality raw materials, natural and mechanical drying, strict purity standards, and meets international standards."
            />
            <FaqCard
              question="What is the company's long-term goal?"
              answer="The company aims to become the world's leading provider of medicinal plants, dates, and organic crops."
            />
            <FaqCard
              question=" What kind of products does the company produce?"
              answer="The company produces agricultural products for both food and medicine."
            />
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
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
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
    </section>
  );
}

export default FAQ;
