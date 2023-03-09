import ProductSlideCard from "@/components/basic/ProductSlideCard"
import Image from "next/image";
import Link from "next/link"
import { getProducts } from "../api/services/test"

const Products = () => {
  const products = getProducts();
  const {id} = products
  return (
    <>
    {products && 
      <Link href={`/products/${id}`}>
        <ProductSlideCard products = {products}/>
      </Link>
    }
    </>
  )
}

export default Products