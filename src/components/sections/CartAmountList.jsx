import StyledButton from "../styledComponents/StyledButton"

const CartAmountList = () => {
  return (
    <ul>
          <li className="bg-gray-200 flex justify-between items-center p-8 border-b-2 border-white">
            <h4 className="font-semibold uppercase tracking-wide">subtotal</h4>
            <h3 className="mx-4 font-semibold">$ 9090</h3>
          </li>
          <li className="bg-gray-200 flex justify-between items-center p-8 border-b-2 border-white">
            <h4 className="font-semibold uppercase tracking-wide">shipping</h4>
            <h3 className="mx-4 font-semibold">$ 9090</h3>
          </li>
          <li className="bg-gray-200 flex justify-between items-center p-8 border-b-2 border-white">
            <h4 className="font-semibold uppercase tracking-wide">total</h4>
            <h3 className="mx-4 font-semibold">$ 9090</h3>
          </li>
          <li className="pt-8">
            <StyledButton type="bg-black-button w-full">proceed to checkout</StyledButton>
          </li>
        </ul>
  )
}

export default CartAmountList