import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-[#f5f8f7]'>

      <div className="
        
          py-16
        max-w-[1605px] mx-auto w-11/12
        flex items-start
        max-lg:flex-col
        max-lg:gap-[50px]
        md:flex-row md:justify-between md:items-center lg:items-center
      ">
        
        {/* Logo */}
        <div className="
          w-full object-cover
          max-md:max-w-[121px] max-md:max-h-[72px]
          md:max-w-[150px] md:max-h-[90px] 
          lg:max-w-[181px] lg:max-h-[108px]
        ">
          <img src="/images/kingswayLogo.svg" alt="Kingsway Placeholder" className="w-full" />
        </div>

        {/* Navigation Links */}
        <ul className="
          flex justify-center
          max-md:flex-col max-md:gap-5
          md:flex-row md:gap-8 md:items-center
          lg:gap-[25px]
        ">
          {["About", "Terms & Conditions", "Privacy Policy", "Contact"].map((item) => (
            <li key={item} className="list-none p-0">
              <a
                href=""
                className="
                  text-[#252b33] text-lg font-semibold
                  hover:text-transparent hover:bg-clip-text
                  bg-linear-to-r hover:from-[#2a7f62] hover:via-[#2a7f62] hover:via-29% hover:to-[#31ae83]
                  hover:decoration-[#2a7f62] hover:decoration-2
                  transition-all duration-300
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <ul className="
          flex items-center gap-[15px] 
          md:gap-5
        ">
          {["fb", "twitter", "insta"].map((icon) => (
            <li key={icon} className="list-none p-0">
              <a href="">
                <img src={`/icons/${icon}.svg`} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="w-full mx-auto my-5 lg:text-center md:text-center">
        <p className="text-[#252b33] text-center text-xs md:text-sm lg:text-base" suppressHydrationWarning>
          Copyright © {new Date().getFullYear()} Kingsway Foods
        </p>
      </div>
    </footer>
  )
}

export default Footer
