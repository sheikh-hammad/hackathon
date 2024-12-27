import React from "react";
import { categories } from "../data/types";
import Category from "./Category";

const TopCategories = () => {
  return (
    <section>
    <div className=" px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] pb-[229px] pt-[136px]">
        <p className="text-[32px] leading-110 font-semibold mb-[40px] text-[#272343]">
          Top Categories
        </p>
        <div className="flex justify-between gap-6">
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
