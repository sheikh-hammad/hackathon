import Product from "./components/ui/Product";
import Category from "./components/ui/Category";
import { categories } from "./components/data/types";
import SponsersLogos from "./components/ui/SponsersLogos";

export default function Home() {
  return (
    <>
      <div className=" px-4 sm:px-[25px] md:px-[120px] 2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px]">
        <SponsersLogos />
        <section className="mt-6 mb-[136px]">
          <p className="text-[32px] leading-110 font-semibold mb-[40px] text-[#272343]">
            Featured Products
          </p>
          <div className="flex gap-6">
            <Product
              src="/asset/Image.png"
              tag="New"
              name="Library School Chair"
              price="$39"
              discountedPrice="$20"
              tagClass="bg-[#01AD5A]"
              cartClass="bg-[#029FAE] text-white"
              nameClass="text-[#007580]"
            />
            <Product
              src="/asset/Image (7).png"
              tag="Sales"
              name="Library School Chair"
              price="$39"
              discountedPrice="$20"
              tagClass="bg-[#F5813F]"
              cartClass="bg-[#F0F2F3]"
              priceClass="text-[#9A9CAA]"
            />
            <Product
              src="/asset/Image (8).png"
              name="Library School Chair"
              discountedPrice="$20"
              cartClass="bg-[#F0F2F3]"
            />
            <Product
              src="/asset/Image (9).png"
              name="Library School Chair"
              discountedPrice="$20"
              cartClass="bg-[#F0F2F3]"
              nameClass="text-[#272343]"
            />
          </div>
        </section>
        <section>
          <p className="text-[32px] leading-110 font-semibold mb-[40px] text-[#272343]">
            Top Categories
          </p>
          <div className="flex justify-between gap-6">
            {categories.map((category, index) => (
              <Category
                key={index}
                image={category.image}
                alt={category.alt}
                products={category.products}
                desc={category.desc}
              />
            ))}
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-[84px]">
            <Product
              src="/asset/Image.png"
              tag="New"
              name="Library School Chair"
              price="$39"
              discountedPrice="$20"
              tagClass="bg-[#01AD5A]"
              cartClass="bg-[#029FAE] text-white"
              nameClass="text-[#007580]"
            />
            <Product
              src="/asset/Image (7).png"
              tag="Sales"
              name="Library School Chair"
              price="$39"
              discountedPrice="$20"
              tagClass="bg-[#F5813F]"
              cartClass="bg-[#F0F2F3]"
              priceClass="text-[#9A9CAA]"
            />
            <Product
              src="/asset/Image (8).png"
              name="Library School Chair"
              discountedPrice="$20"
              cartClass="bg-[#F0F2F3]"
            />
            <Product
              src="/asset/Image (9).png"
              name="Library School Chair"
              discountedPrice="$20"
              cartClass="bg-[#F0F2F3]"
              nameClass="text-[#272343]"
            />
            <Product
              src="/asset/Image (10).png"
              tag="New"
              name="Library School Chair"
              discountedPrice="$20"
              cartClass="bg-[#029FAE] text-white"
              tagClass="bg-[#01AD5A]"
              nameClass="text-[#272343]"
            />

            <Product
              src="/asset/Image (11).png"
              tag="Sales"
              name="Library School Chair"
              price="$39"
              discountedPrice="$20"
              tagClass="bg-[#F5813F]"
              cartClass="bg-[#F0F2F3]"
              priceClass="text-[#9A9CAA]"
            />
            <Product
              src="/asset/Image (12).png"
              name="Library School Chair"
              discountedPrice="$20"
              cartClass="bg-[#F0F2F3]"
            />
            <Product
              src="/asset/Image (13).png"
              name="Library School Chair"
              discountedPrice="$20"
              cartClass="bg-[#F0F2F3]"
              nameClass="text-[#272343]"
            />
          </div>
        </section>
        <section>
          {/* <section className="hot-category">
            <div className="overlap-group">
              <h2 className="explore-new-and">
                EXPLORE NEW AND POPULAR STYLES
              </h2>

              <Card className="card" raised={false} variant="elevation" />
              <img className="image" alt="Main visual" src={image} />

              <img
                className="item-category"
                alt="Item category 1"
                src={itemCategory1}
              />
            </div>

            <Card className="card" variant="outlined">
              <div className="img">
                <img
                  className="item-category-2"
                  alt="Item category 2"
                  src={itemCategory}
                />
              </div>
            </Card>
            <Card className="card" raised={false} variant="elevation" />
            <Card className="card" raised={false} variant="elevation" />
            <Card className="card" raised={false} variant="elevation" />
          </section> */}
        </section>
      </div>
    </>
  );
}
