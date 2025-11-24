import React from 'react'

const AboutUs = () => {
  return (
    <section className='max-md:px-6 max-md:pb-32 max-md:gap-16 bg-[#f5f8f7] flex-col w-full  flex items-center text-center'>

    <div className="space-y-12.5">
      <div className='grid gap-6'>
            <h4 className="underline bg-linear-to-r from-[#2a7f62] from-29% text-[15px] to-[#31ae83] to-100% text-transparent bg-clip-text decoration-[#2a7f62] decoration-2 underline-offset-4">ABOUT US</h4>

      <h1 className="text-[26px] sm:text-[28px]  lg:text-5xl font-bold text-[#252b33]">
        Why are we unique ?
      </h1></div>

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-7.5 lg:gap-8">
      {/* <div className="flex items-center lg:px-32 md:px-10 max-md:flex-col gap-[30px] justify-center"> */}

        <div className="flex-col md:py-8 lg:py-12.5 flex gap-5 justify-center items-center">
          <div className="w-20 h-20 lg:w-22 lg:h-22 flex items-center justify-center rounded-full bg-white">
          <img src="/icons/level-up.svg" alt="" className="bg-cover" />
          </div>

          <div className="flex-col flex max-w-[280px] gap-5 items-center text-center">
            <h2 className="text-[#252b33] text-[22px] min-h-12 lg:min-h-14 font-semibold leading-tight">We’ve upped the game.</h2>
            <p className="font-normal text-center capitalize text-base leading-relaxed">We carry a variety of Foods through our Stores that you can’t typically get Delivered.</p>
          </div>
        </div>

        <div className="flex-col md:py-8 lg:py-12.5 flex gap-5  justify-center items-center">
          <div className="w-20 h-20 lg:w-22 lg:h-22 flex items-center justify-center rounded-full bg-white">
          <img src="/icons/level-up.svg" alt="" className="bg-cover" />
          </div>

          <div className="flex-col flex max-w-[280px] gap-5 items-center text-center">
            <h2 className="text-[#252b33] text-[22px] min-h-12 lg:min-h-14 font-semibold leading-tight">Order From our app of our branches</h2>
            <p className="font-normal text-center capitalize text-base leading-relaxed">Order from a large variety of local stores you like and it will get delivered.</p>
          </div>
        </div>

        <div className="flex-col md:py-8 lg:py-12.5 flex gap-5 justify-center items-center">
          <div className="w-20 h-20 lg:w-22 lg:h-22 flex items-center justify-center rounded-full bg-white">
          <img src="/icons/level-up.svg" alt="" className="bg-cover" />
          </div>

          <div className="flex-col flex max-w-[280px] gap-5 items-center text-center">
            <h2 className="text-[#252b33] text-[22px] min-h-12 lg:min-h-14 font-semibold leading-tight">Easy Access to Discounted Orders</h2>
            <p className="font-normal text-center capitalize text-base leading-relaxed">Easy access to discounted services and orders.</p>
          </div>
        </div>



        
      </div>
    </div>
    </div>

    <div className="grid grid-cols-1 lg:px-[158px] lg:flex lg:w-full lg:mx-auto lg:items-center lg: max-sm-md:border-t border-[#252b33] lg:gap-16">
      <div className="max-md:py-16 grid lg:w-2/5 mx-auto gap-16">
        <div className="grid lg:text-left lg:pr-10 gap-6">
        <h3 className='capitalize text-[28px] self-end font-[BricolageGrotesqueSemiBold]'>The innovative way to Order Food</h3>

        <p className="text-base lg:text-lg text-[#252B33]">When you join us you will enjoy our new and improved way of ordering through our virtual Kitchen experience</p>
        </div>
      <div className="flex flex-col h-full gap-16 w-full">
        <div className="flex max-md:justify-between gap-5 items-center">
          <img src="/images/googlePlay.png" alt="" className="" />
          <img src="/images/appStore.png" alt="" className="" />
        </div>
        
      </div>




      </div>
        <div className="lg:hidden">
          <img src="/images/aboutUsGroupMobile.png" alt="" className="mx-auto" />
        </div>
        <div className="max-lg:hidden">
          <img src="/images/aboutUsGrouplg.png" alt="" className="mx-auto" />
        </div>

        
    </div>

      
    </section>
  )
}

export default AboutUs
