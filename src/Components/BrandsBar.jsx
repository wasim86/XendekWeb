import React from "react";

// Sample images: Replace these URLs or use your own logo paths
const brands = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pine_Valley_logo_example.png/120px-Pine_Valley_logo_example.png",
    alt: "Pine Valley",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Logo_placeholder.svg/120px-Logo_placeholder.svg.png",
    alt: "JDJ Contracting",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Logo_placeholder.svg/120px-Logo_placeholder.svg.png",
    alt: "Goodness is Good",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Logo_placeholder.svg/120px-Logo_placeholder.svg.png",
    alt: "Multiple Fusion",
  },
];

const BrandsBar = () => (
  <div className="w-full bg-green-100 py-4 flex items-center justify-center">
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 px-2">
      {/* Logo list */}
      <div className="flex-1 flex items-center gap-12 justify-center">
        {brands.map((brand, idx) => (
          <img
            key={brand.alt}
            src={brand.img}
            alt={brand.alt}
            className="h-16 w-auto object-contain grayscale opacity-90"
            style={{ minWidth: 100 }}
          />
        ))}
      </div>
      {/* Slogan/title */}
      <div className="flex flex-col items-center min-w-[280px]">
        <span className="text-[#232752] text-3xl font-bold text-center leading-tight">
          We work with the<br />
          best brands
        </span>
      </div>
    </div>
  </div>
);

export default BrandsBar;
