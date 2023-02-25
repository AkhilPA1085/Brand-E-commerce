import ProductDetailsPage from "@/components/ProductDetailsPage";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getProduct } from "../api/services/test";

const ProductDetails = () => {
    const router = useRouter();
    const product_id = router.query.slug;
    const [product, setProduct] = useState({})
    useEffect(()=>{
     setProduct(getProduct(product_id));
    },[product_id])
    
  return (
    <div className="max-w-screen-xl mx-auto">
      <ProductDetailsPage product={product}/>
    </div>
  )
}

export default ProductDetails