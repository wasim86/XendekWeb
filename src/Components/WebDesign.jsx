import React from "react";

const WebDesignSection = () => {
  return (
    <section className="bg-[#fefbf3] h-96    ">
      <div className="max-w-7xl  flex  md:flex-row  gap-60">
        {/* Left Section */}
        <div className=" ">    
          <p className="   md:text-sm text-[#22244c]    ">PERFECT SOLUTIONS</p>
          <h1 className="text-[#20244c] text-5xl md:text-6xl font-bold leading-[1.1] mb-3">Web Design &<br />Development</h1>
        </div>
        
       
        
        {/* Right Section */}
        <div className="flex-1">
          <p className="text-[#575c6a]   md:text-xl leading-relaxed ">
            We are knowledgeable web development company offering custom web development solutions. we all know the way to build robust and feature-rich websites, web apps, web portals, eCommerce stores with engaging UI/UX design. Our expert designers and developers ensure that our customers should get best-in-class interactive websites, loved by everyone or the other...
          </p>
          <div className="mt-30">
            <a href="#" className="inline-block text-[#20244c] font-bold text-lg border-b-4 border-[#20244c] pb-1 hover:text-[#2a3785] transition-colors">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;
