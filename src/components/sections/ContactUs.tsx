

const ContactUs = () => {
  return (
    <section id="contact" className='flex flex-col lg:flex-row w-full justify-around bg-white items-center max-md:pb-10'>
        <div className="lg:w-1/3 w-full">
          <img src="/images/noodles.svg"alt="" className="" />
        </div>
        <aside className="flex-col lg:w-1/2 w-full max-w-[657px] mx-auto md:justify-between px-5 flex gap-7.5 lg:gap-16">

          <div className="flex-col flex gap-4 lg:gap-[15px] w-full items-center text-center">
            <h3 className="underline bg-linear-to-r from-[#2a7f62] from-29% text-[15px] to-[#31ae83] to-100% text-transparent bg-clip-text decoration-[#2a7f62] decoration-2 underline-offset-4">CONTACT US</h3>
            <h1 className="text-[28px] md:text-4xl lg:text-5xl font-bold text-[#252b33]">Get In Touch With Us!</h1>
          </div>

          <form action="" className="flex-col mx-auto flex w-full gap-[15px]">
            <input type="text" placeholder="Your Name" className="w-full h-[55px] px-5 py-3 rounded-[10px] border border-[#CCCCCC]" />
            <input type="email" placeholder="Your Email" className="w-full  h-[55px] px-5 py-3 rounded-[10px] border border-[#CCCCCC]" />

            <textarea name="" className="w-full resize-none border border-[#CCCCCC] rounded-[10px]  h-[130px] px-5 py-3" placeholder="Your Message" id=""></textarea>

            <button className="text-white w-fit space-y-4 mx-auto px-10.5 py-2.5 bg-[linear-gradient(104deg,#2a7f62_28%,#31ae83_100%)] rounded-[30px]"> Send Now</button>
          </form>
        </aside>
    </section>
  )
}

export default ContactUs
