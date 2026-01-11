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
    image: "/images/menuFoods/jollof.png",
    title: "Jollof Rice",
    price: "GH₵50.00",
    discountedPrice: "GH₵40.00",
    reviews: "189",
    rating: 4.3,
    tags: ["local", "most-wanted"]
  },
  {
    id: 3,
    image: "/images/menuFoods/rice_and_gravy.png",
    title: "Plain Rice & Goat Sauce",
    price: "GH₵100.00",
    discountedPrice: "GH₵75.00",
    reviews: "189",
    rating: 4.3,
    tags: ["local", "most-wanted"]
  },
  {
    id: 4,
    image: "/images/menuFoods/spaghetti.png",
    title: "Pasta",
    price: "GH₵50.00",
    discountedPrice: "GH₵40.00",
    reviews: "189",
    rating: 4.3,
    tags: ["continental", "most-wanted"]
  },
  {
    id: 5,
    image: "/images/menuFoods/yam_balls.jpg",
    title: "Yam Balls",
    price: "GH₵50.00",
    discountedPrice: "GH₵40.00",
    reviews: "189",
    rating: 4.3,
    tags: ["snacks", "most-wanted"]
  },
  {
    id: 6,
    image: "/images/menuFoods/waakye.png",
    title: "Banku & Tilapia",
    price: "GH₵80.00",
    discountedPrice: undefined,
    reviews: "156",
    rating: 4.6,
    tags: ["local", "top-rated"]
  },
  {
    id: 7,
    image: "/images/menuFoods/jollof.png",
    title: "Fufu & Light Soup",
    price: "GH₵70.00",
    discountedPrice: "GH₵60.00",
    reviews: "203",
    rating: 4.7,
    tags: ["local", "top-rated", "most-wanted"]
  },
  {
    id: 8,
    image: "/images/menuFoods/rice_and_gravy.png",
    title: "Kenkey & Fish",
    price: "GH₵55.00",
    discountedPrice: undefined,
    reviews: "178",
    rating: 4.4,
    tags: ["local"]
  },
  {
    id: 9,
    image: "/images/menuFoods/waakye.png",
    title: "Tuo Zaafi",
    price: "GH₵65.00",
    discountedPrice: undefined,
    reviews: "134",
    rating: 4.5,
    tags: ["local", "new"]
  },
  {
    id: 10,
    image: "/images/menuFoods/jollof.png",
    title: "Red Red",
    price: "GH₵45.00",
    discountedPrice: "GH₵40.00",
    reviews: "167",
    rating: 4.4,
    tags: ["local", "new"]
  },
  {
    id: 11,
    image: "/images/menuFoods/spaghetti.png",
    title: "Spaghetti Bolognese",
    price: "GH₵65.00",
    discountedPrice: undefined,
    reviews: "142",
    rating: 4.5,
    tags: ["continental", "top-rated"]
  },
  {
    id: 12,
    image: "/images/menuFoods/rice_and_gravy.png",
    title: "Grilled Chicken & Chips",
    price: "GH₵85.00",
    discountedPrice: "GH₵70.00",
    reviews: "221",
    rating: 4.6,
    tags: ["continental", "most-wanted", "top-rated"]
  },
  {
    id: 13,
    image: "/images/menuFoods/spaghetti.png",
    title: "Beef Steak",
    price: "GH₵120.00",
    discountedPrice: undefined,
    reviews: "167",
    rating: 4.8,
    tags: ["continental", "top-rated"]
  },
  {
    id: 14,
    image: "/images/menuFoods/rice_and_gravy.png",
    title: "Fish & Chips",
    price: "GH₵75.00",
    discountedPrice: "GH₵65.00",
    reviews: "198",
    rating: 4.4,
    tags: ["continental"]
  },
  {
    id: 15,
    image: "/images/menuFoods/spaghetti.png",
    title: "Chicken Alfredo",
    price: "GH₵90.00",
    discountedPrice: undefined,
    reviews: "156",
    rating: 4.6,
    tags: ["continental", "new"]
  },
  {
    id: 16,
    image: "/images/menuFoods/rice_and_gravy.png",
    title: "Lamb Chops",
    price: "GH₵130.00",
    discountedPrice: "GH₵110.00",
    reviews: "189",
    rating: 4.7,
    tags: ["continental", "new", "top-rated"]
  },
  {
    id: 17,
    image: "/images/menuFoods/yam_balls.jpg",
    title: "Meat Pie",
    price: "GH₵15.00",
    discountedPrice: undefined,
    reviews: "312",
    rating: 4.2,
    tags: ["snacks", "most-wanted"]
  },
  {
    id: 18,
    image: "/images/menuFoods/yam_balls.jpg",
    title: "Samosa",
    price: "GH₵20.00",
    discountedPrice: "GH₵15.00",
    reviews: "267",
    rating: 4.5,
    tags: ["snacks", "top-rated"]
  },
  {
    id: 19,
    image: "/images/menuFoods/yam_balls.jpg",
    title: "Spring Rolls",
    price: "GH₵25.00",
    discountedPrice: undefined,
    reviews: "198",
    rating: 4.3,
    tags: ["snacks", "asian"]
  },
  {
    id: 20,
    image: "/images/menuFoods/yam_balls.jpg",
    title: "Kelewele",
    price: "GH₵30.00",
    discountedPrice: "GH₵25.00",
    reviews: "289",
    rating: 4.6,
    tags: ["snacks", "local", "top-rated"]
  },
  {
    id: 21,
    image: "/images/menuFoods/yam_balls.jpg",
    title: "Chin Chin",
    price: "GH₵20.00",
    discountedPrice: undefined,
    reviews: "234",
    rating: 4.1,
    tags: ["snacks"]
  },
  {
    id: 22,
    image: "/images/menuFoods/yam_balls.jpg",
    title: "Puff Puff",
    price: "GH₵10.00",
    discountedPrice: undefined,
    reviews: "298",
    rating: 4.3,
    tags: ["snacks", "new"]
  },
  {
    id: 23,
    image: "/images/menuFoods/jollof.png",
    title: "Fried Rice",
    price: "GH₵55.00",
    discountedPrice: "GH₵45.00",
    reviews: "176",
    rating: 4.4,
    tags: ["asian", "most-wanted"]
  },
  {
    id: 24,
    image: "/images/menuFoods/spaghetti.png",
    title: "Chicken Noodles",
    price: "GH₵60.00",
    discountedPrice: undefined,
    reviews: "145",
    rating: 4.3,
    tags: ["asian"]
  },
  {
    id: 25,
    image: "/images/menuFoods/rice_and_gravy.png",
    title: "Sweet & Sour Chicken",
    price: "GH₵70.00",
    discountedPrice: "GH₵60.00",
    reviews: "189",
    rating: 4.5,
    tags: ["asian", "top-rated"]
  },
  {
    id: 26,
    image: "/images/menuFoods/jollof.png",
    title: "Beef Chow Mein",
    price: "GH₵65.00",
    discountedPrice: undefined,
    reviews: "167",
    rating: 4.4,
    tags: ["asian"]
  },
  {
    id: 27,
    image: "/images/menuFoods/spaghetti.png",
    title: "Pad Thai",
    price: "GH₵75.00",
    discountedPrice: "GH₵65.00",
    reviews: "201",
    rating: 4.6,
    tags: ["asian", "new", "top-rated"]
  },
  {
    id: 28,
    image: "/images/menuFoods/rice_and_gravy.png",
    title: "Teriyaki Chicken",
    price: "GH₵80.00",
    discountedPrice: undefined,
    reviews: "178",
    rating: 4.5,
    tags: ["asian", "new"]
  },
  {
    id: 29,
    image: "/images/menuFoods/spaghetti.png",
    title: "Pizza Margherita",
    price: "GH₵70.00",
    discountedPrice: "GH₵60.00",
    reviews: "245",
    rating: 4.7,
    tags: ["international", "most-wanted", "top-rated"]
  },
  {
    id: 30,
    image: "/images/menuFoods/rice_and_gravy.png",
    title: "Beef Burger",
    price: "GH₵55.00",
    discountedPrice: undefined,
    reviews: "312",
    rating: 4.5,
    tags: ["international", "most-wanted"]
  },
  {
    id: 31,
    image: "/images/menuFoods/spaghetti.png",
    title: "Chicken Shawarma",
    price: "GH₵40.00",
    discountedPrice: "GH₵35.00",
    reviews: "289",
    rating: 4.6,
    tags: ["international", "snacks", "most-wanted"]
  },
  {
    id: 32,
    image: "/images/menuFoods/rice_and_gravy.png",
    title: "Club Sandwich",
    price: "GH₵45.00",
    discountedPrice: undefined,
    reviews: "198",
    rating: 4.4,
    tags: ["international"]
  },
  {
    id: 33,
    image: "/images/menuFoods/spaghetti.png",
    title: "Chicken Wings",
    price: "GH₵60.00",
    discountedPrice: "GH₵50.00",
    reviews: "267",
    rating: 4.5,
    tags: ["international", "snacks", "top-rated"]
  }

];

// Helper functions to filter foods by tags
export type FoodTag = 'local' | 'international' | 'continental' | 'asian' | 'new' | 'top-rated' | 'most-wanted' | 'snacks';

export interface Food {
  id: number;
  image: string;
  name: string;
  base_price: string;
  current_price: string | undefined;
  reviews: string;
  // categoryTag:string;
  total_ratings: number;
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