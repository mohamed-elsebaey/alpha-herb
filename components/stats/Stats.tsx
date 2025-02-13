'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Stats() {
  const [numbers, setNumbers] = useState({
    yearsInBusiness: 1,
    satisfactionRate: 1,
    teamMembers: 1,
  });

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (isAnimating) {
      const intervalId = setInterval(() => {
        setNumbers((prevNumbers) => ({
          yearsInBusiness:
            prevNumbers.yearsInBusiness < 6
              ? prevNumbers.yearsInBusiness + 1
              : 6,
          satisfactionRate:
            prevNumbers.satisfactionRate < 92
              ? prevNumbers.satisfactionRate + 1
              : 92,
          teamMembers:
            prevNumbers.teamMembers < 39
              ? prevNumbers.teamMembers + 1
              : 39,
        }));
      }, 60); // Adjust the interval as needed for desired animation speed

      return () => clearInterval(intervalId);
    }
  }, [isAnimating]);

  return (
    // Stats Section Start
    <section className="relative z-10 overflow-hidden bg-primary py-24">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[325px] text-center lg:mb-0">
              <h3 className="mb-4 text-4xl font-bold leading-[1.2] text-white lg:text-5xl">
                {numbers.yearsInBusiness}+
              </h3>
              <p className="text-base text-white sm:text-lg">
                Years in business
              </p>
              <p className="text-base mt-0.5 text-white sm:text-lg">
                Creating the successful path
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[325px] text-center lg:mb-0">
              <h3 className="mb-4 text-4xl font-bold leading-[1.2] text-white lg:text-5xl">
                {numbers.satisfactionRate}%
              </h3>
              <p className="text-base text-white sm:text-lg">
                Satisfaction rate comes from our awesome customers.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto max-w-[325px] text-center">
              <h3 className="mb-4 text-4xl font-bold leading-[1.2] text-white lg:text-5xl">
                {numbers.teamMembers}+
              </h3>
              <p className="text-base text-white sm:text-lg">Team members.</p>
              <p className="text-base text-white sm:text-lg">
                Working for your success
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2">
        <Image
          width={350}
          height={350}
          src="/images/stats/background-shape.svg"
          alt="graphic"
          className="h-full w-full"
          loading="lazy"
        />
      </div>
    </section>
    // Stats Section End
  );
}

export default Stats;