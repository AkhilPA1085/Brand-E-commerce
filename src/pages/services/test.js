import { aboutPageDatas, blogs, cartProducts, categoryDatas, ProductsDatas, tabElements } from "@/Data/data"

export const getProducts = ()=>{
    return ProductsDatas
}

export const getProduct = (product_id)=>{
   return ProductsDatas.find(product=>product.id == product_id)
}

export const getProductsByCategory = (category)=>{
   if(!category) return []
   const products = ProductsDatas.filter(product=>product.category.toLowerCase() 
                == category.toLowerCase())
   return products
}

export const getCategories = ()=>{
    return categoryDatas
}

export const getProductDescriptions =()=>{
    return tabElements
}

export const getCartProducts = () =>{
    return cartProducts
}

export const getAboutPageDetails = () =>{
    return aboutPageDatas
}

export const getAllBlogs = () =>{
    return blogs
}