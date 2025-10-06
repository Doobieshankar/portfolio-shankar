"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData";
import { ArrowRight } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div id="projects" className="pt-16 px-4 md:px-12">
      {/* Theme Switcher */}
      <motion.h1
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.1 }}
      >
        Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, i) => (
          <motion.div
            key={`project-${i}`}
            className="p-6 rounded-2xl shadow-lg border 
                      border-gray-300 dark:border-gray-700 
                      bg-gradient-to-br from-white to-gray-100 
                      dark:from-gray-900 dark:to-gray-950 
                      hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.0005 }}
          >
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-2 dark:text-white text-gray-950">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={`tech-${index}`}
                  className="px-3 py-1 text-xs 
                             bg-blue-500/10 text-blue-600 
                             dark:bg-blue-500/20 dark:text-blue-300 
                             rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
            >
              View Project <ArrowRight className="inline-block" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
