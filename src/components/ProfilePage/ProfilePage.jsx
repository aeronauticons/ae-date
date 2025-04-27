import darkLogoImg from "./../../assets/MyLogo/logo_dark.png";
import lightLogoImg from "./../../assets/MyLogo/logo_light.png";
import Reveal from "../plugins/Reveal";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ProfilePage = () => { 
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Reveal>
      <img className="w-1/2 md:w-8/12 lg:w-100 mx-auto" src={isDarkMode ? darkLogoImg : lightLogoImg} alt="Hero Section" />
    </Reveal>
  );
};
