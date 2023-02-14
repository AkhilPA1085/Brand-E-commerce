import Link from "next/link";
import StyledButton from "../common/StyledButton";

const CategoryCard = ({ category, className }) => {
  const { image, category:name } = category;
  return (
    <div className={`w-full ${className}`}>
      <div className="relative px-1 py-1">
        <img src={image} alt="" className="relative w-full h-100 object-cover" />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <Link href={`/categories/${name}`}>
            <StyledButton className={"outlined-button"}>
                {name}
            </StyledButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
