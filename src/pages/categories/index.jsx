import CategoriesSideBar from '@/components/basic/CategoriesSideBar'
import CategoryProducts from '@/components/sections/CategoryProducts'
import { getProducts } from '../services/test'

const Categories = () => {
  const products = getProducts()
  return (
    <div className="container mx-auto pt-14">
      <div className="flex justify-between">
        <CategoriesSideBar />
        <CategoryProducts products={products}/>
      </div>
    </div>
  )
}

export default Categories