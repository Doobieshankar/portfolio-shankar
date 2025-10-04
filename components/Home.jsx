"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeUser from "./ThreeUser";
import AnimatedButton from "./FramerAnimations/AnimatedButton";
import TypingText from "./FramerAnimations/TypingText";

const Home = () => {
  return (
    <div id="home" className="pt-16 min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-20 gap-12">
        {/* Text Section */}
        <motion.div
          className="flex-1 font-bold flex flex-col gap-4 max-w-screen"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl">Hi I&apos;m</h1>
          <h2 className="text-4xl lg:text-6xl text-blue-500 dark:text-green-400 font-extrabold">
            SHANKAR D
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl">
            I&apos;m a{" "}
            <span className="text-gradient">
              <TypingText words={["Frontend", "Backend", "Fullstack"]} />
            </span>
          </h3>
          <p className="font-open-sans text-lg font-light text-gray-700 dark:text-gray-300">
            Seeking opportunities to design and develop scalable web
            applications, implement secure backend systems, and build
            interactive front-end interfaces.
          </p>
          <AnimatedButton
            text="Resume"
            href="https://drive.google.com/file/d/1Zhc6pv6pUJZeLiNi3MQQnxSNr4SRzVtY/view?usp=sharing"
          />
        </motion.div>

        {/* 3D Model Section */}
        <motion.div
          className="flex-1 rounded-3xl overflow-hidden h-[550px] w-full "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ThreeUser />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
