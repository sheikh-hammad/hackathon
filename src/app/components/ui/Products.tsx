import React from "react";
import Product from "./Product";
import { product } from "../data/types"; // Import the product data

const Products = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-[84px]">
      <Product
        src="/asset/Image.png"
        tag="New"
        name="Library School Chair"
        price="$39"
        discountedPrice="$20"
        tagClass="bg-[#01AD5A]"
        cartClass="bg-[#029FAE] text-white"
        nameClass="text-[#007580]"
      />
      <Product
        src="/asset/Image (7).png"
        tag="Sales"
        name="Library School Chair"
        price="$39"
        discountedPrice="$20"
        tagClass="bg-[#F5813F]"
        cartClass="bg-[#F0F2F3]"
        priceClass="text-[#9A9CAA]"
      />
      <Product
        src="/asset/Image (8).png"
        name="Library School Chair"
        discountedPrice="$20"
        cartClass="bg-[#F0F2F3]"
      />
      <Product
        src="/asset/Image (9).png"
        name="Library School Chair"
        discountedPrice="$20"
        cartClass="bg-[#F0F2F3]"
        nameClass="text-[#272343]"
      />
      <Product
        src="/asset/Image (10).png"
        tag="New"
        name="Library School Chair"
        discountedPrice="$20"
        cartClass="bg-[#029FAE] text-white"
        tagClass="bg-[#01AD5A]"
        nameClass="text-[#272343]"
      />

      <Product
        src="/asset/Image (11).png"
        tag="Sales"
        name="Library School Chair"
        price="$39"
        discountedPrice="$20"
        tagClass="bg-[#F5813F]"
        cartClass="bg-[#F0F2F3]"
        priceClass="text-[#9A9CAA]"
      />
      <Product
        src="/asset/Image (12).png"
        name="Library School Chair"
        discountedPrice="$20"
        cartClass="bg-[#F0F2F3]"
      />
      <Product
        src="/asset/Image (13).png"
        name="Library School Chair"
        discountedPrice="$20"
        cartClass="bg-[#F0F2F3]"
        nameClass="text-[#272343]"
      />
      <Product
        src="/asset/Image (14).png"
        tag="New"
        name="Library School Chair"
        discountedPrice="$20"
        tagClass="bg-[#01AD5A]"
        cartClass="bg-[#029FAE] text-white"
        nameClass="text-[#007580]"
      />
      <Product
        src="/asset/Image (15).png"
        tag="Sales"
        name="Library School Chair"
        price="$39"
        discountedPrice="$20"
        tagClass="bg-[#F5813F]"
        cartClass="bg-[#F0F2F3]"
        priceClass="text-[#9A9CAA]"
      />
      <Product
        src="/asset/Image (16).png"
        name="Library School Chair"
        discountedPrice="$20"
        cartClass="bg-[#F0F2F3]"
      />
      <Product
        src="/asset/Image (17).png"
        name="Library School Chair"
        discountedPrice="$20"
        cartClass="bg-[#F0F2F3]"
        nameClass="text-[#272343]"
      />
    </div>
  );
};

export default Products;
