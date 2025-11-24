import { useState } from "react"
import { motion, scale } from "motion/react";

const Screenshots = () => {

const [positionIndexes, setPositionIndexs] = useState([0,1,2,3,4]);

const positions = [
  'center',
  'left1',
  'left',
  'right',
  'right1'
];

const imageVariants = {
  center: {x: '0%',scale:1,zIndex:5},
  left1: {x: '-50%',scale:0.7,zIndex:2},
  left: {x: '-50%',scale:0.7,zIndex:2},
  right: {x: '-50%',scale:0.7,zIndex:2},
  right1: {x: '-50%',scale:0.7,zIndex:2},
}


  return (
    <div className='flex-col flex w-full items-center lg:py-20 lg:gap-10.5'>
      <div className="lg:gap-6 grid text-center w-full">
        <h4 className="underline bg-linear-to-r from-[#2a7f62] from-29% text-[15px] to-[#31ae83] to-100% text-transparent bg-clip-text decoration-[#2a7f62] decoration-2 underline-offset-4">SCREENSHOTS</h4>

        <h1 className="text-[#252b33] lg:text-5xl font-bold ">How our App looks Like</h1>
      </div>
      
      <aside className="flex justify-center gap-[50px] max-w-[1241px]">


      <div className="scroller_inner flex">
        <div className="lg:max-w-[201px] lg:max-h-[435px] object-cover">
          <img src="/images/orderHistory.svg" alt="" className="" />
        </div>

        <div className="lg:max-w-[201px] lg:max-h-[435px] object-cover">
          <img src="/images/walletUi.svg" alt="" className="" />
        </div>

        <div className="lg:max-w-[201px] lg:max-h-[435px] object-cover">
          <img src="/images/mobileUi.svg" alt="" className="" />
        </div>
        
        <div className="lg:max-w-[201px] lg:max-h-[435px] object-cover">
          <img src="/images/foodDetailsPage.svg" alt="" className="" />
        </div>


        <div className="lg:max-w-[201px] lg:max-h-[435px] object-cover">
          <img src="/images/deliverySummaryPage.svg" alt="" className="" />
        </div>

      </div>


      </aside>

      <div className="flex justify-center gap-[15px] items-center">
        <span className="w-2.5 h-2.4 rounded-full bg-[#cccccc]"></span>
        <span className="w-2.5 h-2.4 rounded-full bg-[#cccccc]"></span>
        <span className="w-2.5 h-2.4 rounded-full bg-[#cccccc]"></span>
        <span className="w-2.5 h-2.4 rounded-full bg-[#cccccc]"></span>
        <span className="w-2.5 h-2.4 rounded-full bg-[#cccccc]"></span>
      </div>
    
    </div>
  )
}

export default Screenshots
