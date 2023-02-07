import Link from "next/link"
import { MainCategories } from "@/Data/data"
import FilterSlider from "./FilterSlider";

const CategoriesSideBar = () => {
  return (
    <>
      <div className="prod-categories w-1/4 h-screen">
            <div className="container mx-auto">
              <ul className="category-page-list">
                <li className="category-page-list-item text-sm text-gray-700/[0.6] uppercase font-bold tracking-widest pb-10">
                  <Link href="/categories">categories</Link>
                </li>
                {MainCategories.map((cat)=>{
                    const {category}= cat;
                    return (
                    <>
                        <li className="category-page-list-item tracking-widest pb-10">
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
                    </>
                    )
                })}

                <li>
                  <FilterSlider initialMin={2500}
          initialMax={7500}
          min={0}
          max={10000}
          step={100}
          priceCap={1000}/>
                </li>
              </ul>
            </div>
          </div>  
    </>
  )
}

export default CategoriesSideBar