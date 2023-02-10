import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import StyledButton from "./styledComponents/StyledButton";
import Tabs from "./sections/Tabs"
import { getProductDescriptions, getProducts } from "@/pages/services/test";
import RelatedProducts from "./sections/RelatedProducts";
import Accordion from "./sections/Accordion";

const ProductDetailsPage = ({ product }) => {
  const sizes = [30, 32, 40];
  const colors = ["black", "gray-300"];

  const accordionDatas = [
    {
      id: 1,
      title: "lorem 1",
      content: "Accordion content 1",
    },
    {
      id: 2,
      title: "lorem 2",
      content: "Accordion content 2",
    },
    {
      id: 3,
      title: "lorem 3",
      content: "Accordion content 3",
    },
  ];

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
    <div className="max-w-screen-xl mx-auto pt-24">
      <div className="flex flex-wrap flex-col sm:flex-row">
        <div className="product-images w-1/2">
          <div className="flex gap-2 justify-between">
            <img src={product?.image} alt="" className="w-1/2" />
            <img src={product?.image} alt="" className="w-1/2" />
          </div>
          <img src={product?.image} alt="" className="w-full py-2 h-1/2" />
          <div className="flex gap-1 justify-between">
            <img src={product?.image} alt="" className="w-1/3" />
            <img src={product?.image} alt="" className="w-1/3" />
            <img src={product?.image} alt="" className="w-1/3" />
          </div>
        </div>
        <div className="product-desc w-1/2 px-4">
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
            <input
              type="number"
              value={1}
              className="bg-gray-300 w-1/12 outline-none focus:outline-none text-center flex items-center justify-center"
            />
            <StyledButton type="bg-black-button ml-2">add to cart</StyledButton>
          </div>

          <div className="flex items-center gap-4 pb-8">
            <Link
              href="#"
              className="flex items-center font-semibold text-black text-sm"
            >
              <AiOutlineHeart />
              Add to wishlist
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-black text-sm"
            >
              <AiOutlineHeart />
              Size guide
            </Link>
          </div>
          
          {accordionDatas.map((accordionData)=>(
            <Accordion key={accordionData.id} accordionData= {accordionData}/>
          ))}

        </div>
      </div>

      <Tabs descriptions={descriptions} count={2}/>

      <RelatedProducts product = {product}/>
              
    </div>
  );
};

export default ProductDetailsPage;
