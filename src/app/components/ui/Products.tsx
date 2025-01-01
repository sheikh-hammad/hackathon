import React from "react";
import Product from "./Product"; 
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import {Image} from "sanity"
import { urlFor } from "@/sanity/lib/image";


const getProductData = async () => {
  const res = await client.fetch(`*[_type == 'product' ] | order(_createdAt desc) | order(releaseDate asc){
  name,
    _id,
    tag,
    desc,
    price,
    image,
    discountedPrice,
      tagClass,
  cartClass,
  priceClass,
  nameClass,
}`);
  return res;
};

interface IProduct {
  name: string;
  desc: string;
  image: Image;
  tag: string;
  price: string;
  _id: string;
  discountedPrice: string;
  tagClass?: string,
  cartClass?: string,
  priceClass?: string,
  nameClass?: string,
}



const Products = async () => {
  const products:IProduct[] = await getProductData(); // Fetch products from Sanity

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-[84px]">
      {products.map((product) => (
        <Link key={product._id} href={`/products/${product._id}`} passHref>
          <Product
            name={product.name}
            tag={product.tag}
            price={product.price}
            discountedPrice={product.discountedPrice}
            src={urlFor(product.image).width(500).url()} // Get image URL using `urlFor`
            // id={product._id} // Make sure you pass unique `id` for each product
            tagClass={product.tagClass}
            cartClass={product.cartClass}
            priceClass={product.priceClass}
            nameClass={product.nameClass}
          />
        </Link>
      ))}
    </div>
  );
};

export default Products;
