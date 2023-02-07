import { categoryDatas, ProductsDatas, tabElements } from "@/Data/data"

export const getProducts = ()=>{
    return ProductsDatas
}

export const getProduct = (product_id)=>{
   return ProductsDatas.find(product=>product.id == product_id)
}

export const getProductByCategory = (category)=>{
   return ProductsDatas.filter(product=>product.category == category)
}

export const getCategories = ()=>{
    return categoryDatas
}

export const getProductDescriptions =()=>{
    return tabElements
}