import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const storedDarkMode = localStorage.getItem("isDarkMode");

    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === "true");
    } else {
      setIsDarkMode(mediaQuery.matches);
    }

    const handleMediaChange = (event) => {
      if (!storedDarkMode) {
        setIsDarkMode(event.matches);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode);
      return newMode;
    })
  };

  useEffect(() => {
    if (isDarkMode !== null) {
      document.body.classList.toggle("dark", isDarkMode);
      document.body.classList.toggle("light", !isDarkMode);
    }
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
