import Link from "next/link";
import FilterSlider from "../basic/FilterSlider";
import { getProducts } from "@/pages/api/services/test";

const CategoriesSideBar = () => {
  const products = getProducts();
  return (
    <>
      <div className="prod-categories w-1/4 h-screen">
        <div className="max-w-screen-xl mx-auto">
          <ul className="category-page-list">
            <li className="category-page-list-item text-sm text-gray-700/[0.6] uppercase font-bold tracking-widest pb-10">
              <Link href="/categories">categories</Link>
            </li>
            {products.map((cat) => {
              const { category, id } = cat;
              return (
                <li
                  className="category-page-list-item tracking-widest pb-10"
                  key={id}
                >
                  <Link
                    href=""
                    className="text-sm text-gray-700/[0.6] uppercase font-bold"
                  >
                    {category}
                  </Link>

                  <ul className="pt-1">
                    <li className="font-semibold text-sm capitalize pb-2">
                      <Link href="">clothing</Link>
                    </li>
                  </ul>
                </li>
              );
            })}

            <li>
              <FilterSlider
                initialMin={2500}
                initialMax={7500}
                min={0}
                max={10000}
                step={100}
                priceCap={1000}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesSideBar;
