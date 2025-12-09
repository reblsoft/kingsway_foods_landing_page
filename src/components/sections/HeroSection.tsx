"use client";
import Link from "next/link";
import React from "react";

const Home = () => {
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
        @keyframes bop2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .bop-animation-1 {
          animation: bop 3s ease-in-out infinite;
        }
        
        .bop-animation-2 {
          animation: bop 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .bop-animation-3 {
          animation: bop2 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
      
      <div id="home" className="w-full min-h-screen bg-[url('/images/heroSection.png')] bg-center bg-cover  bg-white flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 xl:w-72 xl:h-72 z-10 hidden lg:block bop-animation-1">
        <img
          src="/images/rice.svg"
          alt="Food Bowl"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 -left-12 w-36 h-36 sm:w-40 sm:h-40 md:w-64 md:h-64 xl:w-84 xl:h-84 z-10 hidden lg:block bop-animation-2">
        <img
          src="/images/salad.svg"
          alt="Food Bowl"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-1/2 right-0 w-36 h-36 sm:w-40 sm:h-40 md:w-64 md:h-64 xl:w-72 xl:h-72 z-10 block lg:hidden bop-animation-1">
        <img
          src="/images/rice.svg"
          alt="Food Bowl"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 -left-12 w-36 h-36 sm:w-40 sm:h-40 md:w-64 md:h-64 xl:w-84 xl:h-84 z-10 block lg:hidden bop-animation-2">
        <img
          src="/images/salad.svg"
          alt="Food Bowl"
          className="w-full h-full object-contain"
        />
      </div>


      <div className="w-10/12mx-auto max-w-[1605px] max-lg:mt-20 xl:mt-28  grid grid-cols-1 lg:grid-cols-2 gap-12 max-lg:justify-center max-lg:items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col max-lg:text-center justify-center space-y-8 z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-[BricolageGrotesque] xl:text-[80px] font-bold text-[#1F2937] leading-tight">
            <span className="text-[#2F9E73] text-nowrap">Kingsway Food</span> <br />
            <span className="text-nowrap">Delivery App</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Order From Our New Kingsway Foods App And Enjoy Your Favourite
            Dishes Delivered Fresh, Fast, Easy, And Convenient.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start items-center">
            <button className="px-8 py-4 bg-[linear-gradient(112.8deg,#2A7F62_27.86%,#31AE83_100%)] text-white font-semibold rounded-full hover:bg-[#258560] transition-colors duration-300 shadow-lg text-lg w-full max-w-xs sm:w-auto sm:max-w-none">
              Download Our App
            </button>
            <Link href={"/our-menu"} className="px-8 py-4 bg-white text-[#1F2937] font-semibold rounded-full border border-[#2F9E73] hover:bg-gray-50 transition-colors duration-300 shadow-sm text-lg w-full max-w-xs sm:w-auto sm:max-w-none">
              View Our Menu
            </Link>
          </div>
        </div>

        {/* Right Column: Phone Image */}
        <div className="relative flex justify-center items-center z-10 w-full">
          {/* Main Phone Image */}
          <div className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
            <img src="/images/holdingPhoneMobile.svg" alt="" className="w-full h-full max-xl:hidden" />
            <img src="/images/holdingPhoneMobile.svg" alt="" className="w-full h-full xl:hidden" />
          </div>
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            className="absolute bottom-0 cursor-pointer -left-10 max-lg:hidden w-fit flex gap-1 items-center"
          >
            <img src="/icons/scrollToBottom.svg" alt="" className="bop-animation-3 w-5 h-7.5" />
            <span className="font-normal text-[#808080] text-sm">Scroll Down</span>
          </button>

        </div>
      </div>
      </div>
    </>
  );
};

export default Home;