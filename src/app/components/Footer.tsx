import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[418px]">
      <div className="max-w-[1920px] h-[343px] gap-[150px] px-[300px] flex justify-between items-center">
        {/* <div className="flex items-start justify-between"> */}
        <div>Comforty</div>
        <div className="flex flex-col gap-5">
          <p className="font-medium text-[14px] font-inter leading-[110%] tracking-[1.4px] text-[#9A9CAA] uppercase">
            Category
          </p>
          <ul className="text-[#272343] flex flex-col gap-3 font-inter">
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium text-[14px] font-inter leading-[110%] tracking-[1.4px] text-[#9A9CAA] uppercase">
            support
          </p>
          <ul className="font-inter flex flex-col gap-3 text-[#272343]">
            <li className="">Help & Support</li>
            <li>Tearms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-[14px] font-inter leading-[110%] tracking-[1.4px] text-[#9A9CAA] uppercase">
            newsletter
          </p>
          <div>
            <input type="search" name="" id="" />
            <button></button>
          </div>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>
      {/* </div> */}
      <hr className=" border-[#F0F2F3] border-t-[1px]" />
    </footer>
    
  );
};

export default Footer;
