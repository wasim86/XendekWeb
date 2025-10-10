import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A2141] text-white py-20">
      <div className="footer-main max-w-7xl mx-auto">
        <div className="footer-content">
          {/* Left Column - Heading */}
          <div className="md:w-2/5">
            <h2 className="footer-text text-4xl md:text-5xl font-bold leading-tight mb-8 pt-4 pl-4 sm:pt-8 sm:pl-10 md:pt-12 md:pl-16 lg:pt-20 lg:pl-24">
              We improve your <br /> online performance
            </h2>
          </div>
          {/* Info Columns */}
          <div className="footer-bottom">
            {/* Address */}
            <div className='footer-address'>
              <h3 className="text-xl font-bold mb-3">Address</h3>
              <p className="text-base text-gray-200 w-[330px]">
                514 Chester St, Brooklyn, NY 11212, United States
              </p>
            </div>
            {/* Contact */}
            <div className='footer-contact'>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-base text-gray-200">
                contact@xendekweb.com</p>
              <p className="text-base text-gray-200 mt-2 leading-[5]">
                +1 888–202–6368
              </p>
            </div>
            {/* Social Links */}
            <div className='footer-links'>
              <h3 className="text-xl font-bold mb-3">Social Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="flex items-center gap-2 hover:underline"><span>🌐</span>Facebook</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:underline"><span>📌</span>Pinterest</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:underline"><span>📸</span>Instagram</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:underline"><span>💼</span>LinkedIn</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:underline"><span>🏆</span>Trust Pilot</a></li>
              </ul>
            </div>
            {/* Newsletter */}
            <div>
              <h3 className="footer-newsletter text-xl font-bold mb-3">Newsletter</h3>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full px-4 py-2 text-white placeholder:text-gray-400 outline-none mb-3"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full transition"
                >
                  <span>✈️</span>Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-end border-t border-[#2d3664] mt-12 pt-4 text-center text-gray-300 text-base">
          © 2025 XendekWeb. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;