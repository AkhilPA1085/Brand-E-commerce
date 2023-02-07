import ProductSlideCard from "@/components/basic/ProductSlideCard"
import Link from "next/link"
import { getProducts } from "../services/test"

const Products = () => {
  const products = getProducts()
  const {id} = products
  return (
    <>
      <Link href={`/products/${id}`}>
        <ProductSlideCard products = {products}/>
      </Link>
    </>
  )
}

export default Products