import React from "react";

const page = () => {
  return (
    <>
      <div className="2xl:mx-60 3xl:mx-[300px] md:mx-[120px] xl:mx-[150px] lg:mx-[100px] py-[100px]">
        <div className="flex gap-7 flex-col xl:flex-row   justify-between resize overflow-x-hidden overflow-y-auto">
          <div className="flex-1 gap-[143px] bg-[#007580] text-[#fff] p-16 flex flex-col">
            <div>
              <p className="text-[32px] 3xl:text-[30px] font-bold leading-[1.2] mb-4">
                About Us - Comforty
              </p>
              <p className="text-[18px] 3xl:text-[16px] leading-[1.6] mb-8 md:mb-12">
                At Comforty, we believe that the right chair can transform your
                space and elevate your comfort. Specializing in ergonomic
                design, premium materials, and modern aesthetics, we craft
                chairs that seamlessly blend style with functionality.
              </p>
            </div>
            <div className="mt-auto">
              <button className="text-[16px] leading-[150%] px-8 py-4 bg-[#F9F9F9]/15 align-bottom">
                View collection
              </button>
            </div>
          </div>
          <img
            src="../asset/Image Block.png"
            alt="Random Unsplash"
            className="xl:max-w-[50%] flex-1 object-cover"
          />
        </div>

        <div className="mb-[132px]">
          <p className="font-semibold leading-[110%] text-[32px] text-[#272343] text-center mb-12 mt-[132px]">
            What makes our Brand Different
          </p>
          <div className="flex gap-[27px] flex-wrap">
            <div className="text-[#007580] flex flex-col gap-3 bg-[#F9F9F9] xl:p-6 flex-1 w-[300px]">
              <div className="">
                <img src="../asset/Vector (8).png" alt="" />
              </div>
              <p className="text-[20px] leading-[140%]">Next day as standard</p>
              <p className="text-[16px] leading-[150%]">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
            <div className="text-[#007580] flex flex-col gap-3 bg-[#F9F9F9] xl:p-6 flex-1">
              <div className="">
                <img src="../asset/Vector (9).png" alt="" />
              </div>
              <p className="text-[20px] leading-[140%]">
                Made by true artisans
              </p>
              <p>
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>
            <div className="text-[#007580] flex flex-col gap-3 bg-[#F9F9F9] xl:p-6 flex-1">
              <div className="">
                <img src="../asset/Vector (10).png" alt="" />
              </div>
              <p className="text-[20px] leading-[140%]">Unbeatable prices</p>
              <p className="text-[16px] leading-[150%]">
                For our materials and quality you won’t find better prices
                anywhere
              </p>
            </div>
            <div className="text-[#007580] flex flex-col gap-3 bg-[#F9F9F9] xl:p-6 flex-1">
              <div className="">
                <img src="../asset/Vector (11).png" alt="" />
              </div>
              <p className="text-[20px] leading-[140%]">Recycled packaging</p>
              <p className="text-[16px] leading-[150%]">
                We use 100% recycled to ensure our footprint is more manageable
              </p>
            </div>
          </div>
        </div>
        <div className="px-5">
          <p className="leading-[110%] font-semibold text-[32px] text-[#272343] mb-[43px]">
            Our Popular Products{" "}
          </p>
          <div className="flex gap-5">
            <div className="flex flex-col gap-5">
              <img src="../asset/Large.png" alt="" />
              <div className="flex flex-col gap-2 text-[#2A254B]">
                <p className="leading-[140%] text-[20px]">
                  The Poplar suede sofa
                </p>
                <p className="leading-[150%] text-[19px]">$99.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <img src="../asset/Photo.png" alt="" />
              <div className="flex flex-col gap-2 text-[#2A254B]">
                <p className="leading-[140%] text-[20px]">The Dandy chair</p>
                <p className="leading-[150%] text-[19px]">$99.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <img src="../asset/Photo (1).png" alt="" />
              <div className="flex flex-col gap-2  text-[#2A254B]">
                <p className="leading-[140%] text-[20px]">The Dandy chair</p>
                <p className="leading-[150%] text-[19px]">$99.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default page;
