import Product from "../ui/Product";
import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="mt-6 mb-[136px]">
      <p className="text-[32px] leading-110 font-semibold mb-[40px] text-[#272343]">
        Featured Products
      </p>
      <div className="flex gap-6">
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
