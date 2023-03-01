import CategoryCard from "../basic/CategoryCard";

const CategoryGrid = ({ categories,count }) => {
  
  var className =`w-1/${count} !important`
  categories = categories.slice(0, count)
 
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <div className={`flex flex-wrap`}>
        {categories.map((category, index) => {
          return (
            <CategoryCard
              key={category.id}
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
