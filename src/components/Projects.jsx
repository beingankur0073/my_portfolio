import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h1>

       <div className="grid gap-8 px-4 lg:px-0 max-w-5xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/30 shadow-xl backdrop-blur-md p-6"
            >
              <div className="flex flex-wrap justify-center">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/4 my-auto"
                >
                  <img
                    src={project.image}
                    width={300}
                    height={500}
                    className="mb-6 rounded-lg"
                    alt={project.title}
                  />
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4 px-4"
                >
                  <h6 className="mb-2 text-xl font-bold text-white">{project.title}</h6>
                 <p
                  className="mb-4 text-neutral-300 text-sm "
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                  {/* Technologies */}
                  <div className="mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="mr-1 mb-1 inline-block rounded bg-neutral-800 px-1 py-1 text-xs font-medium text-sky-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub + Live Link */}
                  <div className="flex flex-wrap items-center gap-4">
                    {project.github?.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 underline hover:text-blue-500"
                      >
                        {link.label}
                      </a>
                    ))}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-400 underline hover:text-green-500"
                      >
                        Live Link
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
