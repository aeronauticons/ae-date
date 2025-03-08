import React from "react";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import { MyExperienceWorks } from "./MyExperienceWorks";

export const Experience = ({ openModal }) => {
  return (
    <div
      className="relative isolate px-6 pt-8 lg:px-8 bg-ae_background_color"
      id="experience_page"
    >
      <TitleComponent title="Experience" id="experience_page" />
      <MyExperienceWorks openModal={openModal}/>
    </div>
  );
};
