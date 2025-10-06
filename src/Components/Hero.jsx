
import React from 'react';

function Hero() {
  const handleGetStarted = () => {
    ;
  };

  return (
    <section className='hero  '>
      <div className="  max-w-2xl ">
       
        <h1 className="text-6xl font-bold mt-[100px] ">Launch your new website and start to engage new users</h1>
        <p>Design and develop conversion oriented website for your business with Xendekweb</p>
        <button className="hover:bg-red-700 duration-200 h-12  w-45 bg-red-400 rounded-full text-white" onClick={handleGetStarted}>
          Discover Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
