import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Process from "./Components/Process";
// import WebDevelopmentProcess from "./Components/WebDevelopmentProcess";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import WebDesignSection from "./Components/WebDesign";
import WebTechnology from "./Components/WebTechnology";
import StatsBar from "./Components/StatsBar";
import BrandsBar from "./Components/BrandsBar";
import CustomCursor from "./Components/customCursor"; // ✅ Custom Cursor


import DetailPage from "./Components/DetailPage"; // ✅ New Page
import "./App.css";

function App() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorXY({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="App bg-[#fefbf3]">
      <Header />

      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
              <CustomCursor />
              <Hero />
              <Services />
              <About />
              <WebDesignSection />
              
              <Process />
              <StatsBar />
              <WebTechnology />
              <Testimonials />
              <BrandsBar />
           
              <Footer />
            </>
          }
        />

        {/* ✅ About Page */}
        <Route path="/about" element={<About />} />

        {/* ✅ Detail Page with dynamic ID */}
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;               