// components/Services.js
import React from 'react';
import EmailLogo from './images/email_Logo.jpg';
import PalleteImage from './images/Pallete.png';
import ShoppingImage from './images/shopping-cart.png';
import FlatiiconImage from './images/Flatiicon.png';
import MarkettingImage from './images/Marketting.png';
import DEVImage from './images/DEV.png';








function Services() {
  const services = [
    {
      id: 1,
      title: "Web & CMS Development",
      description: "Custom web development solutions"
    },
    {
      id: 2,
      title: "Designing Services",
      description: "Creative and attractive designs"
    },
    {
      id: 3,
      title: "E-Commerce Development",
      description: "Online store development"
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications"
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Online marketing strategies"
    },
    {
      id: 6,
      title: "Hire Dedicated Developer",
      description: "Dedicated development resources"
    }
  ];

  return (
  
    <section className="services ">
  <div className="container relative z-10 text-center font-[inherit]">
    <div className="about-page bg-[#fefbf6] p-10 text-center rounded-lg">
      <h1 className="sc_item_subtitle sc_title_subtitle sc_align_center sc_item_subtitle_above sc_item_title_style_default">ABOUT US</h1>
      <h2 className="w-[700px] text-[50px] ml-[230px] leading-[1] font-[cursive] text-[#181D4E]">
        We offer expert web and marketing services
      </h2>
    </div>
   <div className="services-grid mt-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {/* Conditional image rendering for the first service */}
              {service.id === 1 && (
                <img 
                  src={EmailLogo} 
                  alt={`${service.title} icon`} 
                  className="service-icon" 
                  style={{ width: '50px', height: '50px', margin: '0 auto 10px' }} 
                />
              )}
              {/* 2. CONDITIONAL IMAGE RENDERING FOR THE SECOND SERVICE */}
              {service.id === 2 && (
                <img 
                  src={PalleteImage} // Use the new imported image
                  alt={`${service.title} icon`} 
                  className="service-icon" 
                  style={{ width: '50px', height: '50px', margin: '0 auto 10px' }} 
                />
              )}
               {service.id === 3 && (
                <img 
                  src={ShoppingImage} // Use the new imported image
                  alt={`${service.title} icon`} 
                  className="service-icon" 
                  style={{ width: '50px', height: '50px', margin: '0 auto 10px' }} 
                />
              )}
              {service.id === 4 && (
                <img 
                  src={FlatiiconImage} // Use the new imported image
                  alt={`${service.title} icon`} 
                  className="service-icon" 
                  style={{ width: '50px', height: '50px', margin: '0 auto 10px' }} 
                />
              )}
              {service.id === 5 && (
                <img 
                  src={MarkettingImage} // Use the new imported image
                  alt={`${service.title} icon`} 
                  className="service-icon" 
                  style={{ width: '50px', height: '50px', margin: '0 auto 10px' }} 
                />
              )}
              {service.id === 6 && (
                <img 
                  src={DEVImage} // Use the new imported image
                  alt={`${service.title} icon`} 
                  className="service-icon" 
                  style={{ width: '125px', height: '95px', margin: '0 auto 10px' }} 
                />
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
    <button className="btn h-14 w-45 hover:bg-emerald-700 bg-emerald-500 rounded-full text-white mt-8">
      More Services
    </button>
  </div>

  {/* Floating symbols */}
  <span className="symbol circle">◯</span>
  <span className="symbol triangle">△</span>
  <span className="symbol plus">+</span>
  <span className="symbol star">★</span>
</section>
  );
}

export default Services;
