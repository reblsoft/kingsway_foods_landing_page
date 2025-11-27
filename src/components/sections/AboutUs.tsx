// import React from 'react'

// const AboutUs = () => {
//   return (
//     <section className='max-md:px-6 max-md:pb-32 px-4 py-12 md:py-16 lg:py-20 bg-[#f5f8f7] flex-col w-full h-full flex items-center text-center'>

//     <div className="space-y-12 md:space-y-16 w-full max-w-7xl">
//       <div className='grid gap-6'>
//         <h4 className="underline bg-linear-to-r from-[#2a7f62] from-29% text-[15px] to-[#31ae83] to-100% text-transparent bg-clip-text decoration-[#2a7f62] decoration-2 underline-offset-4">ABOUT US</h4>

//         <h1 className="text-[26px] sm:text-[28px] md:text-4xl lg:text-5xl font-bold text-[#252b33]">
//           Why are we unique ?
//         </h1>
//       </div>

//       <div className="w-full mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 md:gap-8 lg:gap-10">

//           <div className="flex-col py-8 md:py-10 lg:py-12 flex gap-5 justify-center items-center">
//             <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-white shrink-0">
//               <img src="/icons/level-up.svg" alt="" className="bg-cover" />
//             </div>

//             <div className="flex-col flex max-w-[280px] gap-4 items-center text-center">
//               <h2 className="text-[#252b33] text-[20px] md:text-[22px] min-h-12 lg:min-h-14 font-semibold leading-tight">We&apos;ve upped the game.</h2>
//               <p className="font-normal text-center capitalize text-sm md:text-base leading-relaxed">We carry a variety of Foods through our Stores that you can’t typically get delivered.</p>
//             </div>
//           </div>

//           <div className="flex-col py-8 md:py-10 lg:py-12 flex gap-5 justify-center items-center">
//             <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-white shrink-0">
//               <img src="/icons/green-shopping-bag.svg" alt="" className="bg-cover" />
//             </div>

//             <div className="flex-col flex max-w-[280px] gap-4 items-center text-center">
//               <h2 className="text-[#252b33] text-[20px] md:text-[22px] min-h-12 lg:min-h-14 font-semibold leading-tight">Order From our app of our branches</h2>
//               <p className="font-normal text-center capitalize text-sm md:text-base leading-relaxed">Order from a large variety of local stores you like and it will get delivered.</p>
//             </div>
//           </div>

//           <div className="flex-col py-8 md:py-10 lg:py-12 flex gap-5 justify-center items-center sm:col-span-2 md:col-span-1">
//             <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-white shrink-0">
//               <img src="/icons/discount.svg" alt="" className="bg-cover" />
//             </div>

//             <div className="flex-col flex max-w-[280px] gap-4 items-center text-center">
//               <h2 className="text-[#252b33] text-[20px] md:text-[22px] min-h-12 lg:min-h-14 font-semibold leading-tight">Easy Access to Discounted Orders</h2>
//               <p className="font-normal text-center capitalize text-sm md:text-base leading-relaxed">Easy access to discounted services and orders.</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>

//     <div className="grid grid-cols-1 md:flex md:flex-row w-full max-w-7xl mx-auto md:items-center md:gap-8 lg:gap-12 xl:gap-16 mt-12 md:mt-16 lg:mt-20 max-md:border-t border-[#252b33]">
//       <div className="max-md:py-16 grid md:w-1/2 lg:w-2/5 gap-8 md:gap-10 lg:gap-12 px-4 md:px-0">
//         <div className="grid gap-6 text-center md:text-left">
//           <h3 className='capitalize text-[24px] md:text-[26px] lg:text-[28px] font-[BricolageGrotesqueSemiBold] leading-tight'>The innovative way to Order Food</h3>

//           <p className="text-base lg:text-lg text-[#252B33] leading-relaxed">When you join us you will enjoy our new and improved way of ordering through our virtual Kitchen experience</p>
//         </div>
        
//         <div className="flex flex-row max-md:justify-center md:justify-start gap-4 md:gap-5 items-center flex-wrap">
//           <img src="/images/googlePlay.png" alt="" className="" />
//           <img src="/images/appStore.png" alt="" className="" />
//         </div>
//       </div>

//       <div className="md:w-1/2 lg:w-3/5 px-4 md:px-0">
//         <div className="lg:hidden">
//           <img src="/images/aboutUsGroupMobile.png" alt="" className="mx-auto" />
//         </div>
//         <div className="max-lg:hidden">
//           <img src="/images/aboutUsGrouplg.png" alt="" className="mx-auto" />
//         </div>
//       </div>
//     </div>

      
//     </section>
//   )
// }

// export default AboutUs

import React from "react";

const featureCards = [
  {
    image: "/icons/level-up.svg",
    capText: "We've Upped The Game.",
    subText:
      "We Carry A Variety Of Foods Through Our Stores That You Can't Typically Get Delivered.",
  },
  {
    image: "/icons/green-shopping-bag.svg",
    capText: "Order From Our App Or Our Branches",
    subText:
      "Order From A Large Variety Of Local Stores You Like And It Will Get Delivered.",
  },
  {
    image: "/icons/discount.svg",
    capText: "Easy Access To Discounted Orders",
    subText: "Easy Access To Discounted Services And Orders.",
  },
];

const AboutUs = () => {
  return (
    <div className="w-full items-center bg-[#F5F8F7] justify-center " id="about">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex-col flex gap-2.5 items-center justify-center">
          <div className="underline bg-linear-to-r from-[#2a7f62] from-29% text-[15px] to-[#31ae83] to-100% text-transparent bg-clip-text decoration-[#2a7f62] decoration-2 underline-offset-4 text-base tracking-wider">ABOUT US</div>
          <div className=" lg:text-5xl text-2xl font-bold">
            Why are we unique ?
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-16">
          {featureCards.map((item, i) => (
            <div key={i} className="flex flex-col text-[#252b33] gap-2.5 items-center">
              <img src={item.image} alt={item.capText} className="mb-4" />
              <div className="text-xl font-semibold  text-[#252b33] text-center leading-relaxed">
                {item.capText}
              </div>
              <div className="text-gray-600 text-base text-center  text-[#252b33] leading-relaxed">
                {item.subText}
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="grid grid-cols-1 md:flex md:flex-row w-full max-w-7xl mx-auto md:items-center md:gap-8 lg:gap-12 xl:gap-16 mt-12 md:mt-16 lg:mt-20 max-md:border-t border-[#252b33]">

      <div className="max-md:py-16 grid md:w-1/2 lg:w-2/5 gap-8 md:gap-10 lg:gap-12 px-4 md:px-0">

        <div className="grid gap-6 text-center md:text-left">
          <h3 className='capitalize text-[24px] md:text-[26px] lg:text-[28px] font-[BricolageGrotesqueSemiBold] leading-tight'>The innovative way to Order Food</h3>


          <p className="text-base lg:text-lg text-[#252B33] leading-relaxed">When you join us you will enjoy our new and improved way of ordering through our virtual Kitchen experience</p>

        </div>
        

        <div className="flex flex-row max-md:justify-center md:justify-start gap-4 md:gap-5 items-center flex-wrap">

          <img src="/images/googlePlay.png" alt="" className="" />

          <img src="/images/appStore.png" alt="" className="" />

        </div>

      </div>


      <div className="md:w-1/2 lg:w-3/5 px-4 md:px-0">

        <div className="lg:hidden">

          <img src="/images/aboutUsGroupMobile.png" alt="" className="mx-auto" />

        </div>

        <div className="max-lg:hidden">
            <img src="/images/aboutUsGrouplg.png" alt="" className="mx-auto" />

        </div>

      </div>

    </div>
    </div>
  );
};

export default AboutUs;