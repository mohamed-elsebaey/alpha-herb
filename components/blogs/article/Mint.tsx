import Image from "next/image";
import React from "react";

function Mint() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">
        Mint: Nature&apos;s Refreshing Remedy for Digestion and More
      </h1>
      <div className="flex justify-center mb-8">
        <Image
          width={1100}
          height={350}
          src="/images/medicinal-plants/mint1.jpg"
          alt="Image of fresh mint"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
      <p className="text-lg text-gray-700 mb-16 text-center">
        Discover the incredible benefits of organic mint. From aiding digestion
        to boosting mood, this versatile herb can enhance your overall
        well-being. Mint, scientifically known as Mentha, is a fragrant herb
        that has been used for centuries in traditional medicine and culinary
        practices worldwide.
      </p>

      <h2 className="text-2xl font-bold mb-4">Health Benefits of Mint</h2>
      <p className="text-lg text-gray-700 mb-8">
        Mint is packed with antioxidants and has potent anti-inflammatory
        properties, making it beneficial for a wide range of health conditions.
        Here are some key benefits:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Improved Digestion</strong>: Mint helps relieve bloating and
          indigestion by stimulating the production of bile.
        </li>
        <li>
          <strong>Pain Relief</strong>: Acting as a natural painkiller, mint can
          alleviate stomach aches and cramps.
        </li>
        <li>
          <strong>Boosted Circulation</strong>: Mint helps improve blood
          circulation, increasing the oxygen supply to organs.
        </li>
        <li>
          <strong>Mood Enhancement</strong>: Mint contains compounds that can
          uplift mood and reduce stress.
        </li>
        <li>
          <strong>Respiratory Health</strong>: Mint can help clear congestion
          and soothe a sore throat, making it beneficial for colds and
          allergies.
        </li>
        <li>
          <strong>Oral Health</strong>: Mint has antibacterial properties that
          can help freshen breath and promote oral hygiene.
        </li>
      </ul>

      <div className="flex justify-center my-16 gap-10 flex-wrap">
        <Image
          width={250}
          height={250}
          src="/images/medicinal-plants/mint-tea.png"
          alt="Image of mint tea"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
        <Image
          width={250}
          height={250}
          src="/images/medicinal-plants/mint2.png"
          alt="Image of mint tea"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
        <Image
          width={250}
          height={250}
          src="/images/medicinal-plants/mint-oil.png"
          alt="Image of mint tea"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
        <Image
          width={250}
          height={250}
          src="/images/medicinal-plants/mint3.png"
          alt="Image of mint tea"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">
        How to Enjoy the Benefits of Mint
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        There are numerous ways to incorporate mint into your daily routine:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Mint Tea</strong>: A warm cup of mint tea is a soothing and
          refreshing way to relax and aid digestion.
        </li>
        <li>
          <strong>Culinary Uses</strong>: Add fresh mint leaves to salads,
          sauces, and main dishes for a burst of flavor.
        </li>
        <li>
          <strong>Essential Oil</strong>: Mint essential oil can be used in
          aromatherapy, massage, or as a natural air freshener.
        </li>
        <li>
          <strong>Homemade Remedies</strong>: Create your own mint-infused
          remedies for headaches, skin irritations, and more.
        </li>
      </ul>

      <div className="flex justify-center my-16 gap-10 flex-wrap">
        <Image
          width={350}
          height={350}
          src="/images/medicinal-plants/mint.jpeg"
          alt="Image of fresh mint leaves"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
        <Image
          width={350}
          height={350}
          src="/images/imageGallery/7.jpg"
          alt="Image of fresh mint leaves"
          className="rounded-lg shadow-lg hidden sm:block"
          loading="lazy"
        />
        <Image
          width={350}
          height={350}
          src="/images/imageGallery/1.jpeg"
          alt="Image of fresh mint leaves"
          className="rounded-lg shadow-lg hidden md:block"
          loading="lazy"
        />
      </div>

      <p className="text-lg text-gray-700 mb-8 text-center">
        **Note:** Consult with a healthcare professional before using mint if
        you are pregnant, breastfeeding, or taking any medications.
      </p>
    </>
  );
}

export default Mint;
