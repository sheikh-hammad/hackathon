import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center gap-[150px] pt-[115px] pb-[151px] pl-[70px] rounded-bl-3xl  pr-[110px] mx-4 bg-[#F0F2F3] sm:mx-[25px] md:mx-[120px] 2xl:mx-60 3xl:ml-[300px] 3xl:mr-[299px] xl:mx-[150px] lg:mx-[100px]">
      <div>
        <p className="text-[#272343] text-[14px] [line-height:100%] [letter-spacing:0.168rem] uppercase mb-6">
          Welcome to chairy
        </p>
        <h2 className="text-[#272343] text-[60px] [line-height:110%] font-bold mb-[49px] font-poppins">
          Best Furniture Collection for your interior.
        </h2>
        <div className="flex gap-[20px] items-center bg-[#029FAE]  w-fit py-[17px] pr-[21.5px] pl-[24px] rounded-lg">
          <p className="capitalize font-semibold [line-height:110%] text-[16px] text-white">
            Show now
          </p>
          <Image src="/asset/Line.png" alt="" width={16} height={9} />
        </div>
      </div>
      <div className="flex-shrink-0 w-[400px] xl:w-[400px] 2xl:w-[434px]">
        <Image
          src="/asset/Product Image (1).png"
          alt=""
          width={434}
          height={584}
        />
      </div>
    </div>
  );
};

export default Hero;
