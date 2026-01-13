const FoodCard = ({
    image_url,
    name,
    discounted_price,
    total_ratings,
    // category,
    current_price,
}: {
  image_url: string;
  name: string;
  discounted_price: string;
  // category: string;
  total_ratings: number;
  current_price?: string;
}) => {
  return (
    <div className="w-full flex flex-col max-h-[197px]">
      <div className="h-full w-full rounded-[10px] overflow-hidden ">
        <img src={image_url} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col p-4 gap-[7px]">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-xs text-nowrap font-[Mansfield] text-black">
            {name}
          </h2>
        </div>

        <div className="flex items-center w-full">
          <div className="grid gap-[7px]">
            <h4 className="flex gap-4 items-center">
              
              {discounted_price && (
              <span
                className={`text-xs font-bold ${
                  current_price
                    ? "line-through text-gray-400"
                    : "text-[#2A7F62]"
                }`}
              >
                {discounted_price}
              </span>
              )}
              {current_price && (
                <span className="text-[10px] text-[#2A7F62] font-semibold">
                  {current_price}
                </span>
              )}
            </h4>
            <h5 className="flex gap-2 items-center">
              <span className="">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.86544 1.75495L7.74544 3.51495C7.86544 3.75995 8.18544 3.99495 8.45544 4.03995L10.0504 4.30495C11.0704 4.47495 11.3104 5.21495 10.5754 5.94495L9.33544 7.18495C9.12544 7.39495 9.01044 7.79995 9.07544 8.08995L9.43044 9.62495C9.71044 10.8399 9.06544 11.3099 7.99044 10.6749L6.49544 9.78995C6.22544 9.62995 5.78044 9.62995 5.50544 9.78995L4.01044 10.6749C2.94044 11.3099 2.29044 10.8349 2.57044 9.62495L2.92544 8.08995C2.99044 7.79995 2.87544 7.39495 2.66544 7.18495L1.42544 5.94495C0.695443 5.21495 0.930443 4.47495 1.95044 4.30495L3.54544 4.03995C3.81044 3.99495 4.13044 3.75995 4.25044 3.51495L5.13044 1.75495C5.61044 0.799946 6.39044 0.799946 6.86544 1.75495Z"
                    fill="#FFC107"
                  />
                </svg>
              </span>
              <span className="text-[#848A9C] text-[10px] font-bold">
                {total_ratings} Reviews
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
