import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";

export const DarkModeButton = () => {

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleDarkMode}
      className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 
             border lg:border-2 border-gray-500 
             text-gray-500 lg:hover:text-gray-50 
             rounded-full shadow-lg 
             lg:hover:bg-gray-500 
             transition-colors ease-in-out 
             z-30 fixed bottom-5 right-5 
             md:bottom-10 md:right-10 
             lg:bottom-16 lg:right-16 
             flex items-center justify-center backdrop-blur-sm trans-none"
    >
      {isDarkMode ? (
        <MdLightMode className="text-base md:text-lg lg:text-2xl transition-colors ease-in-out" />
      ) : (
        <MdDarkMode className="text-base md:text-lg lg:text-2xl transition-colors ease-in-out" />
      )}
    </button>
  );
};
