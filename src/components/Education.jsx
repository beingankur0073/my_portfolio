import { EDUCATION } from "../constants/index.jsx";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, ClipboardCheck } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-12 border-b border-neutral-900/60 font-sans">
      
      {/* 🏷️ Section Header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono mb-16"
      >
        <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-semibold mb-1">Timeline</div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Academic <span className="bg-gradient-to-r from-neutral-400 via-neutral-200 to-white bg-clip-text text-transparent">Milestones</span>
        </h2>
      </motion.div>

      {/* 🛠Header Central Timeline Track Pipeline Arena */}
      <div className="relative max-w-4xl mx-auto px-4">
        
        {/* 
           🚀 CONTINUOUS BACKBONE: Extended from -top-8 to -bottom-8 
           This bridges empty viewport spaces and forms an uninterrupted connection route!
        */}
        <div className="absolute left-4 sm:left-1/2 -top-8 -bottom-8 w-px bg-cyan-200/80 -translate-x-1/2 hidden sm:block" />

        <div className="space-y-12">
          {EDUCATION.map((edu, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`relative flex flex-col sm:flex-row items-center justify-between w-full ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Central Backbone Timeline Marker Node Node */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 hidden sm:flex h-7 w-7 items-center justify-center rounded-full border border-neutral-800 bg-[#080808] z-10 shadow-[0_0_12px_rgba(0,0,0,0.9)]">
                  <GraduationCap size={12} className="text-cyan-400" />
                </div>

                {/* 📦 Core Information Panel Block */}
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 15 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={`w-full sm:w-[45%] pl-9 sm:pl-0 ${
                    isEven ? "sm:text-left" : "sm:text-right"
                  }`}
                >
                  <div className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/10 backdrop-blur-sm hover:border-neutral-700/50 transition-all duration-300 shadow-xl group hover:-translate-y-0.5 relative">
                    
                    {/* Architectural Floating Institutional Image Logo Layer */}
                    <div className={`flex items-start mb-3 gap-3.5 ${
                      isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}>
                      {edu.image && (
                        <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 shrink-0">
                          <img
                            src={edu.image}
                            width={40}
                            height={40}
                            className="object-contain filter brightness-[1.03]"
                            alt={`${edu.title} Badge`}
                          />
                        </div>
                      )}
                      
                      <div className={`flex flex-col min-w-0 flex-1 ${!isEven ? "sm:items-end" : ""}`}>
                        {/* Course Name Metric */}
                        <h3 className="font-bold text-neutral-200 text-sm sm:text-base leading-snug truncate w-full">
                          {edu.title}
                        </h3>
                        
                        {/* 🎯 NEW FEATURE: High-Contrast Performance Result Metric Badge */}
                        {edu.result && (
                          <div className="mt-1 flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded-md w-fit">
                            <ClipboardCheck size={11} />
                            <span>{edu.result}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Meta Detail Body Paragraph */}
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-3.5">
                      {edu.description}
                    </p>

                    {/* Geographical Location Footer String */}
                    {edu.address && (
                      <div className={`flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 border-t border-neutral-900/40 pt-3 ${
                        isEven ? "" : "sm:justify-end"
                      }`}>
                        <MapPin size={11} className="text-neutral-600 shrink-0" />
                        <span className="truncate">{edu.address}</span>
                      </div>
                    )}

                  </div>
                </motion.div>

                {/* Decorative symmetric layout column space spacer */}
                <div className="hidden sm:block w-[45%]" />

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;