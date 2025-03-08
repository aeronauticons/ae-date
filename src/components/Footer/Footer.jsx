import React, { useContext } from "react";
import { yearUpdate } from "../../constants";
import { myLogo } from "../../constants";
import { ThemeContext } from "../../context/ThemeContext";

export const Footer = () => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className="flex w-full justify-center items-center text-center bg-ae_background_color text-sm space-x-2">
      <div className="w-14 lg:w-16 h-8 overflow-hidden rounded-full">
        <img
          alt="My Logo"
          src={isDarkMode ? myLogo.dark : myLogo.light}
          className="w-full h-full object-cover"
        />
      </div>

      <span className="text-gray-500 text-xs lg:text-sm">
        Portfolio - Created By Aeron Filoteo @ {yearUpdate}
      </span>
    </footer>
  );
};
