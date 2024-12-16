import React from "react";
import Image from "next/image";
import ProductCard from "../components/ui/ProductCard";

const page = () => {
  return (
    <>
      <div className="py-[100px] bg-[#1E2832]/5 flex flex-col px-4 sm:px-[25px] md:px-[120px]  gap-[70px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
        <div className="flex flex-col items-center">
          <h2 className="text-[33px] md:text-[40px] 2xl:text-[42px]  3xl:text-[50px]  font-roboto text-center font-medium mb-[54px]  md:mb-[74px]">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex w-full mx-auto items-center justify-center gap-[26px]">
            <div className="md:w-[643px] sm:w-[350px] w-[200px]">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full mb-[13px] px-[15px] font-roboto font-semibold text-[16px]  text-[#1E2832]/50 focus:outline-none focus:ring-0 bg-transparent"
              />
              <hr className="bg-[#1E2832] h-[2px] border-none" />
            </div>
            <div className="w-[91px]">
              <button className="mb-[10px] px-4 font-openSans text-[16px] text-[#1E2832] focus:outline-none">
                SUBMIT
              </button>
              <hr className="bg-[#1E2832] h-[2px] border-none" />
            </div>
          </div>
        </div>
        <div>
          <p className="font-roboto  font-medium leading-[auto] text-center mb-[60px] text-[33px] sm:text-[40px] 2xl:text-[42px]  3xl:text-[50px] ">
            Follow products and discounts on Instagram
          </p>
          <div className="flex gap-6 2xl:justify-between justify-center flex-wrap">
            <div className="rounded-md">
              <Image
                src="/asset/Image (1).png"
                alt=""
                width={185}
                height={185}
                className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
                // className="xl:w-[165px] 2xl:w-[175px] 2xl:h-[175px] xl:h-[165px] h-[145px] w-[145px]"
              />
            </div>
            <div className=" rounded-md">
              <Image
                src="/asset/Image (2).png"
                alt=""
                width={185}
                className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
                height={185}
                // className="xl:w-[165px] 2xl:w-[175px] 2xl:h-[175px] xl:h-[165px] h-[145px] w-[145px]"
              />
            </div>
            <div className="rounded-md">
              <Image
                src="/asset/Image (3).png"
                alt=""
                width={185}
                className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
                height={185}
                // className="xl:w-[165px] 2xl:w-[175px] 2xl:h-[175px] xl:h-[165px] h-[145px] w-[145px]"
              />
            </div>{" "}
            <div className="rounded-md">
              <Image
                src="/asset/Image (4).png"
                alt=""
                width={185}
                className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
                height={185}
                // className="xl:w-[165px] 2xl:w-[175px] 2xl:h-[175px] xl:h-[165px] h-[145px] w-[145px]"
              />
            </div>{" "}
            <div className=" rounded-md">
              <Image
                src="/asset/Image (5).png"
                alt=""
                width={185}
                className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
                height={185}
                // className="xl:w-[165px] 2xl:w-[175px] 2xl:h-[175px] xl:h-[165px] h-[145px] w-[145px]"
              />
            </div>
            <div className="rounded-md">
              <Image
                src="/asset/card.png"
                alt=""
                width={185}
                className="xs:h-[155px] xs:w-[155px] h-[300px] w-[300px] 2xl:w-[185px] 2xl:h-[185px]"
                height={185}
                // className="xl:w-[165px] 2xl:w-[175px] 2xl:h-[175px] xl:h-[165px] h-[145px] w-[145px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 xl:px-[150px] gap-x-[26px] bg-[#1E2832]/5">
        <div className="col-span-2">
          <p className="font-roboto text-[50px] leading-[auto] text-center capitalize">
            Or subscribe to the newsletter
          </p>
        </div>
        <div className="flex ">
          <div className="col-span-1 font-semibold font-roboto text-[16px] leading-[auto] xl:w-[643px] focus:outline-none">
            <div>
              <input
                className="focus:outline-none px-[15px] bg-transparent w-full max-w-[643px]"
                type="email"
                name=""
                placeholder="Email Address..."
                id=""
              />
              <div className="border-solid border-b-2 border-black mt-[13px]"></div>
            </div>
          </div>
          <div className="col-span-1"></div>

          <button className="font-openSans text-[16px] leading-[auto] text-[#1E2832] px-4 w-9">
            Submit
          </button>
          <div className="border-solid border-b-2 border-black mt-[13px] w-[91px]"></div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-x-6 gap-y-[60px] py-[100px]  2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] bg-[#1E2832]/5">
        <div className="col-span-6">
          <p className="font-roboto text-[50px] font-medium leading-[auto] text-center">
            Follow products and discounts on Instagram
          </p>
        </div>
        <div className="col-span-1 rounded-md">
          <Image src="/asset/Image (1).png" alt="" width={145} height={145} />
        </div>
        <div className="col-span-1 rounded-md">
          <Image src="/asset/Image (2).png" alt="" width={145} height={145} />
        </div>
        <div className="col-span-1 rounded-md">
          <Image src="/asset/Image (3).png" alt="" width={145} height={145} />
        </div>{" "}
        <div className="col-span-1 rounded-md">
          <Image src="/asset/Image (4).png" alt="" width={145} height={145} />
        </div>{" "}
        <div className="col-span-1 rounded-md">
          <Image src="/asset/Image (5).png" alt="" width={145} height={145} />
        </div>{" "}
        <div className="col-span-1 rounded-md">
          <Image src="/asset/card.png" alt="" width={145} height={145} />
        </div>
      </div> */}
    </>
  );
};

export default page;
