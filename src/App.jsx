import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import CPStats from "./components/Cp.jsx";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">

      {/* ---------------------- Background Layer ---------------------- */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        
        {/* Base background */}
        <div className="absolute inset-0 bg-[#080808]"></div>

        {/* Radial animated glow */}
        <div className="absolute inset-0 animate-gradient-bg"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay animate-grid"></div>
      </div>
      {/* -------------------------------------------------------------- */}

      {/* ------------------------- CONTENT ---------------------------- */}
      <div className="container mx-auto px-6 sm:px-8">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Technologies />
        <CPStats />
        <Projects />
        <Contact />
      </div>
      {/* -------------------------------------------------------------- */}

    </div>
  );
}

export default App;
