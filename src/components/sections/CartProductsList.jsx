import Image from "next/image"
import { AiOutlineClose } from "react-icons/ai"

const CartProductsList = ({cartProducts}) => {
  return (
    <ul className="col-span-2">
          {cartProducts.map((cartProduct) => (
            <li className="cart-product flex items-center gap-16 pb-8 pr-4">
              <div className="flex items-center">
              <AiOutlineClose className="mr-4"/>
              <Image width={50} height={60} src={cartProduct.image} alt="" />
              </div>
              <h3 className="mx-2 font-semibold">{cartProduct.name}</h3>
              <input
                type="number"
                className="
                text-center
                form-control
                block
                w-10
                py-1.5
                text-base
                font-normal
                text-gray-700
                transition
                ease-in-out
                m-0
                bg-gray-200
                focus:text-gray-700 focus:border-blue-600 focus:outline-none
              "
              id="exampleNumber0"
              placeholder="1"
              />
            <h3 className="mx-4 font-semibold">${cartProduct.price}</h3>
            </li>
          ))}
        </ul>
  )
}

export default CartProductsList