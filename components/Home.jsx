"use client";

import React from "react";
import { motion } from "framer-motion";

const ThreeUser = React.lazy(() => import("./ThreeUser"));

const AnimatedButton = React.lazy(() =>
  import("./FramerAnimations/AnimatedButton")
);

const TypingText = React.lazy(() => import("./FramerAnimations/TypingText"));

const Home = ({ home }) => {
  return (
    <div id="home" className="pt-16 min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-20 gap-12">
        {/* Text Section */}
        <motion.div
          className="flex-1 font-bold flex flex-col gap-4 max-w-screen"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl">
            {home.intro}
            <br />
            <span className="text-blue-500 dark:text-green-400">
              {home.name}
            </span>
          </h1>
          <h3 className="text-3xl md:text-4xl lg:text-5xl">
            {home.subject}
            <span className="text-gradient">
              <TypingText words={home.roles} />
            </span>
          </h3>
          <p className="font-light text-gray-700 dark:text-gray-300">
            {home.description}
          </p>
          <AnimatedButton text="Resume" href={home.resumeLink} />
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
