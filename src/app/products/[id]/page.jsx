// import { notFound } from "next/navigation";
// import { Prods } from "../../components/data/types";
// import Image from "next/image";
// import { IoCartOutline } from "react-icons/io5";
// import FeatureComponent from "@/app/components/ui/FeatureComponent";


// export async function generateStaticParams() {
//   return Prods.map((product) => ({
//     id: product.id.toString(),
//   }));
// }
// interface ProductPageProps {
//   params: { id: string };
// }

// export default function ProductPage({ params }:ProductPageProps) {
//   const product = Prods.find((prod) => prod.id === parseInt(params.id));

//   if (!product) {
//     notFound();
//   }

//   return (
//     <div className="pt-[57px] pb-[173px] px-4 sm:px-[25px] md:px-[120px]  2xl:px-60 3xl:px-[265px] xl:px-[150px] lg:px-[100px]">
//       <div className="flex flex-col md:flex-row gap-8 lg:gap-[109px] items-center mb-[123px]">
//         <div className="flex-1 w-full ">
//           <Image
//             src={product.src}
//             alt="Library Stool Chair"
//             width={675}
//             height={607}
//             className="min-w-[350px] w-full lg:w-[675px] h-full"
//           />
//         </div>
//         <div className="flex-1 flex flex-col items-center md:items-start">
//           <div className="flex flex-col gap-4 lg:gap-6 pb-[24px] lg:pb-[30px] xl:pb-[37px]">
//             <h2 className="text-[#272343] font-bold md:text-[32px] lg:text-[36px] 2xl:text-[60px] leading-tight text-center xl:w-[541px] 2xl:w-[auto] 3xl:w-[541px] md:text-left">
//               {product.name}
//             </h2>
//             <div className="flex justify-center md:justify-start">
//               <button className="w-fit font-semibold text-[16px] md:text-[16px] lg:text-[20px] [line-height:110%] text-white bg-[#029FAE] rounded-[100px] px-[13px] py-[12px]">
//                 {product.price}.00 USD
//               </button>
//             </div>
//           </div>
//           <hr className="w-full" />
//           <div className="flex flex-col gap-4 lg:gap-6 pt-[24px] lg:pt-[30px] xl:pt-[37px]">
//             <p className="text-[#272343] text-center md:text-left leading-150 text-[18px] md:text-[18px] 2xl:text-[22px] opacity-60 max-w-[90%] lg:max-w-[560px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//               tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
//               adipiscing.
//             </p>
//             <div className="flex bg-[#029FAE] self-center md:self-start text-white px-6 py-[14px] rounded-lg items-center gap-[9px]">
//               <IoCartOutline size={24} />
//               <p className="text-[16px] md:text-[16px] lg:text-[20px] [line-height:110%] font-semibold">
//                 Add To Cart
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//     <FeatureComponent/>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import { Prods } from "../../components/data/types";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import FeatureComponent from "@/app/components/ui/FeatureComponent";

export async function generateStaticParams() {
  return Prods.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }) {
  const product = Prods.find((prod) => prod.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-[57px] pb-[173px] px-4 sm:px-[25px] md:px-[120px]  2xl:px-60 3xl:px-[265px] xl:px-[150px] lg:px-[100px]">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-[109px] items-center mb-[123px]">
        <div className="flex-1 w-full ">
          <Image
            src={product.src}
            alt="Library Stool Chair"
            width={675}
            height={607}
            className="min-w-[350px] w-full lg:w-[675px] h-full"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="flex flex-col gap-4 lg:gap-6 pb-[24px] lg:pb-[30px] xl:pb-[37px]">
            <h2 className="text-[#272343] font-bold md:text-[32px] lg:text-[36px] 2xl:text-[60px] leading-tight text-center xl:w-[541px] 2xl:w-[auto] 3xl:w-[541px] md:text-left">
              {product.name}
            </h2>
            <div className="flex justify-center md:justify-start">
              <button className="w-fit font-semibold text-[16px] md:text-[16px] lg:text-[20px] [line-height:110%] text-white bg-[#029FAE] rounded-[100px] px-[13px] py-[12px]">
                {product.price}.00 USD
              </button>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex flex-col gap-4 lg:gap-6 pt-[24px] lg:pt-[30px] xl:pt-[37px]">
            <p className="text-[#272343] text-center md:text-left leading-150 text-[18px] md:text-[18px] 2xl:text-[22px] opacity-60 max-w-[90%] lg:max-w-[560px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing.
            </p>
            <div className="flex bg-[#029FAE] self-center md:self-start text-white px-6 py-[14px] rounded-lg items-center gap-[9px]">
              <IoCartOutline size={24} />
              <p className="text-[16px] md:text-[16px] lg:text-[20px] [line-height:110%] font-semibold">
                Add To Cart
              </p>
            </div>
          </div>
        </div>
      </div>

      <FeatureComponent />
    </div>
  );
}
