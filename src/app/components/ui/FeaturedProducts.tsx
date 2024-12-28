import Product from "../ui/Product";
import React from "react";
import { Prods } from "../data/types";
import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <section>
      <div className=" px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] pt-6">
        <p className="text-[32px] leading-110 font-semibold mb-[40px] text-[#272343]">
          Featured Products
        </p>
        <div className="flex gap-6">
          {Prods.slice(0, 4).map((product, index) => (
            <Link key={index} href={`/products/${product.id}`}>
              <Product {...product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
