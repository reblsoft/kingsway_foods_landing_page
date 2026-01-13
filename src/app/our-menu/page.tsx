"use client";
import { useRouter } from "next/navigation";
import { allFoods } from "@/lib/data";
import FoodCard from "@/components/fragments/FoodCard";
import FoodCardModal from "@/components/fragments/FoodCardModal";
import { useState, useLayoutEffect, useRef, useEffect } from "react";  
import { div } from "motion/react-client";

const Page = () => {
  const router = useRouter();
  const [expandedCategories, setExpandedCategories] = useState({});
  const [cardsPerRow, setCardsPerRow] = useState(5);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAddress, setUserAddress] = useState("Loading location...");
  const [locationAccess, setLocationAccess] = useState(null);
  const [menuData, setMenuData] = useState<any[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const gridRef = useRef(null);


//   const baseURL = process.env.NEXT_PUBLIC_BASE_URL
// if (!baseURL) {
//   throw new Error('Please add your backend URL to the .env.local file as BACKEND_URL')
// }

  const fetchMenuItems = async (latitude:number, longitude:number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/menu/items?lat=${latitude}&lng=${longitude}`);
      console.log("Got here")
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Menu data:', result?.data);
      const allFoods = result?.data?.categories ?? null;
      console.log('Foods: ',allFoods);
      setMenuData(result?.data?.categories ?? null);
    } catch (err) {
      console.error('Error fetching menu:', err);
    } finally {
      setLoading(false);
    }
  };


useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
      setLocationAccess(permissionStatus.state === "granted");
      
      permissionStatus.onchange = () => {
        setLocationAccess(permissionStatus.state === "granted");
        
        if (permissionStatus.state === "granted") {
          attemptLocation();
        }
      };
    });
  }, []);

  const attemptLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      console.log(`Latitude: ${latitude}`);
      console.log(`Longitude: ${longitude}`);

      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(res => res.json())
        .then(data => {
          const address = data.address;

          console.log("Data:", JSON.stringify(data,null,3));
          console.log("Address:", JSON.stringify(address,null,3));
          const formattedAddress = `${address.house_number || ''} ${address.road || ''}, ${address.city || address.town || ''}`
            .replace(/\s+/g, ' ')
            .trim();
          console.log(`Address: ${formattedAddress}`);
          setUserAddress(formattedAddress);
        })
        .catch(err => console.error('Error fetching address:', err));
      fetchMenuItems(latitude, longitude);
    });
  };

  useEffect(() => {
    if (locationAccess) {
      attemptLocation();
    }
  }, [locationAccess]);

  const requestLocation = () => {
    navigator.geolocation.getCurrentPosition(
      () => {
        setLocationAccess(true);
      },
      () => {
        setLocationAccess(false);
      }
    );
  };

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

const getFilteredItems = (items) => {
  if (!searchQuery) return items;
  
  return items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const getFilteredCategories = () => {
  if (!menuData) return [];
  
  return menuData
    .map(category => ({
      ...category,
      items: getFilteredItems(category.items)
    }))
    .filter(category => category.items.length > 0);
};

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleFoodClick = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  if (locationAccess === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-gray-600">Checking permissions...</p>
        </div>
      </div>
    );
  }

  //   if (!menuData || !menuData || menuData.length === 0) {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center">
  //       <p>No menu items available for your location.</p>
  //     </div>
  //   );
  // }

  if (!locationAccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-sm p-8 flex-col flex gap-8 rounded-lg text-center">
          <p className="text-[#828282] text-base font-medium flex gap-2.5 flex-col">
            <span>Please allow us locate you before we can show you our Menu.</span>
            <span className="flex">Click on the  
              <span className="p-1.5 w-6.5 h-6.5 m-auto flex items-center justify-center bg-[#F5F8F7] rounded-full">
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.52557 3.65585C9.23885 3.63872 9.87599 3.20552 10.1541 2.54857C10.2135 2.5736 10.277 2.58741 10.3414 2.58928H13.5986C13.9359 2.58928 14.2093 2.31589 14.2093 1.97865C14.2093 1.64141 13.9359 1.36802 13.5986 1.36802H10.3821C10.347 1.36341 10.3114 1.36341 10.2763 1.36802C10.0431 0.451745 9.14557 -0.132187 8.21324 0.0257282C7.28092 0.183644 6.62585 1.03054 6.70744 1.9725C6.78904 2.91446 7.57997 3.63614 8.52557 3.63143V3.65585ZM8.52557 1.25403C8.85387 1.25403 9.12 1.52013 9.12 1.84838C9.12 2.17663 8.85387 2.44273 8.52557 2.44273C8.19728 2.44273 7.93114 2.17663 7.93114 1.84838C7.93114 1.52013 8.19728 1.25403 8.52557 1.25403Z" fill="black"/>
                  <path d="M0.610714 1.36802H5.49643C5.83372 1.36802 6.10714 1.64141 6.10714 1.97865C6.10714 2.31589 5.83372 2.58928 5.49643 2.58928H0.610714C0.273426 2.58928 0 2.31589 0 1.97865C0 1.64141 0.273426 1.36802 0.610714 1.36802Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.166 7.88143C2.42106 7.16011 3.10269 6.67749 3.86786 6.67645V6.66016C4.78866 6.65899 5.56459 7.34713 5.67332 8.26137C5.78206 9.17561 5.18919 10.0265 4.29379 10.2413C3.39839 10.4561 2.48395 9.96675 2.166 9.10269H0.610714C0.273426 9.10269 0 8.8293 0 8.49206C0 8.15482 0.273426 7.88143 0.610714 7.88143H2.166ZM3.27441 8.53489C3.28001 8.85875 3.54391 9.11849 3.86786 9.11898V9.08641C4.19615 9.08641 4.46229 8.82031 4.46229 8.49206C4.44453 8.16865 4.17106 7.91899 3.84733 7.93067C3.52359 7.94234 3.26882 8.21104 3.27441 8.53489Z" fill="black"/>
                  <path d="M7.125 7.88143H13.6393C13.9766 7.88143 14.25 8.15482 14.25 8.49206C14.25 8.8293 13.9766 9.10269 13.6393 9.10269H7.125C6.78771 9.10269 6.51429 8.8293 6.51429 8.49206C6.51429 8.15482 6.78771 7.88143 7.125 7.88143Z" fill="black"/>
                </svg>
              </span>
              Button in the URL Bar.
            </span>
            <span>Or click on the button below.</span>
          </p>
          <button
            onClick={requestLocation}
            className="px-6 py-2 text-white w-full max-w-[230px] mx-auto rounded-lg bg-linear-to-r from-[#2a7f62] from-29% to-[#31ae83] to-100% transition"
          >
            Enable Location
          </button>
        </div>
      </div>
    );
  }

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

          <div className="flex gap-3.5 max-lg:flex-col lg:items-center max-lg:justify-between w-fit">
            <div className="flex gap-1 text-nowrap items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#828282" strokeWidth="1.5"/>
                <path d="M18.2222 17C19.6167 18.9885 20.2838 20.0475 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.71619 20.0475 4.38326 18.9885 5.77778 17" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#828282" strokeWidth="1.5"/>
              </svg>
              <span className="text-[#828282] text-sm font-medium">{userAddress}</span>
            </div>

            <div className="flex rounded-[10px] p-[15px] text-nowrap items-center gap-2.5 shadow-[2px] bg-[#0000000c] max-xl:max-w-[300px] max-xl:min-w-[150px] xl:max-w-[562px] xl:min-w-md w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.333 11.3334L13.9997 14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
              type="search"
              placeholder="Search Foods"
              className="w-full placeholder:text-[#848a9c] outline-none h-full" 
              
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
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
  {menuData ? (
    getFilteredCategories().length > 0 ? (
      getFilteredCategories().map((category) => {
        const isExpanded = expandedCategories[category.id] || false;
        const displayedItems = isExpanded 
          ? category.items 
          : category.items.slice(0, cardsPerRow);

        return (
          <div key={category.id} className="flex-col gap-[15px] flex w-full">
            <div className="flex w-full justify-between items-center">
              <h3 className="text-[#1E1E1E] text-xl text-left font-medium">
                {category.name}
              </h3>
              {category.items.length > cardsPerRow && (
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="font-medium text-xl text-right text-[#2a7f62] cursor-pointer hover:text-[#1f5a47] transition-colors"
                >
                  {isExpanded ? "View Less" : "View All"}
                </button>
              )}
            </div>

            <div 
              ref={gridRef} 
              className="grid gap-[30px] lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:grid-cols-5 justify-between w-full"
            >
              {displayedItems.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => handleFoodClick(item)} 
                  className="cursor-pointer"
                >
                  <FoodCard
                    image="/images/menuFoods/yam_balls.jpg"
                    name={item.name}
                    image_url={item.image_url}
                    discounted_price={item.discounted_price}
                    total_ratings={item.total_ratings}
                    current_price={item.current_price}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })
    ) : (
      <div className="w-full h-[400px] flex items-center justify-center">
        <p className="text-[#828282] text-lg">
          No menu items found matching `{searchQuery}`
        </p>
      </div>
    )
  ) : loading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="text-[#828282]">Loading menu...</p>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="text-[#828282]">No menu items available for your location.</p>
    </div>
  )}
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