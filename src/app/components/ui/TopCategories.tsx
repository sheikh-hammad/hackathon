import React from 'react'
import { categories } from "../data/types";
import Category from './Category';

const TopCategories = () => {
  return (
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
        </section>  )
}

export default TopCategories