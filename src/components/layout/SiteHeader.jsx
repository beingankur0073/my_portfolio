import { useState } from "react";
import { Menu, X, Linkedin, Github, Instagram, Twitter } from "lucide-react";

// ✅ Safe personal branding logo import mapping
import logo from "../../assets/images/logo.png";

// Updated to target clean, smooth-scrolling section IDs on your page
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/ankur73/", icon: Linkedin, hoverClass: "hover:text-blue-500", label: "LinkedIn" },
  { href: "https://github.com/beingankur0073", icon: Github, hoverClass: "hover:text-neutral-400", label: "GitHub" },
  { href: "https://www.instagram.com/literally_ankur/", icon: Instagram, hoverClass: "hover:text-pink-500", label: "Instagram" },
  { href: "https://x.com/literally_ankur", icon: Twitter, hoverClass: "hover:text-neutral-500", label: "Twitter" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Embedded Shadcn UI styling parameters
  const ghostButtonClass = "inline-flex items-center justify-center rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9 text-neutral-400 hover:bg-neutral-800/60 hover:text-white";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#080808]/70 border-b border-neutral-800/60 font-mono">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        
        {/* 🏷️ Left Block: Branding Logo and Scrolling Anchors */}
        <div className="flex items-center gap-6">
          <a href="#home" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <img className="w-8 h-8 object-contain rounded-md" src={logo} alt="Ankur Logo" />
            <span className="hidden sm:inline bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 bg-clip-text text-transparent">
              Ankur
            </span>
            <span className="text-neutral-400 text-sm font-light hidden sm:inline">.dev</span>
          </a>

          {/* Desktop Navigation Link Map using raw anchors */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-neutral-400 hover:text-white transition-colors py-1 hover:border-b hover:border-neutral-500"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* 🌐 Right Block: Social Profiles */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-3.5 text-neutral-400">
            {socialLinks.map((soc, idx) => {
              const IconComponent = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className={`transition-colors ${soc.hoverClass}`}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* 📱 Mobile Hamburger Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => setOpen((o) => !o)} 
            aria-label="Menu" 
            className={ghostButtonClass}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Dropdown Stack Panel Drawer */}
      {open && (
        <div className="md:hidden border-t border-neutral-800/80 bg-[#080808]/95 backdrop-blur-lg">
          <div className="px-5 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-400 hover:text-white py-1.5 transition-colors"
              >
                {l.label}
              </a>
            ))}

            <div className="h-px bg-neutral-800 my-1" />

            {/* Social Links Row inside Mobile Menu */}
            <div className="flex items-center gap-5 py-2 text-neutral-400">
              {socialLinks.map((soc, idx) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={`transition-colors ${soc.hoverClass}`}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}