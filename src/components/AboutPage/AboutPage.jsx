import React from "react";
import KeyPoints from "./KeyPoints";
import { AboutMe } from "./AboutMe";
import { Capabilities } from "./Capabilities";

export const AboutPage = () => {
  return (
    <>
      <div
        className="relative flex min-w-screen flex-col justify-center overflow-x-auto lg:overflow-hidden 
                  bg-ae_background_color sm:py-16 sm:px-16 px-5 py-9 md:pt-10"
      >
        <KeyPoints />
      </div>

      <AboutMe />

      <Capabilities />
    </>
  );
};
