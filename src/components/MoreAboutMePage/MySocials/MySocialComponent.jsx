import React, { useContext } from "react";
import Reveal from "../../plugins/Reveal";
import { ThemeContext } from "../../../context/ThemeContext";

export const MySocialComponent = ({ openModal, socialData }) => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <a target="_blank" href={socialData.link}>
      <div className="bg-ae_background_color hover:bg-ae_hover_modal/50 cursor-pointer relative group">
        <div className="w-52 h-32 lg:w-[300px] lg:h-40 absolute bottom-0 left-3 lg:left-40 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
          <img
            src={socialData.logo}
            alt={`Logo ${socialData.logo}`}
            className="object-cover w-full h-full object-top"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 justify-items-center lg:mx-auto lg:max-w-screen-2xl items-center h-48 md:h-52 lg:h-64 xl:h-72">
          <div className="space-y-1">
            <div className="text-ae_titles_text_color">{socialData.name}</div>
            <div className="text-sm font-light text-gray-500">
              {socialData.username}
            </div>
          </div>
          <div className="hidden md:block">
            {socialData.upload.content_type == "text" ? (
              <div className="space-y-2">
                <div className="text-ae_titles_text_color text-xl font-semibold">
                  {socialData.upload.contents}
                </div>
                <div className="text-ae_titles_text_color text-base">
                  {socialData.upload.date}
                </div>
              </div>
            ) : (
              <div className="flex space-x-1">
                {socialData.upload.contents?.map((item, index) => (
                  <div
                    className="md:w-[155px] lg:w-[180px] xl:w-[210px] opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-95"
                    key={index}
                  >
                    <img
                      src={item}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-1 text-end">
            <div className="text-ae_titles_text_color font-bold">
              {socialData.total_posts}
            </div>
            <div className="text-sm text-gray-500">Total {socialData.post}</div>
          </div>
        </div>
      </div>
    </a>
  );
};
