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
    <div className="w-full items-center bg-[#F5F8F7] py-16 justify-center " id="about">
      <div className="mx-auto w-11/12 max-w-[1605px] flex flex-col">
        <div className="flex-col flex gap-4 items-center justify-center">
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
              <div className="text-base text-center  text-[#252b33] leading-relaxed">
                {item.subText}
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="grid grid-cols-1 md:flex md:flex-row mx-auto w-11/12 max-w-[1605px] md:items-center md:gap-8 lg:gap-12 xl:gap-16 mt-12 md:mt-16 lg:mt-20 max-md:border-t border-[#252b33]">

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