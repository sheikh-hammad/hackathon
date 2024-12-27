import React from "react";
import Product from "./Product";
import { Prods } from "../data/types";
import Link from "next/link";

const Products = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-[84px]">
    {Prods.map((product, index) => (
      <Link key={index} href={`/products/${product.id}`} passHref>
          <Product {...product} />
      </Link>
    ))}
  </div>
  );
};

export default Products;
