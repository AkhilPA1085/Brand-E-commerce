import Image from "next/image";

const ProductSlideCard = ({ product }) => {
  return (
    <div className="max-w-sm">
      <Image width={500} height={500} src={product.img} className="w-full h-full" alt="..." />
      <div className="py-2">
        <div className="text-md font-semibold">{product.name}</div>
        <p className="text-dark text-base font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductSlideCard;
