import React from "react";
import webProcessLogo from "./Images/webProcess-logo.png";

// Process steps data
const steps = [
  {
    title: "Information Gathering",
    desc: "We carry out research and consult with our clients to thoroughly understand the project objectives."
  },
  {
    title: "Strategy & Planning",
    desc: "We make requirement documents, wireframes of pages, clickable prototypes, and sitemaps."
  },
  {
    title: "Web Design",
    desc: "We create a completely custom website design to ensure that the website is rich in features, user-friendly, unique, and attractive."
  },
  {
    title: "Web development",
    desc: "After the design is chosen, the most suitable web development platform is chosen to satisfy both the requirements and the budget of the client."
  },
  {
    title: "Testing",
    desc: "For review purposes, we launch the beta release and check the page speed & word-to-word content, and w3c validation."
  },
  {
    title: "Launch",
    desc: "Once we get the final approval from the client, the website is then launched on the live server to meet the purpose."
  },
  {
    title: "Maintenance",
    desc: "It's not over yet! The website needs constant care and upgrading service which we provide after this."
  }
];

const Process = () => {
  return (
    <section className="  bg-[#fefbf3] flex flex-col md:flex-row items-center justify-center py-16 px-4">
      <div className="max-w-7xl    mx-auto">
        {/* Main Content Container with Flexbox Layout */}
        <div >
          <div className="flex flex-col xl:flex-row min-h-[600px]">
            
            {/* Left Image Section - Fixed Width on Large Screens */}
            <div className="xl:w-2/5 w-full flex items-center justify-center p-8 lg:p-12 xl:pr-6">
              <div className="w-full max-w-md xl:max-w-full">
                <img 
                  src={webProcessLogo} 
                  alt="Web Development Process" 
                  className="w-full h-auto object-contain max-h-96 xl:max-h-full"
                />
              </div>
            </div>
            
            {/* Right Text Section - Flexible Width */}
            <div className="xl:w-3/5 w-full flex flex-col justify-center p-8 lg:p-12 xl:pl-6 xl:pr-12">
              {/* Title */}
              <div className="mb-8 xl:mb-10">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#22224c] leading-tight text-center xl:text-left">
                  Web development<br />process
                </h2>
              </div>
              
              {/* Process Steps List */}
              <div className="mb-10 xl:mb-12">
                <ol className="text-gray-600 space-y-5 text-base lg:text-lg">
                  {steps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="font-bold text-[#22224c] text-lg">
                        {idx + 1}) {step.title}:{" "}
                      </span>
                      <span className="text-gray-700">{step.desc}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              {/* CTA Button */}
              <div className="flex justify-center xl:justify-start">
                <button className="inline-flex items-center px-10 py-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 transition-all duration-300 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Visit the Websites
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
 
};

export default Process;