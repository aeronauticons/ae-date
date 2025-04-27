import { Outlet } from "react-router-dom";
import { createContext, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const DarkModeContext = createContext();

export const Container = () => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <Outlet />
    </DarkModeContext.Provider>
  );
};
