import React from "react";
import about from "./Images/AboutImage.png";
const About = () => {
  return (
   
     
    <div className="container flex flex-col md-flex-row items-center justify-between py-10">
  <img
    src={about}
    alt="about"
    className="rotate-about w-full md-max-w-390px object-cover"
  />
  <div className="content-area mt-6 md-ml-10 max-w-xl">
    <div className="subtitle uppercase tracking-widest font-semibold text-[#2b2f4b] text-xs">
      What We Do
    </div>
    <h1 className="title font-bold text-4xl md:text-5xl mb-6 text-[#2b2f4b] leading-tight">
      We improve your online presence.
    </h1>
    <p className="description text-[#141414] text-base mb-4">
      Imagine your website as your leading 24/7 salesperson. Your website makes the first impression on your visitors. If the first impression is positive, the visitors will stay on your site to find out more.
    </p>
    <p className="description text-[#141414] text-base mb-4">
      Effective online advertising helps you reach the right audience, but a well-designed website helps convert your traffic into leads.
    </p>
    <p className="description text-[#141414] text-base mb-8">
      Our company focuses on providing all the essential elements that are necessary to make your website look good and reach your target audience.
    </p>
    <button className="btn-discover px-6 py-3 rounded-full bg-[#32d97] text-white text-lg font-semibold shadow hover:bg-[#28b87e] transition-all">
      Discover Now
    </button>
  </div>
</div>
  );
};

export default About;