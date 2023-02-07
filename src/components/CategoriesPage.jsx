import { getProducts } from "@/pages/services/test";
import Link from "next/link";

import CategoriesSideBar from "./basic/CategoriesSideBar";
import FilterDropdown from "./basic/FilterDropdown";
import ProductSlideCard from "./basic/ProductSlideCard";
import ProductTitleBanner from "./basic/ProductTitleBanner";

const CategoriesPage = () => {
  const products = getProducts();
  return (
    <>
      <div className="container mx-auto pt-14">
        <div className="flex justify-between">
          <CategoriesSideBar />
          <div>
            <ProductTitleBanner/>
            <div className="flex justify-between items-center py-6">
                <p className="text-[#9B9B9B] text-sm">Home/category/product</p>
                <div className="flex justify-between items-center">
                    <FilterDropdown/>
                    <p className="text-[#9B9B9B] text-sm">30 products</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <Link href={`/products/${product.id}`}>
                  <ProductSlideCard product= {product}/>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
