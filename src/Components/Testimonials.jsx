// components/Testimonials.js
import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Best company for development and web designing, team xendek is very helpful… I would definitely like to work with team xendek again.",
      author: "Client 1"
    },
    {
      id: 2,
      text: "Team Xendekweb Constructed a new website for us which is very fast and efficient. They constructed perfect website for me and most important thing is they always deliver product on time. Highly recommended!!",
      author: "Client 2"
    },
    {
      id: 3,
      text: "Excellent work done by the developer. They were calm, polite & helpful as well as they helped me to learn more about online presence of business and marketing strategies.",
      author: "Client 3"
    },
    {
      id: 4,
      text: "They have excellent ,professional and very hard working team who co-ordinates with me regarding my project and also gave me so valuable advise.",
      author: "Client 4"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Suggestions & Feedback</h2>
        <p>XendekWeb is a Web development company that offers a variety of IT solutions and web-based services.</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;