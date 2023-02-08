const ProductTitleBanner = ({ pathname }) => {
  return (
    <div className="prod-title-banner container mx-auto bg-[#4E154A] text-white pt-20 pb-10 px-10">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="title text-4xl font-semibold pb-2 capitalize">
            {pathname}
          </h1>
          <p className="title-description text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            laboriosam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductTitleBanner;
