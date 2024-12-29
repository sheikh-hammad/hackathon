import Product from "../ui/Product";
import React from "react";
import { Prods } from "../data/types";
import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <section>
      <div className=" px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] pt-6">
        <p className="text-[28px] text-center xs:text-left xs:text-[32px] leading-110 font-semibold mb-[40px] text-[#272343]">
          Featured Products
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-6 justify-center xl:justify-between">
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
