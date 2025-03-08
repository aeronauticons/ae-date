import React from "react";
import heroImg from "./../../assets/ProfileImg/aeron-psd.png";
// import heroImg from "./../../assets/ProfileImg/formalMe.png";
import bgHeroImg from "./../../assets/ProfileImg/bg.png";
import Reveal from "../plugins/Reveal";

export const ProfilePage = () => {
  return (
    <Reveal>
      <div
        className="md:w-5/6 w-4/6 mx-auto rounded-3xl bg-cover bg-top"
        style={{
          backgroundImage: `url(${bgHeroImg})`,
        }}
      >
        <img className="w-4/5 mx-auto" src={heroImg} alt="Hero Section" />
      </div>
    </Reveal>
  );
};
