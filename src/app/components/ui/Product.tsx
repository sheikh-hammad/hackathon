import React from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { productProps } from "../data/types";

export const Product = ({
  
  src,
  tag,
  name,
  price,
  discountedPrice,
  tagClass = "",
  cartClass = "",
  priceClass = "",
  nameClass,
}: productProps) => {
  return (
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
            className={` text-[13px] font-medium [line-height:110%]  text-white py-[6px] px-[10px] rounded-[4px] ${tagClass} `}
          >
            {tag}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[10px]">
          <p className={`leading-130 text-[16px] ${nameClass}`}>{name}</p>

          <div className="flex items-center gap-1">
            <p className="font-semibold text-[18px] leading-110 text-[#272343]">
              {discountedPrice}
            </p>
            <p
              className={`text-[#000000] text-[14px] leading-110 line-through ${priceClass}  `}
            >
              {price}
            </p>
          </div>
        </div>
        <div className={` self-start px-2 py-2  rounded-lg ${cartClass}`}>
          <IoCartOutline size={24} />
        </div>
      </div>
    </div>
  );
};

export default Product;
