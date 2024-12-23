import React from "react";
import { notFound } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Prod } from "../../components/data/types";
interface PostPageProps {
  params: { slug: string };
}

export type Product = {
  id: string;
  src: string;
  name: string;
  price: string;
  desc: string;
};

export const product: Product[] = [
  {
    id: "1",
    src: "/asset/Image.png",
    name: "Library School Chair",
    price: "$39",
    desc: "Lorem ipsum donor",
  },
  {
    id: "2",
    src: "/asset/Image.png",
    name: "Library School Chair",
    price: "$39",
    desc: "Lorem ipsum donor",
  },
  {
    id: "3",
    src: "/asset/Image.png",
    name: "Library School Chair",
    price: "$39",
    desc: "Lorem ipsum donor",
  },
];

const BlogPost = ({ params: { slug } }: PostPageProps) => {
  const post = product.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-[57px] pb-[173px] px-4 sm:px-[25px] md:px-[120px]  2xl:px-60 3xl:px-[265px] xl:px-[150px] lg:px-[100px]">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-[109px] items-center">
        <div className="flex-1 w-full ">
          <Image
            src="/asset/Image (18).png"
            alt="Library Stool Chair"
            width={675}
            height={607}
            className="min-w-[350px] w-full lg:w-[675px] h-full"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="flex flex-col gap-4 lg:gap-6 pb-[24px] lg:pb-[30px] xl:pb-[37px]">
            <h2 className="text-[#272343] font-bold md:text-[32px] lg:text-[36px] 2xl:text-[60px] leading-tight text-center xl:w-[541px] 2xl:w-[auto] 3xl:w-[541px] md:text-left">
              Library Stool Chair
            </h2>
            <div className="flex justify-center md:justify-start">
              <button className="w-fit font-normal lg:font-semibold text-[16px] md:text-[16px] lg:text-[20px] leading-110 text-white bg-[#029FAE] rounded-[100px] px-6 py-3">
                $20.00 USD
              </button>
            </div>
          </div>
          <hr className="w-full"/>
          <div className="flex flex-col gap-4 lg:gap-6 pt-[24px] lg:pt-[30px] xl:pt-[37px]">
            <p className="text-[#272343] text-center md:text-left leading-150 text-[18px] md:text-[18px] 2xl:text-[22px] opacity-60 max-w-[90%] lg:max-w-[560px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing.
            </p>
            <div className="flex bg-[#029FAE] self-center md:self-start text-white px-6 py-[14px] rounded-lg items-center gap-[9px]">
              <IoCartOutline size={24} />
              <p className="text-[16px] md:text-[16px] lg:text-[20px] leading-110 font-normal lg:font-semibold">
                Add To Cart
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[69px]">
        <div className="flex items-center justify-between">
          <p className="text-[28px] leading-[auto] tracking-[5.6px] font-bold uppercase">
            Featured Products
          </p>
          <Link
            className="text-[18px] leading-[auto] underline font-bold"
            href=""
          >
            View all
          </Link>
        </div>
        <div className="flex gap-[26px] justify-between">
          {Prod.map((p, index) => (
            <div key={index} className="grid gap-y-[15px] gap-x-[20px]">
              <div className="col-span-1">
                <Image alt="" src={p.img} width={270} height={263} />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#272343] leading-130">{p.name} </p>
                <p className="text-[14px] font-bold">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

export async function generateStaticParams() {
  return product.map((p) => ({ slug: p.id }));
}
