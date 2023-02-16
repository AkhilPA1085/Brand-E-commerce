import CategoryCard from "../basic/CategoryCard";

const CategoryGrid = ({ categories,count = 1 }) => {
  
  var className ="sm:w-1/"+count.toString().trim()
  categories = categories.slice(0, count)
 
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <div className={`flex flex-wrap`}>
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
