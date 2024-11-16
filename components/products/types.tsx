import basil1 from "@/public/images/products-images/BASIL/1.jpg";
import basil2 from "@/public/images/products-images/BASIL/2.jpg";
import basil3 from "@/public/images/products-images/BASIL/3.jpg";
import basil4 from "@/public/images/products-images/BASIL/4.jpg";
import basil5 from "@/public/images/products-images/BASIL/5.jpeg";
import basil6 from "@/public/images/products-images/BASIL/6.jpg";
import basil7 from "@/public/images/products-images/BASIL/7.jpg";

import mint1 from "@/public/images/products-images/Mint/1.jpg";
import mint2 from "@/public/images/products-images/Mint/2.jpg";
import mint3 from "@/public/images/products-images/Mint/3.jpg";
import mint4 from "@/public/images/products-images/Mint/4.jpg";
import mint5 from "@/public/images/products-images/Mint/5.jpeg";
import mint6 from "@/public/images/products-images/Mint/6.jpg";
import mint7 from "@/public/images/products-images/Mint/7.jpg";
import mint8 from "@/public/images/products-images/Mint/8.jpeg";
import mint9 from "@/public/images/products-images/Mint/9.jpeg";
import mint10 from "@/public/images/products-images/Mint/10.jpeg";
import mint11 from "@/public/images/products-images/Mint/11.jpeg";
import mint12 from "@/public/images/products-images/Mint/12.jpeg";
import mint13 from "@/public/images/products-images/Mint/13.jpeg";
import mint14 from "@/public/images/products-images/Mint/14.jpg";

import dill1 from "@/public/images/products-images/DILL/1.jpg";
import dill2 from "@/public/images/products-images/DILL/2.jpg";
import dill3 from "@/public/images/products-images/DILL/3.jpg";
import dill4 from "@/public/images/products-images/DILL/4.jpg";
import dill5 from "@/public/images/products-images/DILL/5.jpg";

import coriander1 from "@/public/images/products-images/CORIANDER/1.jpg";
import coriander2 from "@/public/images/products-images/CORIANDER/2.jpg";

import marjoram1 from "@/public/images/products-images/MARJORAM/1.jpg";

import parsley1 from "@/public/images/products-images/PARSLEY/1.jpg";

import chamomile1 from "@/public/images/products-images/CHAMOMILE/1.jpeg";
import chamomile2 from "@/public/images/products-images/CHAMOMILE/2.jpeg";

import cumin1 from "@/public/images/products-images/CUMIN/1.png";

interface Product {
  id: number;
  name: string;
  category: "dried-leaves" | "flowers" | "seeds";
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "basil",
    category: "dried-leaves",
    imageUrl: basil1.src,
  },
  {
    id: 2,
    name: "basil",
    category: "dried-leaves",
    imageUrl: basil2.src,
  },
  {
    id: 3,
    name: "basil",
    category: "dried-leaves",
    imageUrl: basil3.src,
  },
  {
    id: 4,
    name: "basil",
    category: "dried-leaves",
    imageUrl: basil4.src,
  },
  {
    id: 5,
    name: "basil",
    category: "dried-leaves",
    imageUrl: basil5.src,
  },
  {
    id: 6,
    name: "basil",
    category: "dried-leaves",
    imageUrl: basil6.src,
  },
  {
    id: 7,
    name: "basil",
    category: "dried-leaves",
    imageUrl: basil7.src,
  },
  // -------------------------------------------------
  {
    id: 8,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint1.src,
  },
  {
    id: 9,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint2.src,
  },
  {
    id: 10,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint3.src,
  },
  {
    id: 11,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint4.src,
  },
  {
    id: 12,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint5.src,
  },
  {
    id: 13,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint6.src,
  },
  {
    id: 14,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint7.src,
  },
  {
    id: 15,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint8.src,
  },
  {
    id: 16,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint9.src,
  },
  {
    id: 17,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint10.src,
  },
  {
    id: 18,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint11.src,
  },
  {
    id: 19,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint12.src,
  },
  {
    id: 20,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint13.src,
  },
  {
    id: 21,
    name: "mint",
    category: "dried-leaves",
    imageUrl: mint14.src,
  },
  // -------------------------------------------------
  {
    id: 22,
    name: "dill",
    category: "dried-leaves",
    imageUrl: dill1.src,
  },
  {
    id: 23,
    name: "dill",
    category: "dried-leaves",
    imageUrl: dill2.src,
  },
  {
    id: 24,
    name: "dill",
    category: "dried-leaves",
    imageUrl: dill3.src,
  },
  {
    id: 25,
    name: "dill",
    category: "dried-leaves",
    imageUrl: dill4.src,
  },
  {
    id: 26,
    name: "dill",
    category: "dried-leaves",
    imageUrl: dill5.src,
  },
  // -------------------------------------------------
  {
    id: 27,
    name: "coriander",
    category: "dried-leaves",
    imageUrl: coriander1.src,
  },
  {
    id: 28,
    name: "coriander",
    category: "dried-leaves",
    imageUrl: coriander2.src,
  },

  // -------------------------------------------------
  {
    id: 29,
    name: "marjoram",
    category: "dried-leaves",
    imageUrl: marjoram1.src,
  },
  // -------------------------------------------------
  {
    id: 30,
    name: "parsley",
    category: "dried-leaves",
    imageUrl: parsley1.src,
  },
  // -------------------------------------------------
  {
    id: 31,
    name: "chamomile",
    category: "flowers",
    imageUrl: chamomile1.src,
  },
  {
    id: 32,
    name: "chamomile",
    category: "flowers",
    imageUrl: chamomile2.src,
  },
  {
    id: 33,
    name: "cumin",
    category: "seeds",
    imageUrl: cumin1.src,
  },
];
