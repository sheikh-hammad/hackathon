import React from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { productProps } from "../data/types";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

// export const getProductData = async () => {
//   const res = await client.fetch(`*[_type == "product"]`);
//   return res;
// };

// const builder = imageUrlBuilder(client);
// function urlFor(source: string) {
//   return builder.image(source);
// }

// interface IP {
//   name: string;
//   title: string;
//   desc: string;
//   image: string;
//   tag: string;
//   price: string;
//   discountedPrice: string;
// }
export function Product({
  src,
  tag,
  name,
  price,
  discountedPrice,
  tagClass = "",
  cartClass = "",
  priceClass = "",
  nameClass,
}: productProps) {
  return (
    <>
      <div className="flex flex-col  gap-[14px]">
        <div className="relative">
          <Image
            src={src}
            alt=""
            className="object-cover"
            width={500}
            height={500}
          />

          <div className="absolute top-5 left-5">
            <p
              className={` text-[13px] font-medium [line-height:110%]  text-white py-[6px] px-[10px] rounded-[4px] ${tag === "New" ? "bg-[#01AD5A] text-white" : tag === "Sales" ? "bg-[#F5813F] text-white" : ""} `}
            >
              {tag}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[10px]">
            <p className={`leading-130 text-[16px] ${nameClass} hover:text-[#007580]`}>{name}</p>

            <div className="flex items-center gap-1">
              <p className="font-semibold text-[18px] leading-110 text-[#272343]">
                {discountedPrice}
              </p>
              <p
                className={`text-[#9A9CAA]  text-[14px] leading-110 line-through ${priceClass} hover:text-black `}
              >
                {price}
              </p>
            </div>
          </div>
          <div
            className={` self-start px-2 py-2  rounded-lg hover:text-white hover:bg-[#029FAE]`}
          >
            <IoCartOutline size={24} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
