// components/About.js
import React from 'react';

function About() {
  return (
    <section className="about bg-white-100">
      <div className="container bg-white-100">
        <p className=' flex items-center justify-center bg-white-100'>WHAT WE DO</p>
        <h2>We improve your online presence</h2>
        <div className="about-content bg-white-100">
          <p>
            Imagine your website as your leading 24/7 salesperson. Your website makes the 
            first impression on your visitors. If the first impression is positive, the 
            visitors will stay on your site to find out more.
          </p>
          <p>
            Effective online advertising helps you reach the right audience, but a well-designed 
            website helps convert your traffic into leads.
          </p>
          <p>
            Our company focuses on providing all the essential elements that are necessary to 
            make your website look good and reach your target audience.
          </p>
          <button className=" bt1 h-13 flex justify-center items-center  w-50 hover:bg-emerald-700 bg-emerald-500  rounded-full text-white">
          Discover Now
        </button>
        </div>
        
        {/* <div className="web-development-section text-5xl">
          <h3>Web Design & Development</h3>
          <p  className='text-lg mt-5'>
            We are knowledgeable web development company offering custom web development solutions. 
            We all know the way to build robust and feature-rich websites, web apps, web portals, 
            eCommerce stores with engaging UI/UX design.
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default About;
