import CategoriesSideBar from '@/components/basic/CategoriesSideBar'
import CategoryProducts from '@/components/sections/CategoryProducts'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getProductsByCategory } from '../services/test'

const Name = () => {
    const router = useRouter()
    const category = router.query.name
    const [categoryProducts, setCategoryProducts] = useState([])
    useEffect(()=>{
      const products = getProductsByCategory(category)
      setCategoryProducts(products)
    },[category])
  return (
    <div className="container mx-auto pt-14">
      <div className="flex justify-between">
        <CategoriesSideBar/>
        <CategoryProducts products={categoryProducts}/>
      </div>
    </div>
  )
}

export default Name