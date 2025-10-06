import React from "react";

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
  <>
    <section className="w-full min-h-screen bg-[#ffffff] flex items-center justify-center py-15 px-4">
      <div className="max-w-6xl bg-white    flex flex-col lg:flex-row items-center p-8 lg:p-14 w-full">
        {/* Left Image */}
        <div className="flex-[0.9] flex flex-col justify-center items-center mb-8 lg:mb-0">
         
        </div>
        {/* Right Text */}
        <div className="flex-1 lg:pl-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#22224c] mb-8">
            Web development<br />process
          </h2>
          <ol className="text-gray-600 space-y-4 mb-2 text-base md:text-lg">
            {steps.map((step, idx) => (
              <li key={idx}>
                <span className="font-bold text-[#22224c]">{idx + 1}) {step.title}: </span>
                {step.desc}
              </li>
            ))}
          </ol>
        </div>
        
      </div>
     
     
    </section>
   
    <button className=" h-12  w-45 align-items-center hover:bg-emerald-700 bg-emerald-500 rounded-full text-white  flex flex-col justify-center items-center" >
          Visit the Websites
        </button>
      
 </>);
 
};

export default Process;
