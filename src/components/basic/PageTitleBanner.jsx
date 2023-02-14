const PageTitleBanner = ({ pathname,className,bgImage }) => {
  return (
    <div className={`prod-title-banner max-w-screen-xl mx-auto text-white pt-20 px-10 ${className}`}
    style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="max-w-screen-lg mx-auto p-4 pt-14">
        <h1 className="title text-4xl font-semibold pb-2 capitalize">
            {pathname}
          </h1>
          <p className="title-description text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            laboriosam.
          </p>
      </div>
    </div>
  );
};

export default PageTitleBanner;
