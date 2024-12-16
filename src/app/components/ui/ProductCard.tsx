import React from "react";
import Image from "next/image";
interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  originalPrice,
}) => {
  return (
    <div className="border rounded-md p-4 shadow-sm hover:shadow-md transition">
    {/* Image */}
    <div className="mb-4">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded"
      />
    </div>

    {/* Product Info */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-xl font-bold text-green-600">${price}</p>
        {originalPrice > price && (
          <p className="text-sm line-through text-gray-500">${originalPrice}</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
