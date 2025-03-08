import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Typewriter = ({ text, delay, infinite, isClick }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(isClick);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  }, [inView])

  useEffect(() => {
    setIsRunning(isClick);
  }, [isClick]);

  useEffect(() => {
    let timeout;

    if (isRunning) {
      if (currentIndex <= text.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else if (infinite) {
        setCurrentIndex(0);
        setCurrentText("");
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, isRunning]);

  return <span ref={ref}>{currentText}</span>;
};
