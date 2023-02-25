import Image from "next/image";

const ProductSlideCard = ({ product }) => {
  return (
    <div className="max-w-sm">
      <Image width={500} height={500} layout="responsive" src={product.image} className="w-full h-80" alt="..." />
      <div className="py-2">
        <div className="text-md font-semibold">{product.name}</div>
        <p className="text-dark text-base font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductSlideCard;
