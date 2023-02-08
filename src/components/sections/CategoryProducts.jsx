import Link from "next/link";
import { useRouter } from "next/router";
import FilterDropdown from "../basic/FilterDropdown";
import ProductSlideCard from "../basic/ProductSlideCard";
import ProductTitleBanner from "../basic/ProductTitleBanner";

const CategoryProducts = ({products}) => {
    const router = useRouter()
    const pathname = router.query.name
  return (
    <div>
      <ProductTitleBanner pathname = {pathname}/>
      <div className="flex justify-between items-center py-6">
        <p className="text-[#9B9B9B] text-sm">Home/categories{pathname ? `/${pathname}`:``}</p>
        <div className="flex justify-between items-center">
          <FilterDropdown />
          <p className="text-[#9B9B9B] text-sm">30 products</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`}>
            <ProductSlideCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
