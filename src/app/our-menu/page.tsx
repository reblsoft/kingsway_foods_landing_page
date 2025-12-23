"use client";
import { useRouter } from "next/navigation";
import { allFoods } from "@/lib/data";
import FoodCard from "@/components/fragments/FoodCard";
import FoodCardModal from "@/components/fragments/FoodCardModal";
import { useState, useLayoutEffect, useRef } from "react";  

const Page = () => {
  const router = useRouter();
  const [expandedCategories, setExpandedCategories] = useState({});
  const [cardsPerRow, setCardsPerRow] = useState(5);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const updateCardsPerRow = () => {
      if (gridRef.current) {
        const gridComputedStyle = window.getComputedStyle(gridRef.current);
        const gridColumnValue = gridComputedStyle.getPropertyValue('grid-template-columns');
        const columnCount = gridColumnValue.split(' ').length;
        setCardsPerRow(columnCount);
      }
    };

    updateCardsPerRow();
    window.addEventListener('resize', updateCardsPerRow);
    return () => window.removeEventListener('resize', updateCardsPerRow);
  }, []);

  const categories = [
    { key: "local", title: "Local Dishes" },
    { key: "continental", title: "Continental" },
    { key: "asian", title: "Asian Cuisine" },
    { key: "international", title: "International" },
    { key: "snacks", title: "Snacks" },
    { key: "most-wanted", title: "Most Wanted" },
    { key: "top-rated", title: "Top Rated" },
    { key: "new", title: "New Arrivals" }
  ];

  const getFoodsByCategory = (categoryTag: string) => {
    return allFoods.filter(food => food.tags.includes(categoryTag));
  };

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const handleFoodClick = (food: any) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  return (
    <div className="bg-white max-lg:mt-12 xl:mt-28 w-full h-full">
      <div className="max-w-[1605px] w-10/12 flex-col flex mx-auto gap-10.5 py-10.5 lg:gap-20.5 lg:py-20.5">
        {/* menu header */}
        <div className="flex max-lg:flex-col max-lg:gap-10.5 max-lg:items-start justify-between h-full py-[8.5px] w-full items-center">
          <div className="flex w-fit gap-[9px]">
            <button
              className="rounded-[5px] px-[15px] text-nowrap cursor-pointer font-bold text-[13px] w-full bg-[#2a7f6219] text-[#32a071] hover:bg-green-100 text-center py-2"
              type="button"
              onClick={() => router.back()}
            >
              Go Back
            </button>

            <span className="text-[13px] text-black font-bold bg-white text-nowrap py-2 w-full">
              Our Menu
            </span>
          </div>

          <div className="flex gap-3.5 max-lg:flex-col max-w-[562px] lg:items-center max-lg:justify-between w-full">
            <div className="flex gap-1 text-nowrap items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#828282" strokeWidth="1.5"/>
                <path d="M18.2222 17C19.6167 18.9885 20.2838 20.0475 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.71619 20.0475 4.38326 18.9885 5.77778 17" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#828282" strokeWidth="1.5"/>
              </svg>
              <span className="text-[#828282] text-sm font-medium">No.20, Adotey St., Accra</span>
            </div>

            <div className="flex rounded-[10px] p-[15px] text-nowrap items-center gap-2.5 shadow-[2px] bg-[#0000000c] max-lg:max-w-[300px] max-lg:min-w-[150px] max-w-[562px] w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.333 11.3334L13.9997 14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input type="text" placeholder="Search Foods" className="w-full placeholder:text-[#848a9c] outline-none h-full" />
              <button className="w-fit cursor-pointer">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.97949 9.49996C1.97949 5.95461 1.97949 4.18193 3.08089 3.08052C4.1823 1.97913 5.95497 1.97913 9.50033 1.97913C13.0456 1.97913 14.8183 1.97913 15.9198 3.08052C17.0212 4.18193 17.0212 5.95461 17.0212 9.49996C17.0212 13.0453 17.0212 14.818 15.9198 15.9194C14.8183 17.0208 13.0456 17.0208 9.50033 17.0208C5.95497 17.0208 4.1823 17.0208 3.08089 15.9194C1.97949 14.818 1.97949 13.0453 1.97949 9.49996Z" stroke="#292D32" strokeLinejoin="round"/>
                  <path d="M6.72949 7.91663C6.07365 7.91663 5.54199 7.38497 5.54199 6.72913C5.54199 6.07329 6.07365 5.54163 6.72949 5.54163C7.38533 5.54163 7.91699 6.07329 7.91699 6.72913C7.91699 7.38497 7.38533 7.91663 6.72949 7.91663Z" stroke="#292D32"/>
                  <path d="M12.2705 13.4584C12.9263 13.4584 13.458 12.9267 13.458 12.2709C13.458 11.6151 12.9263 11.0834 12.2705 11.0834C11.6147 11.0834 11.083 11.6151 11.083 12.2709C11.083 12.9267 11.6147 13.4584 12.2705 13.4584Z" stroke="#292D32"/>
                  <path d="M7.91699 6.72913H13.4587" stroke="#292D32" strokeLinecap="round"/>
                  <path d="M11.0837 12.2709H5.54199" stroke="#292D32" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* menu content */}
        <div className="gap-[60px] grid w-full h-full">
          {categories.map((category) => {
            const foods = getFoodsByCategory(category.key);
            const isExpanded = expandedCategories[category.key];
            const displayedFoods = isExpanded ? foods : foods.slice(0, cardsPerRow);

            return (
              <div key={category.key} className="flex-col gap-[15px] flex w-full">
                <div className="flex w-full justify-between items-center">
                  <h3 className="text-[#1E1E1E] text-xl text-left font-medium">{category.title}</h3>
                  {foods.length > cardsPerRow && (
                    <button
                      onClick={() => toggleCategory(category.key)}
                      className="font-medium text-xl text-right text-[#2a7f62] cursor-pointer">
                      {isExpanded ? "View Less" : "View All"}
                    </button>
                  )}
                </div>

                <div ref={gridRef} className="grid gap-[30px] lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:grid-cols-5 justify-between w-full">
                  {displayedFoods.map((food) => (
                    <div key={food.id} onClick={() => handleFoodClick(food)} className="cursor-pointer">
                      <FoodCard
                        image={food.image}
                        title={food.title}
                        price={food.price}
                        rating={food.rating}
                        discountedPrice={food.discountedPrice}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedFood && (
        <FoodCardModal food={selectedFood} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Page;