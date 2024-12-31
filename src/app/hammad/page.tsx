import React from "react";
import { client } from "@/sanity/lib/client";

export  const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"]`);
  return res;
};

interface IP {
  name: string;
  title: string;
  desc: string
}
export default async function page() {
  const data: IP = await getProductData();
  return (
    <>
      {/* {data.map((d) => ( */}
        <div>
          <h1>{data.desc}</h1>
        </div>
      {/* ))} */}
    </>
  );
}
