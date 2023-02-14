import CategoriesSideBar from '@/components/sections/CategoriesSideBar'
import CategoryProducts from '@/components/sections/CategoryProducts'
import { getProducts } from '../services/test'

const Categories = () => {
  const products = getProducts()
  return (
    <div className="max-w-screen-xl mx-auto pt-14">
      <div className="flex justify-between">
        <CategoriesSideBar />
        <CategoryProducts products={products}/>
      </div>
    </div>
  )
}

export default Categories