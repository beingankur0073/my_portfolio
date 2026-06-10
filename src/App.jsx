import React from "react";
import Hero from "./components/layout/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";

import Projects from "./features/projects/components/Projects.jsx";
import CPStats from "./features/cp_stats/components/CPStats.jsx";
import { SiteHeader } from "./components/layout/SiteHeader.jsx";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative min-h-screen">

      {/* ---------------------- Background Layer ---------------------- */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        {/* Base dark canvas layer */}
        <div className="absolute inset-0 bg-[#080808]"></div>

        {/* Radial animated glow - Restored native utility class name pointer */}
        <div className="absolute inset-0 animate-gradient-bg"></div>

        {/* Architectural grid overlay layer - Restored your geometric scrolling layout */}
        <div className="absolute inset-0 grid-overlay animate-grid"></div>
      </div>
      {/* -------------------------------------------------------------- */}

      {/* ------------------------- CONTENT ---------------------------- */}
      <div className="container mx-auto px-6 sm:px-8 flex flex-col gap-4 relative z-10">
        <SiteHeader />
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