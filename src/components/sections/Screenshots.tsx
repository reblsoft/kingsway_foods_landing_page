import { useState, useEffect } from "react"
import { motion } from "framer-motion";

const Screenshots = () => {

const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4]);

const images = [
  '/images/orderHistory.svg',
  '/images/walletUi.svg',
  '/images/mobileUi.svg',
  '/images/foodDetailsPage.svg',
  '/images/deliverySummaryPage.svg'
];

const positions = [
  'center',
  'right',
  'right1',
  'left1',
  'left'
];

const imageVariants = {
  center: {x: '0%', scale: 1, zIndex: 5, opacity: 1},
  left: {x: '-90%', scale: 0.7, zIndex: 3, opacity: 0.7},
  left1: {x: '-180%', scale: 0.5, zIndex: 1, opacity: 0.5},
  right: {x: '90%', scale: 0.7, zIndex: 3, opacity: 0.7},
  right1: {x: '180%', scale: 0.5, zIndex: 1, opacity: 0.5},
}

useEffect(() => {
  const interval = setInterval(() => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);


  return (
    // <section id="about-us" className="flex-col flex w-full  items-center py-20 lg:gap-10.5">
    // <section id="about-us" className="flex-col flex w-full bg-[url('/images/wholebg.png')] bg-cover items-center py-20 lg:gap-10.5"> 
    <section id="about-us" className="flex-col flex w-full bg-[url('/images/aboutUs.png')] bg-cover items-center py-20 lg:gap-10.5"> 
      <div className="lg:gap-6 gap-2.5 grid text-center w-full">
        <h4 className="underline bg-linear-to-r from-[#2a7f62] from-29% text-[15px] to-[#31ae83] to-100% text-transparent bg-clip-text decoration-[#2a7f62] decoration-2 underline-offset-4">SCREENSHOTS</h4>

        <h1 className="text-[#252b33] lg:text-5xl text-[28px] font-bold ">How our App looks Like</h1>
      </div>
      
      <aside className="flex justify-center items-center relative w-full max-w-[1241px] h-[600px] overflow-hidden">


      {images.map((image,index)=>(
        <motion.img
          key={index}
          src={image}
          alt="Phones Screens"
          className="absolute w-[250px] h-auto"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      ))}


      </aside>

      <div className="flex justify-center gap-[15px] items-center">
        {positionIndexes.map((pos, index) => (
          <span 
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              pos === 0 ? 'bg-[#2a7f62]' : 'bg-[#cccccc]'
            }`}
          ></span>
        ))}
      </div>
    
    </section>
  )
}

export default Screenshots