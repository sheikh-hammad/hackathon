import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

import { RiDeleteBin6Line } from "react-icons/ri";

const page = () => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-row flex-col justify-between px-16 sm:px-[50px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]  gap-4 lg:gap-[132px] py-20">
        {/* Left Section: Bag */}
        <div className="flex-1">
          <h2 className="text-[18px] sm:text-[22px] font-medium leading-[33px] text-[#111]">
            Bag
          </h2>
          <div className="flex flex-row sm:flex-col flex-wrap gap-5 sm:gap-0 justify-center xs:justify-between ">
          <div className="flex flex-col sm:flex-row gap-[30px]  pt-6 pb-[37px]">
            {/* Product Image */}
            <div className="flex-shrink-0">
              <Image
                alt="Product Image"
                src="/asset/Frame.png"
                width={150}
                height={150}
                className="h-[300px] w-[300px] xs:h-[150px] xs:w-[150px]"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <p className="text-[#272343] text-[16px] xs:text-[14px] sm:text-[16px] leading-130 mb-4 sm:mb-[28px]">
                Library Stool Chair
              </p>
              <p className="text-[#757575] text-[15px] xs:text-[13px]  sm:text-[15px] leading-[28px]">
                Ashen Slate/Cobalt Bliss
              </p>
              <div className="flex gap-8 mb-4 sm:mb-6">
                <div className="flex text-[#757575] items-center gap-2">
                  <p className="sm:text-[15px] xs:text-[13px] text-[15px] leading-[28px]">Size</p>
                  <p className="text-[14px] sx:text-[12px] sm:text-[14px] leading-none">L</p>
                </div>
                <div className="flex text-[#757575] items-center gap-2">
                  <p className="sm:text-[15px] xs:text-[13px] text-[15px] leading-[28px]">Quantity</p>
                  <p className="text-[14px] xs:text-[12px] sm:text-[14px] leading-none">1</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6">
                  <CiHeart className="size-6" />
                </div>
                <div className="w-6 h-6">
                  <RiDeleteBin6Line className="size-6" />
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex-shrink-0 flex items-start justify-start sm:justify-end">
              <p className="text-[#111] text-[17px] sm:text-[15px] leading-[28px]">MRP: $99</p>
            </div>
          </div>
          <hr className="mb-2" />
          <div className="flex flex-col sm:flex-row gap-[30px]  pt-6 pb-[37px]">
            {/* Product Image */}
            <div className="flex-shrink-0">
              <Image
                alt="Product Image"
                src="/asset/Frame.png"
                width={150}
                height={150}
                className="h-[300px] w-[300px] xs:h-[150px] xs:w-[150px]"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <p className="text-[#272343] text-[16px] xs:text-[14px] sm:text-[16px] leading-130 mb-4 sm:mb-[28px]">
                Library Stool Chair
              </p>
              <p className="text-[#757575] text-[15px] xs:text-[13px]  sm:text-[15px] leading-[28px]">
                Ashen Slate/Cobalt Bliss
              </p>
              <div className="flex gap-8 mb-4 sm:mb-6">
                <div className="flex text-[#757575] items-center gap-2">
                  <p className="sm:text-[15px] xs:text-[13px] text-[15px] leading-[28px]">Size</p>
                  <p className="text-[14px] sx:text-[12px] sm:text-[14px] leading-none">L</p>
                </div>
                <div className="flex text-[#757575] items-center gap-2">
                  <p className="sm:text-[15px] xs:text-[13px] text-[15px] leading-[28px]">Quantity</p>
                  <p className="text-[14px] xs:text-[12px] sm:text-[14px] leading-none">1</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6">
                  <CiHeart className="size-6" />
                </div>
                <div className="w-6 h-6">
                  <RiDeleteBin6Line className="size-6" />
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex-shrink-0 flex items-start justify-start sm:justify-end">
              <p className="text-[#111] text-[17px] sm:text-[15px] leading-[28px]">MRP: $99</p>
            </div>
          </div>
          <hr className="mb-2" />
          </div>
         
        </div>

        {/* Right Section: Summary */}
        <div className="flex-shrink-0 lg:w-[30%]">
          <h2 className="sm:text-[22px] text-[18px] font-medium leading-[33px] text-[#111] mb-6">
            Summary
          </h2>
          <div className="flex justify-between mb-2">
            <p className="sm:text-[15px] text-[13px] leading-[28px] text-[#111]">Subtotal</p>
            <p className="font-medium text-[12px] sm:text-[14px] leading-[24px] text-[#111]">
              $198.00
            </p>
          </div>
          <div className="flex justify-between mb-5 ">
            <p className="sm:ext-[15px] text-[13px] leading-[28px] text-[#111]">
              Estimated Delivery & Handling
            </p>
            <p className="sm:ext-[15px] text-[13px] leading-[28px] text-[#111]">Free</p>
          </div>
          <hr />
          <div className="flex justify-between py-[17px] ">
            <p className="sm:ext-[15px] text-[13px] leading-[28px] text-[#111]">Total</p>
            <p className="font-medium sm:ext-[14px] text-[12px] leading-[24px] text-[#111]">
              $198.00
            </p>
          </div>
          <hr className="mb-8" />
          <button className="w-full font-medium text-[15px] leading-6 text-white bg-[#029FAE] py-[18px] rounded-[30px]">
            Member Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
