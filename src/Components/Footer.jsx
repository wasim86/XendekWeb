import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A2141] text-white">
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Left Column - Heading */}
          <div className="md:w-2/5">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              We improve your <br /> online performance
            </h2>
          </div>
          {/* Info Columns */}
          <div className="flex flex-col sm:flex-row gap-12 md:w-3/5 justify-between">
            {/* Address */}
            <div>
              <h3 className="text-xl font-bold mb-3">Address</h3>
              <p className="text-base text-gray-200">
                514 Chester St, Brooklyn, NY 11212, United States
              </p>
            </div>
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-base text-gray-200">
                contact@xendekweb.com<br />
                +1 888–202–6368
              </p>
            </div>
            {/* Social Links */}
            <div>
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
              <h3 className="text-xl font-bold mb-3">Newsletter</h3>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full px-4 py-2 bg-[#262f56] text-white placeholder:text-gray-400 outline-none mb-3"
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
        <div className="border-t border-[#2d3664] mt-12 pt-4 text-center text-gray-300 text-base">
          © 2025 XendekWeb. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
