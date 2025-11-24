const Testimonials = () => {
  return (
    <section id="testimonials" className="flex flex-col md:py-24 gap-4 md:gap-[45px] px-6 max-md:py-24.5 bg-[#f5f8f7] w-full mx-auto md:px-32 lg:px-[153px]">
        <div className="w-full text-center mx-auto  flex-col flex gap-6">
          <h3 className="underline bg-linear-to-r from-[#2a7f62] from-29% text-[15px] to-[#31ae83] to-100% text-transparent bg-clip-text decoration-[#2a7f62] decoration-2 underline-offset-4">TESTIMONIALS</h3>
            <h1 className="text-[#252b33] font-bold text-[28px] md:text-4xl lg:text-5xl">Client Reviews</h1>
        </div>

        <aside className="flex flex-col md:flex-row  items-center gap-14 md:justify-center w-full">
          <div className="flex-col flex md:w-4/6 lg:w-2/3 gap-7.5 lg:max-w-[665px]">
            <p className="text-[#252b33] text-base lg:text-lg leading text-justify lg:text-left">The Kingsway Foods app has completely changed how I order my meals. The menu updates are always on point, delivery is fast, and I love tracking my rider in real time. The loyalty games are a fun bonus—I’ve actually redeemed points for food! Highly recommend.</p>

            <div className="flex items-center gap-4.5">
              <div className="rounded-full border-2 w-20 h-20 border-[#2a7f62]">
                {/* put the client image here  */}
                <img src="/images/profile.svg" alt="" className="" />
              </div>

              <div className="flex-col flex gap-1">
                <h5 className="text-[#2a7f62] text-[22px] font-normal">Allhalal</h5>
                <p className="text-[#828282] text-lg font-normal">Finally a great app with variety</p>
              </div>
            </div>

            <div className="flex gap-8.5 items-center">
              <img src="/icons/arrow-left.svg" alt="" className="" />
              <img src="/icons/arrow-right.svg" alt="" className="" />
            </div>

          </div>

          <div className=" h-full md:w-1/3">
            {/* <Image width={100} height={100} alt="Client" src="/jollof.svg"/> */}
            <img src="/images/jollof.svg" alt="" className="" />
          </div>
        </aside>
    </section>
  )
}

export default Testimonials
