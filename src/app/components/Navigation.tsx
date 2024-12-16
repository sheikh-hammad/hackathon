'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoAlertCircleOutline } from "react-icons/io5";
import { X, Menu } from 'lucide-react';


import { MdArrowDropDown } from "react-icons/md";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <div className="bg-[#272343] h-[32px] sm:h-[45px] flex items-center justify-between px-4 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
          <div className="flex items-center gap-1 sm:gap-2">
            <FaCheck className="text-white/70 h-2 w-2 sm:w-4 sm:h-4 " />
            <p className="text-[8px] sm:text-[13px]  text-white leading-[110%] text-white/70">
              Free shipping on all orders over $50
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6 text-white items-center justify-center">
            <div className="flex gap-1 sm:gap-2 items-center cursor-pointer relative">
              <p className="sm:text-[13px] text-[8px] leading-[130%] text-white/70">
                Eng
              </p>
              <MdArrowDropDown className=" text-[#fff]/70 h-3 w-3 sm:w-4 sm:h-4" />
            </div>

            <Link
              className="sm:text-[13px] text-[8px] leading-[130%] text-white/70"
              href="/faq"
            >
              Faqs
            </Link>

            <Link className="flex gap-1 sm:gap-2 items-center" href="/">
              <IoAlertCircleOutline className="h-3 w-3 sm:w-4 sm:h-4 text-white/70" />
              <p className="sm:text-[13px] text-[8px] leading-[130%] text-white/70">
                Need Help
              </p>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center h-[60px] sm:h-[84px] bg-[#c9d7df] px-4 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
          <Link className="flex items-center gap-2" href="/">
            <Image
              alt=""
              src="/asset/logo.png"
              className="sm:w-10 sm:h-10"
              width={30}
              height={30}
            />
            <p className=" font-medium  text-[18px] sm:text-[26px] leading-[120%] text-[#272343]">
              Comforty
            </p>
          </Link>
          <div className="flex">
            <Link
              href="/cart"
              className="flex items-center gap-2 py-[9px] sm:py-[11px] rounded-[8px] px-[12px] sm:px-[16px] bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="sm:w-5 sm:h-5 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <p className="text-[9px] sm:text-[12px] leading-[110%]">Cart</p>
              <p className="flex items-center justify-center h-4 w-4 sm:w-5 sm:h-5 text-[8px] sm:text-[10px] text-white bg-[#007580] rounded-full">
                2
              </p>
            </Link>
          </div>
        </div>
        <nav>
          <div className="px-4 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] h-[42px] md:h-[74px] flex justify-between items-center ">
            <button className="md:hidden" onClick={toggleNav}>
              {isOpen ? <X/> : <Menu />}
            </button>
            <div className="hidden md:inline">
              <ul className="flex gap-5 lg:gap-8 text-[14px] font-inter leading-[110%] ">
                <li className="text-[#007580]">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-[#007580]">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="hover:text-[#007580]">
                  <Link href="/products">Product</Link>
                </li>
                <li className="hover:text-[#007580]">
                  <Link href="/pages">Pages</Link>
                </li>
                <li className="hover:text-[#007580]">
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
            <Link href="/contact" className="flex gap-2">
              <p className="text-[14px] text-[#636270]">Contact:</p>
              <p className="text-[#272343] font-medium text-[14px]">
                (808) 555-0111
              </p>
            </Link>
          </div>
          {isOpen && (

            <div className="md:inline">
              <ul className="flex flex-col items-start p-5 gap-8 text-[14px] leading-[110%] ">
                <li className="text-[#007580]">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-[#007580]">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="hover:text-[#007580]">
                  <Link href="/products">Product</Link>
                </li>
                <li className="hover:text-[#007580]">
                  <Link href="/pages">Pages</Link>
                </li>
                <li className="hover:text-[#007580]">
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
        <hr />
      </header>
    </>
  );
};

export default Navigation;
