import React from "react";
import { Product } from "./Product";
import { Prods } from "../data/types";
import Link from "next/link";

const OurProducts = () => {
  return (
    <>
      <section>
        <div className="px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:pr-[293] 3xl:pl-[307] xl:px-[150px] lg:px-[100px] pt-[173px] pb-[136px]">
          <p className="text-[#272343] text-[32px] font-semibold leading-[1.1] text-center mt-[16px] mb-[74px]">
            Our Products
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-[84px]">
            {Prods.slice(0, 8).map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Product {...product} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProducts;
