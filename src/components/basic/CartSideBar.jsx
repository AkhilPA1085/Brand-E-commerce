import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import StyledButton from "../buttons/StyledButton";

const CartSideBar = ({ cartOpen, setCartOpen }) => {
  return (
    <>
      <div
        className={`cart-items ${
          cartOpen ? `cart-active` : ``
        } container mx-auto bg-white absolute top-0 bottom-0 right-0 left-auto w-full sm:w-1/4 h-screen p-4 z-30`}
      >
        <div className="title-container flex items-center justify-between font-bold">
          <h4 className="cart-title uppercase text-md font-bold">
            shopping cart
          </h4>
          <AiOutlineClose onClick={() => setCartOpen(false)} />
        </div>
        <hr className="mt-4" />
        <div className="cart-item-details flex justify-between py-4">
          <div className="cart-item-description">
            <p className="capitalize text-[#707070] text-base">cap</p>
            <p className="text-[#707070] text-base font-extralight">1 x 25</p>
          </div>
          <div className="cart-item-image">
            <Image
              width="38"
              height="52"
              src="https://i.ibb.co/ZYW3VTp/brown-brim.png"
            />
          </div>
        </div>
        <div className="cart-bottom absolute bottom-4 right-4 left-4">
          <div className="flex justify-between items-center py-4">
            <h4 className="uppercase text-md font-bold tracking-widest">
              subtotal
            </h4>
            <h4 className="uppercase text-md font-bold">900</h4>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <StyledButton type='bg-gray-button w-full'>
             <Link href="/cart"> view cart </Link>
            </StyledButton>
            <StyledButton type='bg-black-button w-full'>check out</StyledButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSideBar;
