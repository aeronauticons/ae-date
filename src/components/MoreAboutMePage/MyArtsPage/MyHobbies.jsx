import React, { useContext } from "react";
import Reveal from "../../plugins/Reveal";
import playingGames from "../../../assets/Animations/playingGames.json";
import { AutoPlay } from "../../plugins/AutoPlay";
import { gamesAndHobbiesDesc, myGames } from "../../../constants";
import { ThemeContext } from "../../../context/ThemeContext";

export const MyHobbiesPage = ({ openModal }) => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className="relative isolate overflow-hidden px-6 py-2 md:py-5 lg:py-14">
      <div className="absolute inset-0  bg-ae_background_color" />
      <div className="absolute inset-y-0 right-1/4 md:right-1/2  mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-ae_quote_bg_color/25 shadow-xl shadow-ae_quote_shadow ring-1 ring-ae_quote_ring sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <figure className="py-10 lg:py-0">
        <div className="md:flex md:justify-center lg:mx-auto lg:max-w-screen-2xl">
          <div className="w-100 self-center order-none md:order-last flex justify-center md:ms-10 lg:ms-20">
            <AutoPlay
              src={playingGames}
              className="w-80 md:w-[400px] 2xl:w-[500px] -m-10"
            />
          </div>

          <div className="lg:self-center md:w-80 lg:w-[40%] xl:py-6 pt-6 md:pt-0 px-10 sm:px-20 md:px-0 order-none md:order-first">
            <Reveal>
              <div className="bg-ae_background_color/60 text-ae_logo_color/70 p-2 shadow-lg w-24 h-9 text-center text-sm font-semibold rounded mb-3">
                Relaxation
              </div>
            </Reveal>

            <Reveal>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-500 mb-4">
                My Games <span className="text-ae_logo_color font-bold">& </span>
                Hobbies
              </div>
            </Reveal>

            <Reveal>
              <div className=" text-gray-500 text-lg font-normal leading-8 mb-4 text-justify">
                {gamesAndHobbiesDesc}
              </div>
            </Reveal>

            <div className="grid grid-cols-4 gap-4 space-y-2">
              {myGames &&
                myGames.map((item) => (
                  <div
                    key={item.name}
                    className={`${
                      item.type == "games" ? "w-16 lg:w-20" : "w-16 lg:w-16"
                    } flex items-center justify-center justify-self-center group`}
                  >
                    <Reveal>
                      <img
                        src={item.logo}
                        alt={`Game ${item.name}`}
                        className="w-full h-full object-contain group-hover:text-ae_logo_color cursor-pointer trans-none"
                      />
                    </Reveal>

                    <div className="font-mono absolute invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-opacity duration-300 px-3 py-2 -mt-[75px] text-sm font-medium text-ae_titles_text_color bg-ae_quote_bg_color rounded-lg shadow-sm">
                      {item.name}
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};
