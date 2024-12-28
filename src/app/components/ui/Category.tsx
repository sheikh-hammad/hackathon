import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "../data/types";

const Category = ({image, alt, desc, products}:ProductCard) => {
  return (
    <>
      <div className=" mt-7 mb-5" id="btn_div">
        <div className="relative">
          <Link href={"/"}>
            <Image
              className=" w-[424px]  rounded-[10px]"
              src={image}
              alt={alt}
              width={424}
              height={424}
            />
          <div className="absolute bottom-0 p-5 opacity-70  bg-black flex flex-col gap-2  w-full rounded-b-[10px]">
            <p className="text-white font-semibold  text-[20px]">{desc}</p>
            <p className="text-[14px] font-normal leading-110 text-white opacity-70">{products}</p>
          </div>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Category;
