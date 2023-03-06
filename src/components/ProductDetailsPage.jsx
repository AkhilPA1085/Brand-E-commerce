import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import StyledButton from "./common/StyledButton";
import ProductTabs from "./sections/ProductTabs"
import { getProductAccordion, getProductDescriptions, getProducts } from "@/pages/api/services/test";
import RelatedProducts from "./sections/RelatedProducts";
import Accordion from "./basic/Accordion";
import NumberInput from "./common/NumberInput";
import Image from "next/image";

import SIZECHARTICON from "../../public/assets/pantone-outline.svg"

const ProductDetailsPage = ({ product }) => {
  const styles = {
    width:'w-full md:w-1/2',
    titletext:'bg-white font-medium py-2 uppercase tracking-wide text-[#9B9B9B]',
    text:'text-[#9B9B9B]',
    border:'border-b-2',
    show:true
  }

  const sizes = [30, 32, 40];
  const colors = ["black", "gray-300"];

  const accordionDatas = getProductAccordion()

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const descriptions = getProductDescriptions();
  return (
    <div className="max-w-screen-xl p-4 mx-auto pt-24">
      <div className="flex flex-wrap flex-col sm:flex-row">
        <div className="product-images w-full sm:w-1/2">
          <div className="flex justify-between">
            <Image width={500} height={500} layout="responsive" src={product?.image} alt="" className="w-1/2"/>
            <Image width={500} height={500} layout="responsive" src={product?.image} alt="" className="w-1/2" />
          </div>
          <Image width={500} height={500} layout="responsive" src={product?.image} alt="" className="w-full py-2 h-1/2" />
          <div className="flex justify-between">
            <Image width={500} height={500} layout="responsive" src={product?.image} alt="" className="w-1/3 !important" />
            <Image width={500} height={500} layout="responsive" src={product?.image} alt="" className="w-1/3 !important" />
            <Image width={500} height={500} layout="responsive" src={product?.image} alt="" className="w-1/3 !important" />
          </div>
        </div>
        <div className="product-desc w-full sm:w-1/2 pt-4 sm:pt-0 px-0 sm:px-4">
          <h4 className="product-title text-[#0D1C2E] text-4xl">
            {product?.name}
          </h4>
          <h4 className="product-title text-[#0D1C2E] text-2xl py-3">
            {product?.price}
          </h4>

          <div className="flex items-center py-3">
            <p className="text-[#9B9B9B] uppercase font-semibold tracking-wide text-sm">
              colours
            </p>
            <p className=" text-[#0D1C2E] capitalize font-semibold tracking-wide text-sm ml-2">
              {selectedColor}
            </p>
          </div>

          <div className="product-color-picker flex items-center gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className={`rounded-none h-10 w-10 ${
                  selectedColor === color
                    ? `border-black border-2 bg-${color}`
                    : `border-inherit border-0 bg-${color}`
                }`}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>

          <div className="flex items-center py-3">
            <p className="text-[#9B9B9B] uppercase font-semibold tracking-wide text-sm">
              sizes
            </p>
            <p className=" text-[#0D1C2E] capitalize font-semibold tracking-wide text-sm ml-2">
              {selectedSize}
            </p>
          </div>

          <div className="product-size-picker flex items-center gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 font-medium ${
                  selectedSize === size ? "bg-black text-white" : "bg-gray-300"
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="product-cart-button flex py-4">
            <NumberInput
              min={1}
              placeholder={1}
            />
            <StyledButton className={"bg-black-button ml-2"}>add to cart</StyledButton>
          </div>

          <div className="flex items-center gap-4 pb-8">
            <Link
              href="#"
              className="flex items-center font-semibold text-black text-sm"
            >
              <AiOutlineHeart size={22}/>
              Add to wishlist
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-black text-sm"
            >
              <Image src={SIZECHARTICON} height={22} width={22}/>
              Size guide
            </Link>
          </div>
          
          {accordionDatas.map((accordionData)=>(
            <Accordion key={accordionData.id} accordionData= {accordionData} styles={styles}/>
          ))}

        </div>
      </div>

      <ProductTabs descriptions={descriptions} count={2}/>

      <RelatedProducts product = {product}/>
              
    </div>
  );
};

export default ProductDetailsPage;
