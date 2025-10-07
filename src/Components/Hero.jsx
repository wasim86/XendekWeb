
import React from 'react';
import Banner from "./images/New_Banner.png";

function Hero() {
  const handleGetStarted = () => {
    ;
  };

  return (
    <section className="hero bg-[#fefbf3]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-0 py-16">

        {/* Left side - Text */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center z-10">
  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Launch your new website and start to engage new users
  </h1>
  <p className="mb-6 text-lg md:text-xl">
    Design and develop conversion oriented website for your business with Xendekweb
  </p>
  <button
    className="hover:bg-red-700 duration-200 h-12 w-44 bg-red-400 rounded-full text-white"
    onClick={handleGetStarted}
  >
    Discover Now
  </button>

  {/* Floating symbols */}
  <span className="floating-symbol circle text-red-500">◯</span>
  <span className="floating-symbol triangle text-blue-600">△</span>
  <span className="floating-symbol plus text-green-400">+</span>
  <span className="floating-symbol square text-amber-200">▢</span>
</div>


        {/* Right side - Image */}
       {/* Right side - Image */}
{/* Right side - Image with floating symbols */}
<div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 overflow-hidden">
  <img
    src={Banner}
    alt="Banner"
    className="max-w-full h-auto md:max-w-[600px]"
  />

  {/* Floating symbols around image */}
  <span className="floating-symbol circle text-purple-500 left-0 top-0">◯</span>
  <span className="floating-symbol triangle text-pink-400 right-4 top-6">△</span>
  <span className="floating-symbol plus text-yellow-400 left-6 bottom-4">+</span>
  <span className="floating-symbol square text-blue-300 right-6 bottom-6">▢</span>
</div>




      </div>
    </section>
  );
}

export default Hero;
