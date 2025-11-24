const Features = () => {
return (
<section className="w-full mx-auto bg-linear-to-br md:py-16 py-10 from-[#2a7f62] via-[#2a7f62] to-[#31ae83]">
    <div className="lg:gap-6 gap-2.5 grid text-center w-full mb-12">
        <h4 className="text-[15px] text-white/80 underline underline-offset-4 decoration-2 tracking-wider">FEATURES</h4>
        <h1 className="text-white lg:text-5xl text-[28px] font-bold">Awesome Features</h1>
    </div>
    
    <div className="container mobile-bg mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center items-center gap-6 lg:gap-10 xl:gap-16 max-w-7xl mx-auto">
            {/* Left Features */}
            <div className="flex-1 max-w-md h-full py-16">
                <ul className="list-none space-y-0">
                    <li className="group" dir="rtl">
                        <div className="flex flex-row">
                            <div className="items-center flex flex-col justify-around">
                                <div className="border-l-2 h-full border-white"></div>
                                <div className="bg-[#f0745e] border-4 border-white rounded-full h-5 w-5 shrink-0"></div>
                                <div className="border-l-2 h-full border-white"></div>
                            </div>
                            <div className="flex flex-col mr-4 pb-10 lg:pb-12">
                                <h3 className="text-lg lg:text-[22px] font-semibold text-white">Browse & Order Food</h3>
                                <p className="text-sm lg:text-base text-white/80 leading-relaxed">View menus, daily specials, add to cart, and choose delivery or pickup.</p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="group" dir="rtl">
                        <div className="flex flex-row">
                            <div className="items-center flex flex-col justify-around">
                                <div className="border-l-2 h-full border-white"></div>
                                <div className="bg-[#f0745e] border-4 border-white rounded-full h-5 w-5 shrink-0"></div>
                                <div className="border-l-2 h-full border-white"></div>
                            </div>
                            <div className="flex flex-col mr-4 pb-10 lg:pb-12">
                                <h3 className="text-lg lg:text-[22px] font-semibold text-white mb-1.5">Built-in Wallet System</h3>
                                <p className="text-sm lg:text-base text-white/80 leading-relaxed">Add funds, pay with wallet, and link beneficiaries to use wallet or loyalty points.</p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="group" dir="rtl">
                        <div className="flex flex-row">
                            <div className="items-center flex flex-col justify-around">
                                <div className="border-l-2 h-full border-white"></div>
                                <div className="bg-[#f0745e] border-4 border-white rounded-full h-5 w-5 shrink-0"></div>
                                <div className="border-l-2 h-full border-white"></div>
                            </div>
                            <div className="flex flex-col mr-4">
                                <h3 className="text-lg lg:text-[22px] font-semibold text-white mb-1.5">Gamified Loyalty Program</h3>
                                <p className="text-sm lg:text-base text-white/80 leading-relaxed">Play in-app Kingsway Q&A games to earn redeemable points.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            
            {/* Center Phone */}
            <div className="shrink-0 w-[220px] lg:w-[260px] xl:w-[298px] mt-8">
                <img src="/images/mobileUi.png" alt="Mobile App Interface" className="w-full h-auto" />
            </div>
            
            {/* Right Features */}
            <div className="flex-1 max-w-md">
                <ul className="list-none space-y-0">
                    <li className="group">
                        <div className="flex flex-row">
                            <div className="items-center flex flex-col justify-around">
                                <div className="border-l-2 h-full border-white"></div>
                                <div className="bg-[#f0745e] border-4 border-white rounded-full h-5 w-5 shrink-0"></div>
                                <div className="border-l-2 h-full border-white"></div>
                            </div>
                            <div className="flex flex-col ml-4 pb-10 lg:pb-12">
                                <h3 className="text-lg lg:text-[22px] font-semibold text-white mb-1.5">Referral Bonuses</h3>
                                <p className="text-sm lg:text-base text-white/80 leading-relaxed">Invite friends and earn points or cash rewards for successful referrals.</p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="group">
                        <div className="flex flex-row">
                            <div className="items-center flex flex-col justify-around">
                                <div className="border-l-2 h-full border-white"></div>
                                <div className="bg-[#f0745e] border-4 border-white rounded-full h-5 w-5 shrink-0"></div>
                                <div className="border-l-2 h-full border-white"></div>
                            </div>
                            <div className="flex flex-col ml-4 pb-10 lg:pb-12">
                                <h3 className="text-lg lg:text-[22px] font-semibold text-white mb-1.5">Real-Time Delivery Tracking</h3>
                                <p className="text-sm lg:text-base text-white/80 leading-relaxed">Track the rider on GPS, see ETA, and follow the rider`s route.</p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="group">
                        <div className="flex flex-row">
                            <div className="items-center flex flex-col justify-around">
                                <div className="border-l-2 h-full border-white"></div>
                                <div className="bg-[#f0745e] border-4 border-white rounded-full h-5 w-5 shrink-0"></div>
                                <div className="border-l-2 h-full border-white"></div>
                            </div>
                            <div className="flex flex-col ml-4">
                                <h3 className="text-lg lg:text-[22px] font-semibold text-white mb-1.5">Ratings & Feedback</h3>
                                <p className="text-sm lg:text-base text-white/80 leading-relaxed">Rate meals and riders, and send suggestions or recommendations.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        {/* Mobile & Tablet Layout */}
        <div className="md:hidden flex flex-col max-w-2xl mx-auto">
            {/* Top Features with Timeline */}
            <div className="relative pl-8 mb-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>
                
                <div className="space-y-8">
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-[#f0745e] rounded-full border-4 border-white"></div>
                        <h3 className="font-semibold text-xl sm:text-[22px] text-white mb-1.5">Browse & Order Food</h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">View menus, daily specials, add to cart, and choose delivery or pickup.</p>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-[#f0745e] rounded-full border-4 border-white"></div>
                        <h3 className="font-semibold text-xl sm:text-[22px] text-white mb-1.5">Built-in Wallet System</h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">Add funds, pay with wallet, and link beneficiaries to use wallet or loyalty points.</p>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-[#f0745e] rounded-full border-4 border-white"></div>
                        <h3 className="font-semibold text-xl sm:text-[22px] text-white mb-1.5">Gamified Loyalty Program</h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">Play in-app Kingsway Q&A games to earn redeemable points.</p>
                    </div>
                </div>
            </div>
            
            {/* Phone Image */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] mx-auto mb-8">
                <img src="/images/mobileUi.png" alt="Mobile App" className="w-full h-auto" />
            </div>
            
            {/* Bottom Features with Timeline */}
            <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>
                
                <div className="space-y-8">
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-[#f0745e] rounded-full border-4 border-white"></div>
                        <h3 className="font-semibold text-xl sm:text-[22px] text-white mb-1.5">Referral Bonuses</h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">Invite friends and earn points or cash rewards for successful referrals.</p>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-[#f0745e] rounded-full border-4 border-white"></div>
                        <h3 className="font-semibold text-xl sm:text-[22px] text-white mb-1.5">Real-Time Delivery Tracking</h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">Track the rider on GPS, see ETA, and follow the rider`s route.</p>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-[#f0745e] rounded-full border-4 border-white"></div>
                        <h3 className="font-semibold text-xl sm:text-[22px] text-white mb-1.5">Ratings & Feedback</h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">Rate meals and riders, and send suggestions or recommendations.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
}

export default Features