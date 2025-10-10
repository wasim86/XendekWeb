import React from "react";


const techIcons = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", style: "top-[40px] left-[80px]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", style: "top-[0px] right-[70px]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "Javascript", style: "top-[110px] right-[0px]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap", style: "top-[160px] left-[200px]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP", style: "top-[230px] left-[90px]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", alt: "Wordpress", style: "bottom-[70px] right-[70px]" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg", alt: "Shopify", style: "bottom-[0px] left-[180px]" },
];

const WebTechnology = () => (
  <section className="w-full min-h-screen bg-[#fefbf3] flex items-center py-20 px-3 md:px-0">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center w-full">
      {/* Left */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <p className="uppercase font-bold tracking-widest text-xs text-[#19244c] mb-1">web</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#19244c] mb-5 leading-tight">
          Technologies and <br />
          Platforms We Work <br />
          With
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-lg">
          We deliver customize IT services and solutions to global businesses since 2010, with 100% project delivery success. Hire the best dedicated web developers at affordable prices.
        </p>
        <button className="h-12 w-50 bg-[#ff6584] hover:bg-[#ff4766] text-white font-semibold text-base px-10 py-3 rounded-full shadow-md transition">
          Discover Now
        </button>
      </div>
      {/* Right */}
      <div className="flex-1 mt-12 md:mt-0 flex justify-center items-center relative min-h-[450px]">
        {/* Circles */}
        <div className="absolute w-[350px] h-[350px] md:w-[430px] md:h-[430px] rounded-full border border-[#eceaea] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border border-[#eceaea] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full border border-[#eceaea] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        {/* Central Icon (Bootstrap) */}
        <div className="absolute w-[70px] h-[70px] rounded-full bg-white shadow-lg flex items-center justify-center z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-10 h-10" />
        </div>
        {/* Placing tech icons as floating absolute circles */}
        {techIcons.map((icon, idx) => (
          <div
            key={icon.alt}
            className={`absolute w-[80px] h-[80px] rounded-full bg-white shadow-lg flex items-center justify-center z-0 ${icon.style}`}
            style={{ pointerEvents: "none" }}
          >
            <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WebTechnology;