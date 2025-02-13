import React from "react";

function MissionAndVision() {
  return (
    <>
      <div className="relative mx-auto my-10 max-w-screen-xl rounded-3xl bg-primary/70 p-4 sm:p-16">
        <div className="from-primary/10 abg-gradient-to-br absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white to-primary/60 opacity-10"></div>
        <div className="from-primary/10 abg-gradient-to-br absolute -top-10 right-20 h-24 w-24 rounded-full bg-white to-primary/60 opacity-10"></div>

        <div className="relative rounded-xl bg-primary/60 px-8 py-10 text-white">
          <h2 className="text-3xl font-bold sm:text-5xl font-mono">MISSION</h2>
          <p className="mt-3 text-xl sm:mt-8 sm:text-2xl">
            Serving the environment and people in the field of meeting
            agricultural needs for food and medicine by providing the best
            practices and the highest quality of safe and sustainable
            agricultural product.
          </p>
        </div>
      </div>
      <div className="relative mx-auto my-10 max-w-screen-xl rounded-3xl bg-primary/70 p-4 sm:p-16">
        <div className="from-primary/10 abg-gradient-to-br absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white to-primary/60 opacity-10"></div>
        <div className="from-primary/10 abg-gradient-to-br absolute -top-10 right-20 h-24 w-24 rounded-full bg-white to-primary/60 opacity-10"></div>

        <div className="relative rounded-xl bg-primary/60 px-8 py-10 text-white">
          <h2 className="text-3xl font-bold sm:text-5xl font-mono">VISION</h2>
          <p className="mt-3 text-xl sm:mt-8 sm:text-2xl">
            To be globally the ideal choice for everyone working in the field of
            importing and manufacturing medicinal and aromatic plants, dates and
            organic crops.
          </p>
        </div>
      </div>
    </>
  );
}

export default MissionAndVision;
