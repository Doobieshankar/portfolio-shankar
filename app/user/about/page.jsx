"use client";

/* import ThreeGlobe from "@/components/ThreeGlobe"; */
import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "@/data/aboutData";
import TypingText from "@/components/FramerAnimations/TypingText";
import ThreeGlobe from "@/components/Three-Globe";

const AboutPage = () => {
  return (
    <div id="about" className="pt-16 px-4 md:px-12 font-poppins">
      <div className="flex flex-col md:flex-row items-center justify-around gap-8">
        {/* Left Section */}
        <motion.section
          className="flex-1 space-y-6"
          aria-label="About Me"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {aboutData.name}
          </motion.h1>

          {/* Objective */}
          <motion.p
            className="font-open-sans text-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {aboutData.objective}
          </motion.p>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold">Experience</h2>
            {aboutData.experience.map((exp, i) => (
              <p key={i} className="mt-2 text-sm md:text-base">
                <b>
                  {exp.company} ({exp.period})
                </b>{" "}
                <br />
                {exp.title} — {exp.description}
              </p>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold">Education</h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm md:text-base">
              {aboutData.education.map((edu, i) => (
                <li key={i}>
                  {edu.degree} – {edu.school} ({edu.year}) | {edu.grade}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm md:text-base">
              <li>
                <b>Frontend:</b> {aboutData.skills.frontend.join(", ")}
              </li>
              <li>
                <b>Backend:</b> {aboutData.skills.backend.join(", ")}
              </li>
              <li>
                <b>Database:</b> {aboutData.skills.database.join(", ")}
              </li>
              <li>
                <b>Tools:</b> {aboutData.skills.tools.join(", ")}
              </li>
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold">Languages</h2>
            <p className="mt-2 text-sm md:text-base">
              {aboutData.languages.join(" · ")}
            </p>
          </motion.div>
        </motion.section>

        {/* Right Section - Globe */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-full flex justify-center text-3xl md:text-4xl font-bold font-open-sans mb-4">
            <TypingText words={["India", "Tamil Nadu", "Tiruppur - 641 605"]} />
          </div>
          <ThreeGlobe />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
