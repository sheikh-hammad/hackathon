import { Logos } from "../data/types";
import Image from "next/image";
import React from "react";

const SponsersLogos = () => {
  return (
    <div className=" px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] pt-[53px]">
      <div className="flex items-center gap-[106px] justify-between">
        {Logos.map((logo, index) => (
          <div key={index} className="">
            <Image
              src={logo.img}
              alt=""
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsersLogos;
