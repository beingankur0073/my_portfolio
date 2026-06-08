import { motion } from "framer-motion";
import { memo } from "react";

const ProjectCardContent = memo(({ project }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Project Image Panel */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/4 my-auto flex justify-center lg:justify-start"
      >
        <img
          src={project.image}
          width={300}
          height={500}
          className="mb-6 rounded-lg object-cover shadow-md"
          alt={project.title}
        />
      </motion.div>

      {/* Project Details Panel */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl lg:w-3/4 px-4"
      >
        <h6 className="mb-2 text-xl font-bold text-white">
          {project.title}
        </h6>
        <p
          className="mb-4 text-neutral-300 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: project.description,
          }}
        />
        
        {/* Technologies Badge Loop */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded bg-neutral-800 px-2 py-1 text-xs font-medium text-sky-300 border border-neutral-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {project.github?.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 underline hover:text-blue-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-400 underline hover:text-green-500 transition-colors"
            >
              Live Link
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
});

ProjectCardContent.displayName = "ProjectCardContent";
export default ProjectCardContent;