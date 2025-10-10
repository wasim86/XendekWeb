// import React from "react";

// // Sample images: Replace these URLs or use your own logo paths
// const brands = [
//   {
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pine_Valley_logo_example.png/120px-Pine_Valley_logo_example.png",
//     alt: "Pine Valley",
//   },
//   {
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Logo_placeholder.svg/120px-Logo_placeholder.svg.png",
//     alt: "JDJ Contracting",
//   },
//   {
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Logo_placeholder.svg/120px-Logo_placeholder.svg.png",
//     alt: "Goodness is Good",
//   },
//   {
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Logo_placeholder.svg/120px-Logo_placeholder.svg.png",
//     alt: "Multiple Fusion",
//   },
// ];

// const BrandsBar = () => (
//   <div className="w-full bg-green-100 py-4 flex items-center justify-center">
//     <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 px-2">
//       {/* Logo list */}
//       <div className="flex-1 flex items-center gap-12 justify-center">
//         {brands.map((brand, idx) => (
//           <img
//             key={brand.alt}
//             src={brand.img}
//             alt={brand.alt}
//             className="h-16 w-auto object-contain grayscale opacity-90"
//             style={{ minWidth: 100 }}
//           />
//         ))}
//       </div>
//       {/* Slogan/title */}
//       <div className="flex flex-col items-center min-w-[280px]">
//         <span className="text-[#232752] text-3xl font-bold text-center leading-tight">
//           We work with the<br />
//           best brands
//         </span>
//       </div>
//     </div>
//   </div>
// );

// export default BrandsBar;


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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Logos */}
        <div className="logo1 flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 flex-1">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="h-30 w-auto  "
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