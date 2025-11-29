"use client";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <style jsx>{`
        @keyframes bop {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-50px);
          }
        }
        
        .bop-animation-1 {
          animation: bop 3s ease-in-out infinite;
        }
        
        .bop-animation-2 {
          animation: bop 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
      
      <div id="home" className="w-full min-h-screen bg-white flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 z-10 hidden lg:block bop-animation-1">
        <img
          src="/images/rice.svg"
          alt="Food Bowl"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 -left-12 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-84 lg:h-84 z-10 hidden lg:block bop-animation-2">
        <img
          src="/images/salad.svg"
          alt="Food Bowl"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-11/12 xl:mt-28 mx-auto  w-full grid grid-cols-1 lg:grid-cols-2 gap-12 max-lg:justify-center max-lg:items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col max-lg:text-center space-y-8 z-10">
          <h1 className="text-5xl font-[BricolageGrotesque] lg:text-7xl font-bold text-[#1F2937] leading-tight">
            <span className="text-[#2F9E73]">Kingsway Food</span> <br />
            Delivery App
          </h1>

          <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Order From Our New Kingsway Foods App And Enjoy Your Favourite
            Dishes Delivered Fresh, Fast, Easy, And Convenient.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start items-center">
            <button className="px-8 py-4 bg-[linear-gradient(112.8deg,#2A7F62_27.86%,#31AE83_100%)] text-white font-semibold rounded-full hover:bg-[#258560] transition-colors duration-300 shadow-lg text-lg w-full max-w-xs sm:w-auto sm:max-w-none">
              Download Our App
            </button>
            <button className="px-8 py-4 bg-white text-[#1F2937] font-semibold rounded-full border border-[#2F9E73] hover:bg-gray-50 transition-colors duration-300 shadow-sm text-lg w-full max-w-xs sm:w-auto sm:max-w-none">
              View Our Menu
            </button>
          </div>
        </div>

        {/* Right Column: Phone Image */}
        <div className="relative flex justify-center items-center z-10 w-full">
          {/* Main Phone Image */}
          <div className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px]">
            <img
              src="/images/mobileUiHand.svg"
              alt="Kingsway Food Delivery App Interface"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutUs;