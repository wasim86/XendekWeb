
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
import './App.css';

function App() {
  return (
    <div className="App">
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
