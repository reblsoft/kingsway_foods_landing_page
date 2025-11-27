
const HeroSection = () => {
  return (
    <section id="home" className="bg-center bg-cover lg:pl-10 xl:pl-0 w-full h-full lg:flex grid max-xl:pt-[148px] max-lg:pb-16 max-lg:gap-[61px] items-center justify-center mx-auto bg-[url('/images/heroSection.png')] xl:py-[167px] max-w-[2024px]">
      
      <div className="gap-10 xl:gap-16 max-md:px-6 max-w-[600px] mx-auto flex flex-col lg:items-start justify-between">
        <div className="flex-col flex max-lg:w-full mx-auto  gap-5 max-lg:text-center max-lg:max-w-2/3">
          <h1 className="font-bold font-[BricolageGrotesque]  max-lg:text-center text-left text-[40px] lg:text-6xl xl:text-[80px]">
            <span className="bg-linear-to-r from-[#2a7f62] from-29% to-[#31ae83] to-100% text-transparent bg-clip-text">Kingsway Food </span>
            <span className=" text-[#252B33]">Delivery App</span>
          </h1>

          <p className="text-[#252B33] text-base font-semibold">Order from our new Kingsway Foods app and enjoy your favourite dishes delivered fresh, fast, easy, and convenient.</p>
        </div>

        <div className="flex items-center justify-center lg:justify-start flex-wrap gap-4 md:gap-5 w-full md:w-auto">
          <button className="text-white w-full sm:w-auto md:w-auto px-8 md:px-10 xl:px-10.5 py-2.5 md:py-3 xl:py-2.5 text-base md:text-lg xl:text-base font-semibold bg-[linear-gradient(104deg,#2a7f62_28%,#31ae83_100%)] rounded-[30px] hover:opacity-90 transition-opacity">
            Download Our App
          </button>

          <button className="border-2 border-[#32A071] px-8 md:px-10 xl:px-10.5 py-2.5 md:py-3 xl:py-2.5 w-full sm:w-auto md:w-auto rounded-[30px] text-base md:text-lg xl:text-base font-semibold bg-white text-[#252B33] hover:bg-gray-50 transition-colors">
            View Our Menu
          </button>
        </div>
      </div>


      <div className="xl:w-1/3 flex mx-auto w-2/3 justify-center lg:w-1/2">
        <img src="/images/mobileUiHand.png" alt="" className="w-full max-md:mx-auto" />
      </div>
    </section>
  )
}

export default HeroSection


