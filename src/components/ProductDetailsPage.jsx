import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import StyledButton from "./common/StyledButton";
import ProductTabs from "./sections/ProductTabs";
import {
  getProductAccordion,
  getProductDescriptions,
  getProducts,
} from "@/pages/api/services/test";
import RelatedProducts from "./sections/RelatedProducts";
import Accordion from "./basic/Accordion";
import NumberInput from "./common/NumberInput";
import Image from "next/image";

import SIZECHARTICON from "../../public/assets/pantone-outline.svg";
import HEARTICON from "../../public/assets/heart-outline.svg";

const ProductDetailsPage = ({ product }) => {
  const styles = {
    width: "w-full md:w-1/2",
    titletext:
      "bg-white font-medium py-2 uppercase tracking-wide text-[#9B9B9B]",
    text: "text-[#9B9B9B]",
    border: "border-b-2",
    show: true,
  };

  const sizes = [30, 32, 40];
  const colors = ["black", "gray-300"];

  const accordionDatas = getProductAccordion();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const descriptions = getProductDescriptions();

  const images = [
    { src: "https://i.ibb.co/ZYW3VTp/brown-brim.png" },
    { src: "https://i.ibb.co/ZYW3VTp/brown-brim.png" },
    { src: "https://i.ibb.co/ZYW3VTp/brown-brim.png" },
    { src: "https://i.ibb.co/ZYW3VTp/brown-brim.png" },
    { src: "https://i.ibb.co/ZYW3VTp/brown-brim.png" },
    { src: "https://i.ibb.co/ZYW3VTp/brown-brim.png" }
  ];

  const prepareImageGrid = ()=>{
    return images.map((image, index)=>{
      var className = "w-full"
      var indexL = index + 1
      if(indexL % 6 > 0 && indexL % 6 < 3){
        className = "w-full md:w-1/2"
      }
      if(indexL % 6 > 3 || indexL % 6 == 0){
        className = "w-full md:w-1/3"
      }
      if(images.length == 1) className = "w-full"

      return <Image
                src={image.src}
                alt=""
                width={500}
                height={500}
                key={index}
                className={`${className} p-2 h-auto`}/>
    })
  }

  return (
    <div className="max-w-screen-xl p-4 mx-auto pt-24">
      <div className="flex flex-wrap flex-col md:flex-row">
        <div className="product-images w-full md:w-1/2">
          <div className="flex flex-wrap">
            {prepareImageGrid()}
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

          <div className="product-color-picker flex items-center">
            {colors.map((color) => (
              <button
                key={color}
                className={`rounded-none h-10 w-10 mr-5 ${
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

          <div className="product-size-picker flex items-center">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 font-medium mr-5 ${
                  selectedSize === size ? "bg-black text-white" : "bg-gray-300"
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="product-cart-button flex py-4">
            <NumberInput min={1} placeholder={1} />
            <StyledButton className={"bg-black-button ml-5"}>
              add to cart
            </StyledButton>
          </div>

          <div className="flex items-center pb-8">
            <Link
              href="#"
              className="flex items-center font-semibold text-black text-sm mr-4"
            >
              {/* <AiOutlineHeart size={22}/> */}
              <Image
                src={HEARTICON}
                height={22}
                width={22}
                alt=""
                className="w-8 h-6 mr-1"
              />
              Add to wishlist
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-black text-sm"
            >
              <Image
                src={SIZECHARTICON}
                height={22}
                width={22}
                alt=""
                className="w-8 h-6 mr-1"
              />
              Size guide
            </Link>
          </div>

          {accordionDatas.map((accordionData) => (
            <Accordion
              key={accordionData.id}
              accordionData={accordionData}
              styles={styles}
            />
          ))}
        </div>
      </div>

      <ProductTabs descriptions={descriptions} count={2} />

      <RelatedProducts product={product} />
    </div>
  );
};

export default ProductDetailsPage;
