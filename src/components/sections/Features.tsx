import React from "react";
import Image from "next/image";

const Features = () => {
  const leftFeatures = [
    {
      title: "Browse & Order Food",
      description:
        "View Menus, Daily Specials, Add To Cart, And Choose Delivery Or Pickup.",
    },
    {
      title: "Built-In Wallet System",
      description:
        "Add Funds, Pay With Wallet, And Link Beneficiaries To Use Wallet Or Loyalty Points.",
    },
    {
      title: "Gamified Loyalty Program",
      description: "Play In-App Kingsway Q&A Games To Earn Redeemable Points.",
    },
  ];

  const rightFeatures = [
    {
      title: "Referral Bonuses",
      description:
        "Invite Friends And Earn Points Or Cash Rewards For Successful Referrals.",
    },
    {
      title: "Real-Time Delivery Tracking",
      description:
        "Track The Rider On GPS, See ETA, And Follow The Rider's Route.",
    },
    {
      title: "Ratings & Feedback",
      description:
        "Rate Meals And Riders, And Send Suggestions Or Recommendations.",
    },
  ];

  return (
    <div className="h-full bg-[url('/images/wholebg.png')] bg-cover bg-center flex items-center justify-center py-20">
      <div className="flex flex-col w-full gap-16 justify-center items-center px-4">
        {/* Header */}
        <div className="flex-col flex gap-2.5 items-center justify-center">
          <div className="underline text-white text-base tracking-wider">
            FEATURES
          </div>
          <div className="text-white text-5xl font-bold">Awesome Features</div>
        </div>

        {/* Features Layout */}
        <div className="relative flex lg:flex-row flex-col items-center justify-center w-full max-w-7xl">
          {/* Left Features */}
          <div className="flex-1 flex lg:justify-end justify-start lg:pr-8 pl-8">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="
        absolute top-0 bottom-0 w-0.5 bg-white
        left-0 lg:left-auto lg:right-0
      "
              ></div>

              {/* Steps */}
              <div className="space-y-20 lg:py-52 md:py-4 py-8">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="relative">
                    {/* Content */}
                    <div
                      className="
              pl-12
              lg:pl-0 lg:pr-12
              text-left lg:text-right
              max-w-md
            "
                    >
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Circle indicator */}
                    <div
                      className="
              absolute
              left-0 lg:left-auto lg:right-0
              top-0
              -translate-x-1/2 lg:translate-x-1/2
            "
                    >
                      <div className="w-4 h-4 rounded-full bg-[#F0745E] border-4 border-white"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Phone */}
          <div className="shrink-0 z-10">
            <Image
              src="/images/mobileUi.svg"
              alt="Phone"
              width={350}
              height={700}
              className="drop-shadow-2xl"
            />
          </div>

          {/* Right Features */}
          <div className="flex-1 flex justify-start pl-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>

              {/* Steps */}
              <div className="space-y-20 lg:py-52 md:py-4 sm:py-4 py-8">
                {rightFeatures.map((feature, index) => (
                  <div key={index} className="relative">
                    {/* Content */}
                    <div className="pl-12 text-left max-w-md">
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Circle indicator */}
                    <div className="absolute left-0 top-0 transform -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-[#F0745E] border-4 border-white"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;