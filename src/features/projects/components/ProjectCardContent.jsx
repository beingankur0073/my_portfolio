import { motion } from "framer-motion";
import { memo } from "react";
import { Github, ExternalLink, Terminal } from "lucide-react";

const ProjectCardContent = memo(({ project }) => {
  if (!project) return null;

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 font-sans">
      
      {/* 🖼️ Left Side: Widescreen Horizontal Screenshot Container */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 12 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        /* Increased desktop width allocation to 42% to give widescreen screenshots breathing room */
        className="w-full lg:w-[42%] shrink-0 flex justify-center"
      >
        {/* 💻 Changed from aspect-[4/5] to aspect-video (16:9) to map standard laptop dimensions perfectly */}
        <div className="relative group w-full max-w-[380px] lg:max-w-none aspect-video overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-900/30 shadow-lg">
          <img
            src={project.image}
            alt={`${project.title} Widescreen Laptop Screenshot`}
            /* object-cover combined with aspect-video keeps the laptop layout intact without weird stretching */
            className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* 📋 Right Side: Technical Information Deck */}
      {/* Adjusted desktop width to 58% to balance perfectly with the widescreen image */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 12 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 1, 0.5, 1] }}
        className="w-full lg:w-[58%] flex flex-col justify-between text-center lg:text-left"
      >
        <div>
          {/* Project Header */}
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-center lg:justify-start gap-2 mb-2.5">
            <Terminal size={16} className="text-cyan-400 hidden lg:inline" />
            <span>{project.title}</span>
          </h3>

          {/* Description Copy */}
          <p
            className="text-neutral-400 text-xs sm:text-sm leading-relaxed tracking-wide mb-5 font-normal"
            dangerouslySetInnerHTML={{
              __html: project.description,
            }}
          />
          
          {/* Modern Micro-Badges Loop */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 mb-6 font-mono text-[10px]">
            {project.technologies?.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-neutral-900 text-cyan-400/90 border border-neutral-800/80 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Action Anchors */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-auto font-mono text-xs">
          {project.github?.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-950/60 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all active:scale-95 cursor-pointer"
            >
              <Github size={13} className="text-neutral-400" />
              <span>{link.label || "Source"}</span>
            </a>
          ))}

          {/* Live Link Button */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all active:scale-95 cursor-pointer shadow-md shadow-cyan-500/5"
            >
              <ExternalLink size={13} />
              <span>Live System</span>
            </a>
          )}
        </div>
      </motion.div>

    </div>
  );
});

ProjectCardContent.displayName = "ProjectCardContent";
export default ProjectCardContent;