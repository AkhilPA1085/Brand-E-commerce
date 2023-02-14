import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import NumberInput from "../common/NumberInput";

const CartProductsList = ({ cartProducts }) => {
  return (
    <ul className="col-span-2">
      {cartProducts.map((cartProduct) => (
        <li className="cart-product flex items-center gap-16 pb-8 pr-4">
          <div className="flex items-center">
            <AiOutlineClose className="mr-4" />
            <Image width={50} height={60} src={cartProduct.image} alt="" />
          </div>
          <h3 className="mx-2 font-semibold">{cartProduct.name}</h3>
          
          <NumberInput placeholder={1} min={0}/>
          <h3 className="mx-4 font-semibold">${cartProduct.price}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CartProductsList;
