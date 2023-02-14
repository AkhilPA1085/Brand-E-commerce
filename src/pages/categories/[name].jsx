import CategoriesSideBar from '@/components/sections/CategoriesSideBar'
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
    <div className="max-w-screen-xl mx-auto p-4 pt-14">
      <div className="flex justify-between">
        <CategoriesSideBar/>
        <CategoryProducts products={categoryProducts}/>
      </div>
    </div>
  )
}

export default Name