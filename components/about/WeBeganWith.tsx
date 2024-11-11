import React from "react";

function WeBeganWith() {
  return (
    <>
      {/* <!-- ====== Services Section Start --> */}
      <div className="container mx-auto mt-10 pb-5 border-y-2">
        <h2 className="my-8 text-3xl font-bold text-primary/90 sm:text-4xl">
          We began with:
        </h2>
        <div className="-mx-4 flex flex-wrap">
          <WeBeganList
            number={1}
            label="Cultivation, Production, Cleaning, Processing, Sterilization, Packing and Exporting medicinal and aromatic plants."
          />
          <WeBeganList
            number={2}
            label="We are Specialized in Production of organic pure dried leaves & some flowers."
          />
          <WeBeganList
            number={3}
            label="Our purity rates of finished products reach over 99.98 %."
          />
          <WeBeganList
            number={4}
            label="We have our own dehydration and drying facilities, both by natural and mechanical means."
          />
          <WeBeganList
            number={5}
            label="Our highly qualified agricultural engineers assure top quality of the raw materials before being fed into the production lines."
          />
          <WeBeganList
            number={6}
            label="We are always working to achieve quality, efficiency and fulfillment of commitment worldwide."
          />
        </div>
      </div>
    </>
  );
}

export default WeBeganWith;

const WeBeganList = ({ number, label }: { number: number; label: any }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="min-h-64 mb-9 rounded-[20px] bg-white p-10 shadow-lg hover:shadow-xl md:px-7 xl:px-10 -2">
        <div className="mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-primary/85 text-white text-3xl font-semibold">
          {number}
        </div>
        <p className="text-secondary">{label}</p>
      </div>
    </div>
  );
};
