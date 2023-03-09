import Link from "next/link";

import { getProductsByCategory } from '@/pages/api/services/test'
import ProductSlideCard from "../basic/ProductSlideCard";


const RelatedProducts = ({product}) => {
    const category = product?.category
    const relatedProducts = getProductsByCategory(category)
  return (
    <div className="max-w-screen-xl p-4 mx-auto related-products py-32">
        <h4 className="font-bold uppercasen pb-4">RELATED PRODUCTS</h4>
        <div className="grid grid-cols-3">
            {
                relatedProducts.map((relatedProduct)=>(
                    <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id} className="col-span-1">
                        <ProductSlideCard product={relatedProduct} />
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts