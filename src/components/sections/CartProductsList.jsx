import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import NumberInput from "../common/NumberInput";

const CartProductsList = ({ cartProducts }) => {
  return (
    <ul className="col-span-2">
      {cartProducts.map((cartProduct) => (
        <li className="cart-product flex items-center justify-between pb-8 pr-4" key={cartProduct.id}>
          <div className="flex items-center">
            <AiOutlineClose className="mr-4 hidden md:block" />
            <Image width={50} height={60} src={cartProduct.image} alt="" />
          </div>
          <h3 className="mx-2 font-semibold">{cartProduct.name}</h3>
          <h3 className="md:hidden mx-4 font-semibold">${cartProduct.price}</h3>
          
          <NumberInput placeholder={1} min={0}/>
          <AiOutlineClose className="md:hidden ml-6"/>
          <h3 className="hidden md:block mx-4 font-semibold">${cartProduct.price}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CartProductsList;
