import React from "react";

const stats = [
  { value: "120", label: "Projects" },
  { value: "56", label: "People" },
  { value: "4", label: "Years" },
  { value: "2", label: "Offices" }
];

const StatsBar = () => (
  <section className="bg-[#fefbf3]">
    <div className="max-w-6xl mx-auto flex">
      {stats.map((stat, idx) => (
        <div key={stat.label} className="flex-1 flex flex-col items-center relative">
          <span className="text-[7rem] md:text-[8rem] font-bold text-gray-300 leading-none select-none">
            {stat.value}
          </span>
          <span className="text-xl md:text-2xl font-semibold text-black absolute left-1/2 -translate-x-1/2 top-[60%] md:top-[65%]">
            {stat.label}
          </span>
          {idx !== stats.length - 1 && (
            <div className="hidden md:block absolute right-0 top-[15%] h-[70%] border-r border-gray-200" />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
