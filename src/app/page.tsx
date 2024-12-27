import SponsersLogos from "./components/ui/SponsersLogos";
import FeaturedProducts from "./components/ui/FeaturedProducts";
import OurProducts from "./components/ui/OurProducts";
import ExplorePopular from "./components/ui/ExplorePopular";
import TopCategories from "./components/ui/TopCategories";
import Hero from "./components/ui/Hero";
export default function Home() {
  return (
    <>
      {/* <div className=" px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:pr-[277px] 3xl:pl-[271px] xl:px-[150px] lg:px-[100px]"> */}
      <div>
        <Hero/>
        <SponsersLogos />
        <FeaturedProducts />
        <TopCategories/>
        <ExplorePopular />
        <OurProducts />
      </div>
      {/* </div> */}
    </>
  );
}
