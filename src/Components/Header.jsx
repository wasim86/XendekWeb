// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "tailwindcss";
import Logo from './Images/logo.png';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#fefbf3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 sm:py-5">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-[48px] sm:h-[65px] cursor-pointer" />
          </Link>

          {/* Desktop nav (>=640px) */}
          <nav className="hidden sm:flex items-center gap-6">
            <Link to="/" className="text-[#181d4e] hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/detail/1" className="text-[#181d4e] hover:text-blue-600 transition-colors">About</Link>
            <a href="#services" className="text-[#181d4e] hover:text-blue-600 transition-colors">Our Services</a>
            <a href="#process" className="text-[#181d4e] hover:text-blue-600 transition-colors">Our Portfolio</a>
            <a href="#contact" className="text-[#181d4e] hover:text-blue-600 transition-colors">Contact</a>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <svg
                className="w-6 h-6 text-[#181d4e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>  
              </svg>
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
          </nav>
          
          {/* Mobile: hamburger ( <640px ) */}
          <button
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className={`h-7 w-7 text-gray-800 transition-transform ${open ? 'rotate-90' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path strokeWidth="2" strokeLinecap="round" d="M3 6h18" />
                  <path strokeWidth="2" strokeLinecap="round" d="M3 12h18" />
                  <path strokeWidth="2" strokeLinecap="round" d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown ( <640px ) */}
      {open && (
        <div className="sm:hidden border-t border-gray-200">
          <nav className="px-4 py-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/detail/1"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Our Services
            </a>
            <a
              href="#process"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Our Portfolio
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;