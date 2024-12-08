import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="bg-[#272343] h-[45px] flex items-center justify-between px-[300px]">
          <div className="flex items-center gap-[8px]">
            <div>
              <Image
                src="/asset/Group.png"
                alt="Tick Image"
                width={10.67}
                height={7.33}
              />
            </div>
            <p className="font-inter text-[13px] text-[#ffffff] leading-[110%]">
              Free shipping on all orders over $50
            </p>
          </div>
          <div className="flex gap-6 font-inter text-[#fff]">
            <div className="flex gap-[6px] items-center cursor-pointer">
              <p>Eng</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div>
              <Link href="/faq">Faqs</Link>
            </div>
            <div className="flex gap-[6px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>

              <Link href="/">Need Help</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-[300px] items-center h-[84px] bg-[#F0F2F3] ">
          <div className="flex justify-center items-center gap-2">
            <div className="relative">
              <Image
                src="/asset/Vector (6).png"
                alt=""
                width={40}
                height={23.34}
              />
              <div className="absolute bottom-[15px] left-[6.5px]">
                <Image
                  src="/asset/Vector (5).png"
                  alt=""
                  width={26.67}
                  height={23.33}
                />
              </div>
            </div>

            <p className="font-inter font-medium text-[26px] leading-[120%] text-[#272343]">
              Comforty
            </p>
          </div>
          <div className="flex ">
            <div className="bg-white flex gap-3 items-center height-[44px] rounded-[8px] px-[16px] py-[11px]">
              <Link href="/cart" className="flex items-center gap-[8px]">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
                <p className="text-[12px] font-inter leading-[110%]npm run dev'">
                  Cart
                </p>
              </Link>
              <div className=" flex justify-center items-center h-5 w-5 text-[10px] leading-[100%] text-white rounded-full bg-[#007580]">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="h-[74px] justify-between items-center px-[300px] flex">
          <ul className="flex gap-8 text-[14px] font-inter leading-[110%] ">
            <li className="text-[#007580]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#007580]">
              <Link href="">Shop</Link>
            </li>
            <li className="hover:text-[#007580]">
              <Link href="/products">Product</Link>
            </li>
            <li className="hover:text-[#007580]">
              <Link href="">Pages</Link>
            </li>
            <li className="hover:text-[#007580]">
              <Link href="/about">About</Link>
            </li>
          </ul>
            <Link href="/contact" className="flex gap-2" >
            <p className="text-[14px] leading-[110%] text-[#636270]">
              Contact:
            </p>
            <p className="text-[#272343] text-[14px] leading-[110%] font-medium">
              (808) 555-0111
            </p>
            </Link>
        </div>
      </nav>
      <hr className=" border-[#F0F2F3] border-t-[1px]" />
      {/* main */}
    </>
  );
};

export default Navigation;
