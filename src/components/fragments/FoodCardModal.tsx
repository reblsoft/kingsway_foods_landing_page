import React from 'react'
import ModalLayout from './ModalLayout'

interface FoodCardModalProps {
  food: {
    image_url: string;
    name: string;
    discounted_price: string;
    current_price?: string;
    total_ratings: number;
    is_available: boolean;
    reviews: string;
    preparation_time: number;
  };
  onClose: () => void;
  kitchenAddress?:string;
}

function FoodCardModal({ food, onClose, kitchenAddress }: FoodCardModalProps) {
  return (
    <ModalLayout onClose={onClose}>
      <div className="lg:w-[566px]  h-full flex flex-col overflow-hidden rounded-[20px]">
        <div className="mx-auto flex flex-col">
          <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden">
            <img src={food.image_url} alt={food.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full h-full bg-linear-to-b from-black/50 via-transparent to-black/80   flex-col flex justify-between px-4 py-2">

            <div className="flex flex-col max-w-9/10 max-h-9/10 m-auto h-full w-full justify-between items-start">
              <button className="">

               <img src="/icons/white-arrow-left.svg" alt="" className="w-7 h-7" />
              </button>


            <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-1  items-start text-left">
              {food.current_price && (
                <span className="text-lg lg:text-2xl text-[#31BF8F] font-bold">
                  ${food.current_price}
                </span>
              )}
              {food.discounted_price && (
                <span
                className={`text-base lg:text-lg font-medium ${
                  food.current_price
                    ? "line-through text-[#E4E4E4]"
                    : "text-[#2A7F62]"
                }`}
              >
                ${food.discounted_price}
              </span>
              )}
                  </div>

                  <div className="flex flex-col gap-1 items-end text-right">
                    <h4 className="items-center flex gap-1">
                      <img src="/icons/clock.svg" alt="" className="" />
                      <span className="text-[#E4E4E4] font-medium text-base">
                        Ready in about {food.preparation_time} mins
                      </span>
                    </h4>
                    <h4 className="flex items-center gap-1">
                      <img src="/icons/bicycle.svg" alt="" className="" />
                      <span className="text-[#E4E4E4] font-medium text-base">Delivery and Pickup available</span>
                    </h4>
                  </div>
              </div>
            </div>
          </div>
        </div>



        <div className="bg-[#f9f9f9] flex-col flex"
        >

          <div className="py-[15px] text-left px-7.5 border-b border-[#E6E6E6]">
            <h2 className="text-black text-lg font-bold">
              {
                food?.name
              }
            </h2>
          </div>
          <div className="py-[15px] text-left px-7.5 border-b border-[#E6E6E6]">
            <h3 className="flex items-center gap-1">
              <span className="w-[13px] h-[13px]">
                <img src="/icons/star.svg" alt="" className="w-full" />
              </span>
              <span className="text-[#848a9c] text-xs font-bold">
                {food.total_ratings} Reviews
              </span>
            </h3>
          </div>
          <div className="py-[15px] text-left px-7.5 border-b border-[#E6E6E6]">

            <h3 className="flex items-center gap-1">

            <span className="w-[13px] h-[13px]">
              <img src="/icons/location2.svg" alt="" className="" />
            </span>
            <span className="font-bold text-xs text-[#848a9c]">
                {
                  kitchenAddress
                }
            </span>
            </h3>
          </div>
          <div className="py-[15px] text-left px-7.5 border-b border-[#E6E6E6]">
            <h3 className="flex items-center gap-1">
              <span className="w-[13px] h-[13px]">
                <img src="/icons/discountShape.svg" alt="" className="" />
              </span>
              {
                food.is_available ? (
                  <span className="font-bold text-xs text-[#848a9c]">
                    Ready to order
                  </span>
                ):(
                  <span className="font-bold text-lg text-red-600">
                    Sold out
                  </span>
                )
              }
            </h3>
          </div>

          <div className="px-4.5 py-7.5 w-full  flex justify-center items-center">
            <button className="w-3/6  bg-[#2A7F62] text-white py-4 rounded-full text-base font-semibold">Order from the mobile app</button>
          </div>
        </div>
      </div>
      </div>
    </ModalLayout>
  )
}

export default FoodCardModal