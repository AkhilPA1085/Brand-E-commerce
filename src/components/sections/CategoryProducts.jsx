import Link from "next/link";
import { useRouter } from "next/router";
import FilterDropdown from "../basic/FilterDropdown";
import ProductSlideCard from "../basic/ProductSlideCard";
import PageTitleBanner from "../basic/PageTitleBanner";

const CategoryProducts = ({products}) => {
    const router = useRouter()
    const pathname = router.query.name
    const ImageUrl = "https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=826&t=st=1676019524~exp=1676020124~hmac=a343ea7e8f0d254e7472275fde706508dc35513718cdf010d9a10c228efe4a6chttps://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=826&t=st=1676019524~exp=1676020124~hmac=a343ea7e8f0d254e7472275fde706508dc35513718cdf010d9a10c228efe4a6c"

  return (
    <div>
      <PageTitleBanner
        pathname={pathname}
        className={"pb-28"}
        bgImage={ImageUrl}
      />
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
