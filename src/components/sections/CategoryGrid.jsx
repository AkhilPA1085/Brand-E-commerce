
import CategoryCard from "../basic/CategoryCard";

const CategoryGrid = ({ categories,count = 1 }) => {
  
  var className = "sm:w-1/"+count
  categories = categories.slice(0, count)
 
  return (
    <div className="container mx-auto">
      <div className={`grid grid-cols-${count}`}>
        {categories.map((category, index) => {
          return (
            <CategoryCard
              category={category}
              index={index}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;
