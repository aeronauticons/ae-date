import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGlobeAmericas } from "react-icons/fa";
import { debounce } from "lodash";

export const DateTime = ({ className }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Show only if at the top (scroll position 0)
      if (currentScrollPos === 0) {
        setIsVisible(true); // Show the element
      } else {
        setIsVisible(false); // Hide the element
      }

      // Update last scroll position
      setLastScrollPos(currentScrollPos);
    };

    const scrollHandler = () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear previous timeout
      }

      // Set a timeout to call handleScroll after a short delay
      const newTimeoutId = setTimeout(handleScroll, 100);
      setTimeoutId(newTimeoutId);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear timeout on cleanup
      }
    };
  }, [lastScrollPos, timeoutId]);

  const updateTime = () => {
    setCurrentDateTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const userLocale = navigator.language;

  const formattedDate = new Intl.DateTimeFormat(userLocale, {

    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(currentDateTime);

  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div>
        <FaGlobeAmericas className="mr-2 mt-0.5" />
      </div>

      <div>{formattedDate}</div>

    </motion.div>
  );
};
