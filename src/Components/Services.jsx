// components/Services.js
import React from 'react';

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
    <section className="services">
      <div className="container">
        <h6 className='text-center'>ABOUT US</h6>
        <h2>We offer expert web and marketing services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
            </div>
          ))}
        </div>
      </div>
      <button className="btn h-14  w-45 hover:bg-emerald-700 bg-emerald-500 rounded-full text-white">More Services</button>
    </section>
  );
}

export default Services;
