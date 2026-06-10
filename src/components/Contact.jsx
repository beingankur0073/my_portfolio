import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Twitter, ExternalLink } from "lucide-react";
import { CONTACT } from "../constants/index.jsx";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ankur73/", icon: Linkedin, hoverClass: "hover:text-blue-500", label: "LinkedIn" },
  { href: "https://github.com/beingankur0073", icon: Github, hoverClass: "hover:text-neutral-200", label: "GitHub" },
  { href: "https://www.instagram.com/literally_ankur/", icon: Instagram, hoverClass: "hover:text-pink-500", label: "Instagram" },
  { href: "https://x.com/literally_ankur", icon: Twitter, hoverClass: "hover:text-neutral-400", label: "Twitter" },
];

const Contact = () => {
  const targetEmail = CONTACT?.email || "mukherjeeankur0073@gmail.com";

  return (
    /* ⚡ SPACE COMPRESSION: Reduced vertical padding down from pt-12/pb-6 to ultra-tight layout tracks */
    <section id="contact" className="py-4 lg:py-6 font-sans">
      
      {/* 🏷️ Section Header Tracker */}
      {/* ⚡ SPACE COMPRESSION: Cut heading bottom margin from mb-10 to mb-6 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -15 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono mb-6"
      >
        <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-semibold mb-1">Connection</div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Get In <span className="bg-gradient-to-r from-neutral-400 via-neutral-200 to-white bg-clip-text text-transparent">Touch</span>
        </h2>
      </motion.div>

      {/* 📬 Core Connection Interactive Deck Panel */}
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/10 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center group relative overflow-hidden"
        >
          {/* Subtle geometric glowing accent block */}
          <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-cyan-500/5 blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500" />
          
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-5">
            Have an immediate project opening, core optimization challenge, or just want to talk software architecture? Drop a message.
          </p>

          {/* Real Mail Action Hyperlink Anchor Interface */}
          <a 
            href={`mailto:${targetEmail}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-800 bg-neutral-950 text-xs font-mono text-neutral-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 shadow-md group/link"
          >
            <Mail size={13} className="text-neutral-400 group-hover/link:text-cyan-400 transition-colors" />
            <span>{targetEmail}</span>
            <ExternalLink size={11} className="text-neutral-600 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 🧱 SYSTEM FOOTER BLOCK                                                 */}
      {/* ---------------------------------------------------------------------- */}
      {/* ⚡ SPACE COMPRESSION: Sized down footer margin from mt-20 to mt-10 and padding to pt-4 */}
      <footer className="mt-10 pt-4 border-t border-neutral-900/80 max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 font-mono text-[11px]">
        
        {/* Left Side: Care-built Copyright Stamp */}
        <div className="flex items-center gap-1">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-neutral-400 font-semibold hover:text-white transition-colors duration-200">Ankur Mukherjee</span>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-500 flex items-center gap-1">
            Made with <span className="text-red-500/90 animate-pulse">❤️</span>
          </span>
        </div>

        {/* Right Side: High-contrast Horizontal Social Profiles Hub Grid */}
        <div className="flex items-center gap-4 text-neutral-400">
          {socialLinks.map((soc, idx) => {
            const IconComponent = soc.icon;
            return (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.label}
                className={`transition-colors duration-200 ${soc.hoverClass}`}
              >
                <IconComponent size={16} />
              </a>
            );
          })}
        </div>

      </footer>
    </section>
  );
};

export default Contact;