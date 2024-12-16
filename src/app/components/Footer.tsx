import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="h-[418px] px-4 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
    //   <div className="h-[343px] 2xl:px-60 xl:px-[150px] lg:px-[100px] 3xl:px-[300px] flex gap-24 items-start">
    //     {/* <div className="flex items-start justify-between"> */}
    //     <div className="flex-2 flex flex-col gap-6">
    //       <div className="flex items-center gap-2">
    //         <div>
    //           <Image
    //             alt=""
    //             src="/asset/logo.png"
    //             className="sm:w-10 sm:h-10"
    //             width={30}
    //             height={30}
    //           />
    //         </div>
    //         <p className="font-inter font-semibold text-[26px] leading-[120%] text-[#272343]">
    //           Comforty
    //         </p>
    //       </div>
    //       <p className="text-[16px] leading-6 text-[#272343]">
    //         Vivamus tristique odio sit amet velit semper, eu posuere turpis
    //         interdum. Cras egestas purus{" "}
    //       </p>
    //       <div className="flex gap-1">
    //         {/* <div>
    //           <div className="w-4 h-4 hover:text-[#007580] relative">
    //             <FaFacebook />
    //             <div className="w-[38px] h-[38px] border-[#007588] rounded-full hover:border-[#007580] border-[1px]"></div>
    //           </div>
    //         </div> */}
    //         <Link href="/" className="group hover:text-[#007580] inline-block">
    //           <div className="w-[38px] h-[38px] flex justify-center items-center border-transparent rounded-full group-hover:border-[#007580] border-[1px]">
    //             <div className="w-4 h-4 text-[#636270] group-hover:text-[#007580]">
    //               <FaFacebook />
    //             </div>
    //           </div>
    //         </Link>
    //         <Link href="/" className="group hover:text-[#007580] inline-block">
    //           <div className="w-[38px] h-[38px] flex justify-center items-center border-transparent rounded-full group-hover:border-[#007580] border-[1px]">
    //             <div className="w-4 h-4 text-[#636270] group-hover:text-[#007580]">
    //               <FaTwitter />
    //             </div>
    //           </div>
    //         </Link>
    //         <Link href="/" className="group hover:text-[#007580] inline-block">
    //           <div className="w-[38px] h-[38px] flex justify-center items-center border-transparent rounded-full group-hover:border-[#007580] border-[1px]">
    //             <div className="w-4 h-4 text-[#636270] group-hover:text-[#007580]">
    //               <FaInstagram />
    //             </div>
    //           </div>
    //         </Link>
    //         <Link href="/" className="group hover:text-[#007580] inline-block">
    //           <div className="w-[38px] h-[38px] flex justify-center items-center border-transparent rounded-full group-hover:border-[#007580] border-[1px]">
    //             <div className="w-4 h-4 text-[#636270] group-hover:text-[#007580]">
    //               <FaPinterest />
    //             </div>
    //           </div>
    //         </Link>{" "}
    //         <Link href="/" className="group hover:text-[#007580] inline-block">
    //           <div className="w-[38px] h-[38px] flex justify-center items-center border-transparent rounded-full group-hover:border-[#007580] border-[1px]">
    //             <div className="w-4 h-4 text-[#636270] group-hover:text-[#007580]">
    //               <FaYoutube />
    //             </div>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="flex-1 flex flex-col gap-5">
    //       <p className="font-medium text-[14px] font-inter leading-[110%] tracking-[1.4px] text-[#9A9CAA] uppercase">
    //         Category
    //       </p>
    //       <ul className="text-[#272343] flex flex-col gap-3 font-inter capitalize">
    //         {[
    //           { name: "Sofa", link: "/" },
    //           { name: "Armchair", link: "/" },
    //           { name: "Wing Chair", link: "/" },
    //           { name: "Desk Chair", link: "/" },
    //           { name: "wooden Chair", link: "/" },
    //           { name: "Park Bench", link: "/" },
    //         ].map((item, index) => (
    //           <li key={index} className="text-[16px] leading-[110%]">
    //             <Link
    //               href={item.link}
    //               className="hover:underline hover:text-[#007580]"
    //             >
    //               {item.name}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    // <div className="flex-2 flex flex-col gap-5">
    //   <p className="font-medium text-[14px] font-inter leading-[110%] tracking-[1.4px] text-[#9A9CAA] uppercase">
    //     support
    //   </p>
    //   <ul className="font-inter flex flex-col gap-3 text-[#272343]">
    //     {[
    //       { name: "Help & Support", link: "/" },
    //       { name: "Tearms & Condition", link: "/" },
    //       { name: "Privacy Policy", link: "/" },
    //       { name: "Help", link: "/" },
    //     ].map((item, index) => (
    //       <li key={index} className="text-[16px] leading-[110%]">
    //         <Link
    //           href={item.link}
    //           className="hover:underline hover:text-[#007580]"
    //         >
    //           {item.name}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    // <div className="flex flex-col gap-[15px]">
    //   <p className="font-medium text-[14px] font-inter mb-[5px] leading-[110%] tracking-[1.4px] text-[#9A9CAA] uppercase">
    //     newsletter
    //   </p>
    //   <div className="flex gap-3">
    //     <input
    //       placeholder="Your email"
    //       type="search"
    //       name=""
    //       id=""
    //       className="h-[46px] w-[285px] py-[15px] pl-5 rounded-lg border-[#E1E3E5] border-[1px] text-[16px] leading-[100%]"
    //     />
    //     <button className="flex-shrink-0 text-[16px] font-semibold h-[46px] w-[127px] px-[auto] py-[auto] rounded-lg text-white  bg-[#029FAE]">
    //       Subscribe
    //     </button>
    //   </div>
    //   <p className="text-[15px] leading-[150%] text-[#272343]">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    //     tincidunt erat enim.
    //   </p>
    // </div>
    //   </div>
    //   {/* </div> */}
    //   <hr className=" border-[#F0F2F3] border-t-[1px]" />
    // </footer>
    <footer className="">
      <hr />
      <div className=" px-8 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] flex sm:flex-row flex-col flex-wrap justify-between 2xl:gap-12 gap-8 lg:gap-8 xl:gap-10 3xl:gap-8 py-8 sm:pt-20 sm:pb-[65px]">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col gap-6 max-w-xs flex-1">
          <div className="flex items-center gap-2">
            <Image
              alt="logo"
              src="/asset/logo.png"
              className="w-10 h-10"
              width={40}
              height={40}
            />
            <p className="font-semibold text-[23px] lg:text-[26px] leading-[120%] text-[#272343]">
              Comforty
            </p>
          </div>
          <p className="text-[13px] lg:text-[16px] leading-6 text-[#272343]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <FaFacebook />, link: "/" },
              { icon: <FaTwitter />, link: "/" },
              { icon: <FaInstagram />, link: "/" },
              { icon: <FaPinterest />, link: "/" },
              { icon: <FaYoutube />, link: "/" },
            ].map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:border-[#007580] hover:text-[#007580] transition"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2: Category */}
        <div className="flex flex-col gap-5 min-w-[150px] flex-1 md:flex-none">
          <p className="font-medium text-[11px] lg:text-[14px] uppercase tracking-wider text-[#9A9CAA]">
            Category
          </p>
          <ul className="flex flex-col gap-3 text-[#272343]">
            {[
              "Sofa",
              "Armchair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="/"
                  className="text-[13px] lg:text-[16px] hover:underline hover:text-[#007580] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className="flex flex-col gap-5 min-w-[150px] flex-1 md:flex-none">
          <p className="font-medium text-[11px] lg:text-[14px] uppercase tracking-wider text-[#9A9CAA]">
            Support
          </p>
          <ul className="flex flex-col gap-3 text-[#272343]">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="/"
                  className="lg:text-[16px] text-[13px] hover:underline hover:text-[#007580] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-4 max-w-sm flex-1">
          <p className="font-medium text-[11px] lg:text-[14px] uppercase tracking-wider text-[#9A9CAA]">
            Newsletter
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              placeholder="Your email"
              type="email"
              className="flex-1 h-[46px] py-[15px] px-4 rounded-lg border border-gray-300 text-[16px] outline-none  "
            />
            <button className="flex-shrink-0 h-[46px] px-5 bg-[#029FAE] text-white font-semibold rounded-lg hover:bg-[#007580] transition">
              Subscribe
            </button>
          </div>
          <p className="text-[12px] lg:text-[15px] leading-[150%] text-[#272343]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>
      <hr />
      <div className="px-8 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] lg:justify-between justify-center flex py-[27px] ">
        <p className="text-[14px] font-poppins leading-[auto] text-[#9A9CAA] text-center">
          @ 2021 - Blogy - Designed & Develop by{" "}
          <span className="text-[#272343]">Zakirsoft</span>{" "}
        </p>
        <div className="lg:flex gap-[10px] hidden">
          <Image alt="" src="/asset/Group 11.png" width={36} height={22.25}/>
          <Image alt="" src="/asset/Group 12.png" width={56} height={14.92}/>
          <Image alt="" src="/asset/Vector (12).png" width={50} height={27}/>
          <Image alt="" src="/asset/Union.png" width={55} height={17.84}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
