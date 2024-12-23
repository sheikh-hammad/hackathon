import {Logos} from "../data/types"
import Image from "next/image";
import React from "react";

const SponsersLogos = () => {
  return (
    <div className="flex items-center gap-[106px] justify-between">
      {Logos.map((logo, index) => (
        <div key={index}>
          <Image
            src={logo.img}
            alt=""
            width={logo.width}
            height={logo.height}
          />
        </div>
      ))}
    </div>
  );
};

export default SponsersLogos;
