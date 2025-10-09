// components/Header.js
import React from 'react';
import Logo from './images/Logo.png';
import "tailwindcss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header bg-[#fefbf3]">
      <div className="container">
        {/* <div className="logo">
          <h1 className='text-2xl font-bold text-black'>XendekWeb</h1>
        </div> */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-[65px] cursor-pointer" />
      </Link>
        <nav className="navigation">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/detail/1" className="hover:text-blue-600">
             About
           </Link>
            <li><a href="services"> Our Services</a></li>
            
            <li><a href="process">Our Portfolio</a></li>
            <li><a href="contact">Contact</a></li>
           <button className=" p-2  hover:bg-gray-100 rounded-full transition-colors duration-200">
        <svg 
          className="w-8 h-8 text-gray-700 stroke-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <circle cx="10" cy="10" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
        <svg 
          className="w-8 h-8 text-gray-700" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <circle cx="5" cy="5" r="2"></circle>
          <circle cx="12" cy="5" r="2"></circle>
          <circle cx="19" cy="5" r="2"></circle>
          <circle cx="5" cy="12" r="2"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <circle cx="19" cy="12" r="2"></circle>
          <circle cx="5" cy="19" r="2"></circle>
          <circle cx="12" cy="19" r="2"></circle>
          <circle cx="19" cy="19" r="2"></circle>
        </svg>
      </button>


          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
