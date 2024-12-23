import Product from "./components/ui/Product";
import Category from "./components/ui/Category";
import SponsersLogos from "./components/ui/SponsersLogos";
import FeaturedProducts from "./components/ui/FeaturedProducts";
import OurProducts from "./components/ui/OurProducts";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className=" px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:pr-[277px] 3xl:pl-[271px] xl:px-[150px] lg:px-[100px]">
        <SponsersLogos />
        <FeaturedProducts />
        <OurProducts />
        {/* <section>
          <div className="grid grid-cols-[auto,1fr,1fr]">
            <p className="vertical-lr rotate-180 text-[34px]">
              Explore new and popular styles
            </p>
            <div className="w-[643px] h-[543px]">
              <Image
                src="/asset/Image (8).png"
                alt=""
                width={643}
                height={643}
              />
            </div>
            <div className="grid grid-cols-2 ml-6 gap-6">
              <div className="max-w-[312px] max-h-[312px]">
                <Image
                  src="/asset/Image (9).png"
                  alt=""
                  width={312}
                  height={312}
                />
              </div>
              <div className="max-w-[312px] max-h-[312px]">
                <Image
                  src="/asset/Image (9).png"
                  alt=""
                  width={312}
                  height={312}
                />
              </div>
              <div className="max-w-[312px] max-h-[312px]">
                <Image
                  src="/asset/Image (9).png"
                  alt=""
                  width={312}
                  height={312}
                />
              </div>
              <div className="max-w-[312px] max-h-[312px]">
                <Image
                  src="/asset/Image (9).png"
                  alt=""
                  width={312}
                  height={312}
                />
              </div>
            </div>
          </div>
        </section> */}
        <div className="flex">
          <p className="vertical-lr rotate-180 text-[26px] 3xl:text-[34px] text-center uppercase font-roboto leading-[auto]">
            Explore new and popular styles
          </p>
          <div className="2xl:w-[496px] 2xl:h-[496px] 3xl:w-[643px] 3xl:h-[643px]">
            <Image src="/asset/Frame.png" alt="" width={643} height={643} />
          </div>
          <div className="grid grid-cols-2 ml-6 gap-6">
            <div className="2xl:w-[260px] 2xl:h-[260px] 3xl:w-[312px] 3xl:h-[312px]">
              <Image
                src="/asset/card (2).png"
                alt=""
                width={312}
                height={312}
              />
            </div>
            <div className="max-w-[312px] max-h-[312px]">
              <Image
                src="/asset/card (4).png"
                alt=""
                width={312}
                height={312}
              />
            </div>
            <div className="max-w-[312px] max-h-[312px]">
              <Image
                src="/asset/Image (14).png"
                alt=""
                width={312}
                height={312}
              />
            </div>
            <div className="max-w-[312px] max-h-[312px]">
              <Image
                src="/asset/card (4).png"
                alt=""
                width={312}
                height={312}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
