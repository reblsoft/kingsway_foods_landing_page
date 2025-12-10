// foodData.js

export const allFoods: Food[] = [
  // Ghanaian Local Foods
  {
    id: 1,
    image: "/images/menuFoods/waakye.png",
    title: "Waakye",
    price: "GH₵60.00",
    discountedPrice: undefined,
    reviews: "245",
    rating: 4.5,
    tags: ["local", "top-rated", "most-wanted"]
  },
  {
    id: 2,
    image: "images/menuFoods/jollof.png",
    title: "Jollof Rice",
    price: "GH₵50.00",
    discountedPrice: "GH₵40.00",
    reviews: "189",
    rating: 4.3,
    tags: ["local", "most-wanted"]
  },

];

// Helper functions to filter foods by tags
export type FoodTag = 'local' | 'international' | 'continental' | 'asian' | 'new' | 'top-rated' | 'most-wanted';

export interface Food {
  id: number;
  image: string;
  title: string;
  price: string;
  discountedPrice: string | undefined;
  reviews: string;
  rating: number;
  tags: FoodTag[];
}

// Helper functions to filter foods by tags
export const getFoodsByTag = (tag: FoodTag): Food[] => {
  return allFoods.filter((food: Food) => food.tags.includes(tag));
};

export const getFoodsByMultipleTags = (tags: FoodTag[]): Food[] => {
  return allFoods.filter((food: Food) => 
    tags.every((tag: FoodTag) => food.tags.includes(tag))
  );
};

export const getFoodsByAnyTag = (tags: FoodTag[]): Food[] => {
  return allFoods.filter((food: Food) => 
    tags.some((tag: FoodTag) => food.tags.includes(tag))
  );
};

// Get foods organized by rows (for display purposes)
export const getFoodsInRows = (foods: Food[], rowSizes: number[] = [2, 5, 4]): Food[][] => {
  const rows: Food[][] = [];
  let currentIndex: number = 0;
  
  rowSizes.forEach((size: number) => {
    rows.push(foods.slice(currentIndex, currentIndex + size));
    currentIndex += size;
  });
  
  return rows;
};

// Example: Get top-rated foods in rows
export const getTopRatedInRows = (): Food[][] => {
  const topRated: Food[] = getFoodsByTag('top-rated');
  return getFoodsInRows(topRated);
};

// Example: Get most wanted foods in rows
export const getMostWantedInRows = (): Food[][] => {
  const mostWanted: Food[] = getFoodsByTag('most-wanted');
  return getFoodsInRows(mostWanted);
};

// Example: Get local foods in rows
export const getLocalFoodsInRows = (): Food[][] => {
  const local: Food[] = getFoodsByTag('local');
  return getFoodsInRows(local);
};