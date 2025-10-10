import React from "react";
import pinevalley from "./images/pine-valley.png";
import jdjcontracting from "./images/jd-logo.jpg";
import goodness from "./images/good.jpg";
import multiplefusion from "./images/multiple-logo.png";

const brands = [
  {
    src: pinevalley,
    alt: "Pine Valley Motel",
  },
  {
    src: jdjcontracting,
    alt: "J.D.J Contracting",
  },
  {
    src: goodness,
    alt: "Goodness is Good Services LLC",
  },
  {
    src: multiplefusion,
    alt: "Multiple Fusion Investment Corporation",
  },
];

 function BrandsBar() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto flex flex-column md:flex-row items-center justify-between gap-8 px-4">
        {/* Logos */}
        <div className="logo1 flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 flex-1">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="h-30  "
            />
          ))}
        </div>

        {/* Text */}
        <div className="text-center md:text-right flex-shrink-0">
          <h2 className="text-3xl font-bold text-[#161e5c] leading-tight">
            We work with the <br /> best brands
          </h2>
        </div>
      </div>
    </section>
  );
}
export default BrandsBar;