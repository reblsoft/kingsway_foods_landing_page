import React from 'react'
import ModalLayout from './ModalLayout'

interface FoodCardModalProps {
  food: {
    image: string;
    title: string;
    price: string;
    discountedPrice?: string;
    rating: number;
    reviews: string;
  };
  onClose: () => void;
}

function FoodCardModal({ food, onClose }: FoodCardModalProps) {
  return (
    <ModalLayout>
      <div className="flex flex-col rounded-[20px] lg:max-h-[560px] max-h-5/6 md:max-h-[500px] xl:max-h-[620px] h-full bg-[#F9F9F9]  xl:max-w-[560px] lg:max-w-[500px] md:max-w-[480px] max-w-[360px] w-full">
        <div 
          className="relative bg-cover bg-center h-1/2 w-full "
          // style={{ backgroundImage: `url(${food.image})` }}
        >

            <div className="absolute inset-0">
                <img
                  src={food.image}
                  alt={food.title}
                  className="w-full h-full rounded-t-[20px] object-cover"
                />
  </div>
  <div className="absolute p-4 flex-col justify-between flex inset-0 bg-linear-to-b from-black/5 to-black/50">
          <img 
            src="/icons/white-arrow-left.svg" 
            alt="" 
            className="w-5 h-5 lg:w-10 lg:h-10 cursor-pointer" 
            onClick={onClose}
          />


          <div className="flex w-full items-center justify-between">
            <div className="grid text-left font-[Mansfield] gap-0.5">
              <h5 className="font-bold text-lg lg:text-2xl text-[#31BF8F]">
                {food.discountedPrice || food.price}
              </h5>
              {food.discountedPrice && (
                <p className="text-[#E4E4E4] text-xs line-through">{food.price}</p>
              )}
            </div>

            <div className="grid font-[Mansfield] justify-end text-[#E4E4E4] text-right gap-0.5">
              <h4 className="flex items-center gap-2">
                <img src="/icons/clock.svg" alt="" className="" />
                <span className="font-[Mansfield] font-medium text-xs lg:text-sm">Ready in 30-45 mins</span>
              </h4>

              <h4 className="flex items-center text-right justify-end gap-2">
                <img src="/icons/bicycle.svg" alt="" className="" />
                <span className="font-[Mansfield] font-medium text-xs lg:text-sm">Delivery and Pickup available</span>
              </h4>
            </div>
          </div>
        </div>

  </div>
        <div className="grid w-full h-1/2 font-[Mansfield]">
          <div className="w-full border-b border-[#E6E6E6] px-7.5 py-3.5">
            <h3 className="text-black text-[17px] font-bold">{food.title}</h3>
          </div>

          <div className="w-full border-b border-[#E6E6E6] gap-2 flex items-center px-7.5 py-3.5">
            <img src="/icons/star.svg" alt="" className="" />
            <h3 className="text-[#848A9C] text-base font-bold">{food.rating} Reviews</h3>
          </div>

          <div className="w-full border-b border-[#E6E6E6] gap-2 flex items-center px-7.5 py-3.5">
            <img src="/icons/location2.svg" alt="" className="" />
            <h3 className="text-[#848A9C] text-base font-bold">No.20, Adotey St., Accra</h3>
          </div>

          <div className="w-full border-b border-[#E6E6E6] gap-2 flex items-center px-7.5 py-3.5">
            <img src="/icons/discountShape.svg" alt="" className="" />
            <h3 className="text-[#848A9C] text-base font-bold">Offers are available</h3>
          </div>

          <div className="h-[98px] lg:h-[110px] w-full flex">
            <button className="m-auto w-4/6 rounded-full bg-[#2A7F62] text-white font-semibold font-[Mansfield] text-base text-center py-2 lg:py-3.5">
              Order from the mobile app
            </button>
          </div>
        </div>
      </div>
    </ModalLayout>
  )
}

export default FoodCardModal