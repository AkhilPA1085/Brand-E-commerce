const ProductSlideCard = ({ product }) => {
  const { image, name, price, id } = product;
  return (
    <div className="max-w-sm">
      <img src={image} className="w-full h-80" alt="..." />
      <div className="py-2">
        <div className="text-md font-semibold">{name}</div>
        <p className="text-dark text-base font-bold">${price}</p>
      </div>
    </div>
  );
};

export default ProductSlideCard;
