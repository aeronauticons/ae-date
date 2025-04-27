import React, { useContext } from "react";
import { MySocialComponent } from "./MySocialComponent";
import { mySocialsPage } from "../../../constants";
import spotifyLogo from "../../../assets/Socials/spotify.png";
import { ThemeContext } from "../../../context/ThemeContext";

export const MySocialLists = ({ openModal }) => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="py-3 flex items-center justify-center bg-ae_background_color ">
      <div className="w-full max-w-screen ">
        {/* spotify */}
        <a
          target="_blank"
          href="https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe?si=ba1bf0a1fa9d40f0"
        >
          <div className="bg-ae_background_color hover:bg-ae_hover_modal/50 cursor-pointer relative group">
            <div className="w-52 h-32 lg:w-[300px] lg:h-40 absolute bottom-0 left-3 lg:left-40 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
              <img
                src={spotifyLogo}
                alt="Spotify Logo"
                className="object-cover w-full h-full object-top"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 justify-items-center lg:mx-auto lg:max-w-screen-2xl items-center h-48 md:h-52 lg:h-64 xl:h-72">
              
              <div className="space-y-1 text-center md:text-left lg:text-start">
                <iframe
                  className="rounded-lg md:hidden mx-auto"
                  src="https://open.spotify.com/embed/album/10FLjwfpbxLmW8c25Xyc2N"
                  width="54%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <div className="text-ae_titles_text_color hidden md:block">
                  Spotify
                </div>
                <div className="mt-2 text-xs md:text-sm font-light text-gray-500">
                  Current Favorite Song
                </div>
              </div>

              <div className="hidden md:block w-full hover:shadow-2xl">
                <iframe
                  className="rounded-lg"
                  src="https://open.spotify.com/embed/album/10FLjwfpbxLmW8c25Xyc2N"
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="space-y-1 text-end">
                <div className="text-ae_titles_text_color font-bold">
                  899,082,504+
                </div>
                <div className="text-sm text-gray-500">Song Listened</div>
              </div>
            </div>
          </div>
        </a>

        {/* others */}
        {mySocialsPage?.map((item) => (
          <MySocialComponent
            openModal={openModal}
            socialData={item}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
};
