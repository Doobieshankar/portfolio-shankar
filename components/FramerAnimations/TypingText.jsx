"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingText = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    // typing speed
    const speed = reverse ? 50 : 100;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    if (!reverse && subIndex === words[index].length) {
      setTimeout(() => setReverse(true), 1000); // pause before deleting
    } else if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length); // next word in loop
    }

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <span className="text-blue-500 dark:text-green-400">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {words[index].substring(0, subIndex)}
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </span>
  );
};

export default TypingText;
