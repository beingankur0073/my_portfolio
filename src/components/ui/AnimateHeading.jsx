import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../index.css"

const AnimatedHeading = ({
  words = ["Hello", "World"],
  typingSpeed = 120,
  holdingDelay = 800,
  className = "",
  style = {},
}) => {
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
        timeout = setTimeout(() => setTypingForward(false), holdingDelay);
      }
    } else {
      if (displayLen > 0) {
        timeout = setTimeout(() => setDisplayLen(displayLen - 1), typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setTypingForward(true);
          setCurrentWordIdx((currentWordIdx + 1) % words.length);
        }, holdingDelay / 2);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayLen, typingForward, currentWordIdx, words, typingSpeed, holdingDelay]);

  return (
    <motion.h1
      className={`text-center text-4xl ${className}`}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      style={{ minHeight: 60, fontWeight: 400, ...style }}
    >
      {words[currentWordIdx].slice(0, displayLen)}
      <span className="animated-cursor">|</span>
    </motion.h1>
  );
};

export default AnimatedHeading;
