import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Technologies", "Skills","Languages"];
const typingSpeed = 120;    // ms per letter
const holdingDelay = 800;   // ms to hold full word

const AnimatedHeading = () => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayLen, setDisplayLen] = useState(1);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIdx];

    if (typingForward) {
      if (displayLen < currentWord.length) {
        timeout = setTimeout(() => setDisplayLen(displayLen + 1), typingSpeed);
      } else {
        // Pause at full word, then start erasing
        timeout = setTimeout(() => setTypingForward(false), holdingDelay);
      }
    } else {
      if (displayLen > 1) {
        timeout = setTimeout(() => setDisplayLen(displayLen - 1), typingSpeed);
      } else {
        // Switch word after erasing
        timeout = setTimeout(() => {
          setTypingForward(true);
          setCurrentWordIdx((currentWordIdx + 1) % words.length);
        }, holdingDelay / 2);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayLen, typingForward, currentWordIdx]);

  return (
    <motion.h1
      className="my-20 text-center text-4xl"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      style={{ minHeight: 60 }}
    >
      {words[currentWordIdx].slice(0, displayLen)}
      <span className="blinking-cursor">|</span>
    </motion.h1>
  );
};

export default AnimatedHeading;
