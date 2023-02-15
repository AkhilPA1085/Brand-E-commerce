import { getCartProducts } from "@/pages/services/test";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import ProgressBar from "./basic/ProgressBar";
import CartAmountList from "./sections/CartAmountList";
import CartProductsList from "./sections/CartProductsList";

const CartPage = () => {
  const cartProducts = getCartProducts();
  return (
    <div className="max-w-screen-xl mx-auto pt-24 p-4">
      <ProgressBar steps={["Step 1", "Step 2", "Step 3"]} currentStep={2} />

      <div className="grid grid-cols-2 md:grid-cols-3 pt-28">
        <CartProductsList cartProducts = {cartProducts}/>

        <CartAmountList/>
      </div>
    </div>
  );
};

export default CartPage;
