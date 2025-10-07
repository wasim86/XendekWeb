
import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import Process from './Components/Process';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import WebDesignSection from './Components/WebDesign';
import WebTechnology from './Components/WebTechnology';
import StatsBar from './Components/StatsBar';
import BrandsBar from './Components/BrandsBar';
import { Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import './App.css';

function App() {
  // 2. Add state to track mouse position
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 }); // Initialize off-screen

  // 3. Add useEffect to handle mouse move events
  useEffect(() => {
    const moveCursor = (e) => {
      // Update cursor position relative to the viewport
      setCursorXY({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="App bg-[#fefbf3]">

      
      <Routes/>
      <Header />
      <Hero />
      <Services />
     
      <About />
      <WebDesignSection />
      <Process />
      <StatsBar/>
      <WebTechnology />

      <Testimonials />
      <BrandsBar />
      <Footer />

     


    </div>

    
  );
}

export default App;
