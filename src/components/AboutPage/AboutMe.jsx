import React from "react";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import coder from "../../assets/Animations/coder.json";
import { AutoPlay } from "../plugins/AutoPlay";
import { FaLongArrowAltRight } from "react-icons/fa";
import Reveal from "../plugins/Reveal";
import { mySocials } from "../../constants";
import { aboutMe } from "../../constants";

export const AboutMe = () => {
  return (
    <div className="relative isolate px-6 pt-8 lg:px-8 bg-ae_background_color">
      <div className="flex justify-center md:hidden mb-3">
        <AutoPlay src={coder} className={"w-56"} />
      </div>

      <TitleComponent title="About Me" id="about_page" />

      <div className="relative flex mx-auto max-w-screen-2xl bg-ae_background_color sm:px-16 px-5 py-5 justify-center overflow-hidden">
        <div className="md:flex justify-between gap-10">
          <div className="md:w-1/2 flex justify-center">
            <AutoPlay src={coder} className={"hidden md:block w-72"} />
          </div>
          <div className="text-left text-lg font-normal text-gray-500 md:w-2/3">
            {aboutMe &&
              aboutMe.map((item) => (
                <div className="mb-2 leading-8 text-justify" key={item.id}>
                  <Reveal>{item.text}</Reveal>
                </div>
              ))}

            <div className="mb-2 flex justify-between mt-6">
              <div className="lg:flex w-100 space-y-2 lg:space-y-0">
                <Reveal>
                  <span className="hidden md:flex  text-ae_logo_color font-semibold text-xl items-center mr-4">
                    Social Media <FaLongArrowAltRight className="ml-2" />
                  </span>
                </Reveal>

                <Reveal>
                  <div className="flex space-x-1 inset-x-0 justify-center items-center">
                    {mySocials &&
                      mySocials.map((item) => {
                        const IconComponent = item.icon;

                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            className="flex h-10 w-10 trans-none"
                          >
                            <IconComponent className="h-6 w-6 text-gray-600 hover:text-ae_logo_color" />
                          </a>
                        );
                      })}
                  </div>
                </Reveal>
              </div>
              <div className="flex w-100 items-center">
                <Reveal>
                  <a
                    href="/more_about_me"
                    className="text-ae_logo_color font-thin hover:underline hover:underline-offset-2"
                  >
                    More about me
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
