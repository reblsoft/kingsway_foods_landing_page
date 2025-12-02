import { useState } from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "The Kingsway Foods app has completely changed how I order my meals. The menu updates are always on point, delivery is fast, and I love tracking my rider in real time. The loyalty games are a fun bonus—I've actually redeemed points for food! Highly recommend.",
      name: "Allhalal",
      subtitle: "Finally a great app with variety",
      image: "/images/profile.svg"
    },
    {
      text: "Best food delivery experience I've had. The interface is clean, ordering is seamless, and the fufu always arrives hot. Customer support responded within minutes when I had a question. This is now my go-to app for meals. Please be generous with the meat next time😂❤️",
      name: "Korkoe Dumashie",
      subtitle: "Outstanding service every time",
      image: "/images/korkoe.png"
    },
    {
      text: "I was skeptical at first, but Kingsway Foods exceeded my expectations. The variety of restaurants is impressive, and the real-time tracking feature gives me peace of mind. Plus, earning rewards while ordering is a nice touch!",
      name: "Ama Osei",
      subtitle: "Impressed with everything",
      image: "/images/girlProfile.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];
  const reviewsLeft = reviews.length - currentIndex - 1;

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
    <section id="testimonials" className="flex relative flex-col md:py-24 gap-4 md:gap-[45px] px-6 max-md:py-24.5 w-full mx-auto md:px-32 lg:px-[153px]">
      <div className="absolute bottom-0 -left-20 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-84 lg:h-84 z-10 hidden lg:block bop-animation-2">
        <img
          src="/images/samosa.svg"
          alt="Food Bowl"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full text-center mx-auto flex-col flex gap-6">
        <h3 className="underline bg-linear-to-r from-[#2a7f62] from-29% text-[15px] to-[#31ae83] to-100% text-transparent bg-clip-text decoration-[#2a7f62] decoration-2 underline-offset-4">TESTIMONIALS</h3>
        <h1 className="text-[#252b33] font-bold text-[28px] md:text-4xl lg:text-5xl">Client Reviews</h1>
      </div>

      <aside className="flex flex-col md:flex-row items-center gap-14 md:justify-center mx-auto w-11/12 max-w-[1605px] ">
        <div className="flex-col flex md:w-4/6 lg:w-2/3 gap-7.5 lg:max-w-[665px]">
          <p className="text-[#252b33] text-base lg:text-lg leading text-justify lg:text-left">
            {currentReview.text}
          </p>

          <div className="flex items-center gap-4.5">
            <div className="rounded-full border-2 w-20 h-20 border-[#2a7f62] overflow-hidden">
              <img src={currentReview.image} alt="" className="w-full  h-full object-cover" />
            </div>

            <div className="flex-col flex gap-1">
              <h5 className="text-[#2a7f62] text-[22px] font-normal">{currentReview.name}</h5>
              <p className="text-[#828282] text-lg font-normal">{currentReview.subtitle}</p>
            </div>
          </div>

          <div className="flex gap-8.5 items-center">
            {/* <button onClick={handlePrev} className="cursor-pointer">

              <img src="/icons/arrow-left.svg" alt="Previous review" />
            </button> */}
            <span 
              className={`rounded-[30px] flex justify-center items-center w-[60px] h-[35px] cursor-pointer ${
                reviewsLeft < reviews.length - 1 ? 'bg-white' : 'bg-transparent'
              }`}
              onClick={handlePrev}
            >
            <img src="/icons/arrow-left.svg" alt="Previous review" />
            </span>
            <span 
              className={`rounded-[30px] flex justify-center items-center w-[60px] h-[35px] cursor-pointer ${
                reviewsLeft > 0 ? 'bg-white' : 'bg-transparent'
              }`}
              onClick={handleNext}
            >
              <img src="/icons/arrow-right.svg" alt="Next review" />
            </span>
          </div>
        </div>

        <div className="h-full md:w-1/3">
        
          <img src="/images/jollof.svg" alt="" className="" />
        </div>
      </aside>
    </section>
    </>
  );
};

export default Testimonials;