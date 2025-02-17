import { products } from "./types";
import Image from "next/image";

function Products({ selectedCategory }: { selectedCategory: string }) {
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") {
      return true;
    }
    return product.category === selectedCategory;
  });
  return (
    <div className="container">
      <div className="mx-auto w-[80%] grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ImageCard
            key={product.id}
            src={product.imageUrl}
            name={product.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;

const ImageCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <div>
      <Image
        width={350}
        height={350}
        className="h-auto max-w-full rounded-lg"
        src={src}
        alt={name}
        loading="lazy"
        title={name}
        priority={false}
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
