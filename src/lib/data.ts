// foodData.js

export const allFoods = [
  // Ghanaian Local Foods
  {
    id: 1,
    image: "/images/menuFoods/waakye.png",
    title: "Waakye",
    price: "GH₵60.00",
    discountedPrice: null,
    reviews: "245",
    rating: 4.5,
    tags: ["local", "top-rated", "most-wanted"]
  },
  {
    id: 2,
    image: "images/menuFoods/jollof.png",
    title: "Fried Plantain",
    price: "$30.00",
    discountedPrice: "$25.00",
    reviews: "189",
    rating: 4.5,
    tags: ["local", "most-wanted"]
  },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
//     title: "Banku & Tilapia",
//     price: "$40.00",
//     discountedPrice: null,
//     reviews: "312",
//     rating: 5.0,
//     tags: ["local", "top-rated"]
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//     title: "Waakye",
//     price: "$28.00",
//     discountedPrice: "$22.00",
//     reviews: "167",
//     rating: 4.3,
//     tags: ["local", "new"]
//   },
//   {
//     id: 5,
//     image: "https://images.unsplash.com/photo-1603894584373-5ac82b2fb6b6?w=400",
//     title: "Fufu & Light Soup",
//     price: "$35.00",
//     discountedPrice: null,
//     reviews: "278",
//     rating: 4.7,
//     tags: ["local", "top-rated", "most-wanted"]
//   },
//   {
//     id: 6,
//     image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
//     title: "Kenkey & Fish",
//     price: "$25.00",
//     discountedPrice: null,
//     reviews: "154",
//     rating: 4.2,
//     tags: ["local"]
//   },
//   {
//     id: 7,
//     image: "https://images.unsplash.com/photo-1603894584373-5ac82b2fb6b6?w=400",
//     title: "Red Red",
//     price: "$20.00",
//     discountedPrice: "$18.00",
//     reviews: "138",
//     rating: 4.0,
//     tags: ["local", "new"]
//   },
//   {
//     id: 8,
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//     title: "Groundnut Soup",
//     price: "$32.00",
//     discountedPrice: null,
//     reviews: "201",
//     rating: 4.6,
//     tags: ["local", "top-rated"]
//   },
//   {
//     id: 9,
//     image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
//     title: "Tuo Zaafi",
//     price: "$30.00",
//     discountedPrice: null,
//     reviews: "145",
//     rating: 4.4,
//     tags: ["local"]
//   },
//   {
//     id: 10,
//     image: "https://images.unsplash.com/photo-1603894584373-5ac82b2fb6b6?w=400",
//     title: "Omo Tuo",
//     price: "$28.00",
//     discountedPrice: null,
//     reviews: "89",
//     rating: 4.1,
//     tags: ["local", "new"]
//   },

//   // International Foods
//   {
//     id: 11,
//     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
//     title: "Pepperoni Pizza",
//     price: "$45.00",
//     discountedPrice: null,
//     reviews: "356",
//     rating: 4.8,
//     tags: ["international", "top-rated", "most-wanted"]
//   },
//   {
//     id: 12,
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//     title: "Chicken Burger",
//     price: "$35.00",
//     discountedPrice: "$30.00",
//     reviews: "298",
//     rating: 4.5,
//     tags: ["international", "most-wanted"]
//   },
//   {
//     id: 13,
//     image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
//     title: "Spaghetti Carbonara",
//     price: "$38.00",
//     discountedPrice: null,
//     reviews: "212",
//     rating: 4.7,
//     tags: ["international", "top-rated"]
//   },
//   {
//     id: 14,
//     image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
//     title: "Fried Rice",
//     price: "$32.00",
//     discountedPrice: null,
//     reviews: "187",
//     rating: 4.4,
//     tags: ["international"]
//   },
//   {
//     id: 15,
//     image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
//     title: "Caesar Salad",
//     price: "$28.00",
//     discountedPrice: "$24.00",
//     reviews: "164",
//     rating: 4.3,
//     tags: ["international", "new"]
//   },
//   {
//     id: 16,
//     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
//     title: "Margherita Pizza",
//     price: "$42.00",
//     discountedPrice: null,
//     reviews: "334",
//     rating: 4.6,
//     tags: ["international", "top-rated"]
//   },
//   {
//     id: 17,
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//     title: "Fish & Chips",
//     price: "$36.00",
//     discountedPrice: null,
//     reviews: "191",
//     rating: 4.5,
//     tags: ["international", "most-wanted"]
//   },
//   {
//     id: 18,
//     image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
//     title: "Pad Thai",
//     price: "$34.00",
//     discountedPrice: null,
//     reviews: "178",
//     rating: 4.4,
//     tags: ["international"]
//   },
//   {
//     id: 19,
//     image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
//     title: "Beef Tacos",
//     price: "$30.00",
//     discountedPrice: "$26.00",
//     reviews: "156",
//     rating: 4.2,
//     tags: ["international", "new"]
//   },
//   {
//     id: 20,
//     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
//     title: "Grilled Chicken",
//     price: "$40.00",
//     discountedPrice: null,
//     reviews: "203",
//     rating: 4.7,
//     tags: ["international", "top-rated"]
//   },

//   // Continental Foods
//   {
//     id: 21,
//     image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
//     title: "Beef Wellington",
//     price: "$65.00",
//     discountedPrice: null,
//     reviews: "273",
//     rating: 4.9,
//     tags: ["continental", "top-rated", "most-wanted"]
//   },
//   {
//     id: 22,
//     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
//     title: "Lobster Thermidor",
//     price: "$75.00",
//     discountedPrice: "$68.00",
//     reviews: "256",
//     rating: 4.8,
//     tags: ["continental", "top-rated"]
//   },
//   {
//     id: 23,
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//     title: "Coq au Vin",
//     price: "$55.00",
//     discountedPrice: null,
//     reviews: "164",
//     rating: 4.7,
//     tags: ["continental"]
//   },
//   {
//     id: 24,
//     image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
//     title: "Duck Confit",
//     price: "$60.00",
//     discountedPrice: null,
//     reviews: "148",
//     rating: 4.6,
//     tags: ["continental", "new"]
//   },
//   {
//     id: 25,
//     image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
//     title: "Filet Mignon",
//     price: "$70.00",
//     discountedPrice: "$62.00",
//     reviews: "292",
//     rating: 4.9,
//     tags: ["continental", "top-rated", "most-wanted"]
//   },
//   {
//     id: 26,
//     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
//     title: "Lamb Chops",
//     price: "$58.00",
//     discountedPrice: null,
//     reviews: "167",
//     rating: 4.7,
//     tags: ["continental"]
//   },
//   {
//     id: 27,
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//     title: "Salmon en Croûte",
//     price: "$52.00",
//     discountedPrice: null,
//     reviews: "154",
//     rating: 4.6,
//     tags: ["continental"]
//   },
//   {
//     id: 28,
//     image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
//     title: "Beef Bourguignon",
//     price: "$56.00",
//     discountedPrice: "$50.00",
//     reviews: "271",
//     rating: 4.8,
//     tags: ["continental", "top-rated"]
//   },
//   {
//     id: 29,
//     image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
//     title: "Veal Piccata",
//     price: "$54.00",
//     discountedPrice: null,
//     reviews: "143",
//     rating: 4.5,
//     tags: ["continental", "new"]
//   },

//   // Asian Foods
//   {
//     id: 30,
//     image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
//     title: "Sushi Platter",
//     price: "$50.00",
//     discountedPrice: null,
//     reviews: "445",
//     rating: 4.8,
//     tags: ["asian", "top-rated", "most-wanted"]
//   },
//   {
//     id: 31,
//     image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
//     title: "Ramen Bowl",
//     price: "$32.00",
//     discountedPrice: "$28.00",
//     reviews: "328",
//     rating: 4.7,
//     tags: ["asian", "top-rated", "most-wanted"]
//   },
//   {
//     id: 32,
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//     title: "Dim Sum",
//     price: "$38.00",
//     discountedPrice: null,
//     reviews: "196",
//     rating: 4.6,
//     tags: ["asian"]
//   },
//   {
//     id: 33,
//     image: "https://images.unsplash.com/photo-1603894584373-5ac82b2fb6b6?w=400",
//     title: "Pho",
//     price: "$30.00",
//     discountedPrice: null,
//     reviews: "187",
//     rating: 4.5,
//     tags: ["asian"]
//   },
//   {
//     id: 34,
//     image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
//     title: "Kung Pao Chicken",
//     price: "$34.00",
//     discountedPrice: "$30.00",
//     reviews: "202",
//     rating: 4.6,
//     tags: ["asian", "new"]
//   },
//   {
//     id: 35,
//     image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
//     title: "Teriyaki Salmon",
//     price: "$42.00",
//     discountedPrice: null,
//     reviews: "278",
//     rating: 4.7,
//     tags: ["asian", "top-rated"]
//   },
//   {
//     id: 36,
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//     title: "Tom Yum Soup",
//     price: "$28.00",
//     discountedPrice: null,
//     reviews: "164",
//     rating: 4.4,
//     tags: ["asian"]
//   },
//   {
//     id: 37,
//     image: "https://images.unsplash.com/photo-1603894584373-5ac82b2fb6b6?w=400",
//     title: "Biryani",
//     price: "$36.00",
//     discountedPrice: null,
//     reviews: "294",
//     rating: 4.7,
//     tags: ["asian", "top-rated"]
//   },
//   {
//     id: 38,
//     image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
//     title: "Spring Rolls",
//     price: "$22.00",
//     discountedPrice: "$18.00",
//     reviews: "156",
//     rating: 4.3,
//     tags: ["asian", "new"]
//   },
//   {
//     id: 39,
//     image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
//     title: "Nasi Goreng",
//     price: "$30.00",
//     discountedPrice: null,
//     reviews: "172",
//     rating: 4.5,
//     tags: ["asian"]
//   },
//   {
//     id: 40,
//     image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//     title: "Satay Skewers",
//     price: "$26.00",
//     discountedPrice: null,
//     reviews: "148",
//     rating: 4.4,
//     tags: ["asian", "new"]
//   }
];

// Helper functions to filter foods by tags
export type FoodTag = 'local' | 'international' | 'continental' | 'asian' | 'new' | 'top-rated' | 'most-wanted';

export interface Food {
  id: number;
  image: string;
  title: string;
  price: string;
  discountedPrice: string | null;
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