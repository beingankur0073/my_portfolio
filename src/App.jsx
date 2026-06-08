import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/layout/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";


import Projects from "./features/projects/components/Projects.jsx";
import CPStats from "./features/cp_stats/components/CPStats.jsx";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative min-h-screen">

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
      {/* Added `flex flex-col mx-auto` to guarantee items stack nicely and center properly */}
      <div className="container mx-auto px-6 sm:px-8 flex flex-col gap-4">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Technologies />
        <CPStats /> {/* Renders cleanly with absolute zero hover animation glitches now! */}
        <Projects />
        <Contact />
      </div>
      {/* -------------------------------------------------------------- */}

    </div>
  );
}

export default App;