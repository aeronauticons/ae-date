import React from "react";
import Reveal from "../plugins/Reveal";

export const TitleComponent = ({ title, id }) => {
  return (
    <div className="relative flex mx-auto trans-none max-w-screen-2xl bg-ae_background_color sm:py-8 sm:px-16 px-5 lg:py-5 pt-7 pb-2 md:pt-10 scroll-mt-20 lg:mb-5" id={id}>
      <div className="text-4xl md:text-5xl xl:text-6xl font-extrabold font-spartan text-ae_titles_text_color drop-shadow-xl  ">
        <Reveal>
          {title}
          <span className="text-ae_logo_color">.</span>
        </Reveal>
      </div>
      <div className="flex-grow ml-4 self-center">
        <hr className="border-t border-ae_titles_text_color dark:border-ae_titles_text_color" />
      </div>
    </div>
  );
};
