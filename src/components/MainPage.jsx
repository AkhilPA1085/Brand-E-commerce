import { SliderDatas } from '@/Data/data'

import CategoryGrid from './sections/CategoryGrid'
import ProductSlider from './sections/ProductSlider'
import BannerSlider from '@/components/sections/BannerSlider'
import { getCategories } from '@/pages/services/test'
import Footer from './basic/Footer'
import FooterBottom from './basic/FooterBottom'


const MainPage = () => {
  const allCategory = getCategories() 
  return (
    <>
        <BannerSlider SliderDatas={SliderDatas}/>
        <CategoryGrid categories={allCategory} count={2}/>
        <CategoryGrid categories={allCategory} count={3}/>
        <ProductSlider/>
        <CategoryGrid categories={allCategory} count={2}/>
        <CategoryGrid categories={allCategory}/>
        <CategoryGrid categories={allCategory} count={3}/>
        <Footer/>
        <FooterBottom/>
    </>
  )
}

export default MainPage