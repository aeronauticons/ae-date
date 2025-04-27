import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import Reveal from "../plugins/Reveal";
import { ProjectModal } from "../Modal/ProjectModal";
import { myProjects } from "../../constants";
import { ThemeContext } from "../../context/ThemeContext";

export const ProjectLists = ({ openModal }) => {
  const handleProjectClick = (projectData) => {
    openModal(projectData, ProjectModal);
  };

  const { isDarkMode } = useContext(ThemeContext);

  const gridColumns =
    myProjects.length > 1 ? "lg:grid-cols-2 grid-cols-1" : "grid-cols-1";

  const cardSize = myProjects.length > 1 ? "max-w-full" : "max-w-3xl";

  return (
    <div className="relative mx-auto max-w-screen-2xl bg-ae_background_color sm:py-8 px-8 sm:px-24 md:px-32 lg:py-5 pt-7 pb-2 md:pt-10">
      <div className={`grid gap-12 lg:gap-10 xl:gap-14 ${gridColumns}`}>
        {myProjects.map((item) => (
          <div className="" key={item.id}>
            <Reveal>
              <div
                className={`group cursor-pointer ${cardSize} bg-ae_keypoints_bg_color border border-ae_quote_ring rounded-lg shadow-md hover:shadow-lg overflow-hidden relative pt-9 px-7 md:pt-16 md:px-10`}
                onClick={() => handleProjectClick(item)}
              >
                <div className="absolute top-3 start-3">
                  <img
                    src={
                      isDarkMode ? item.mini_logo.dark : item.mini_logo.light
                    }
                    alt={item.name}
                    className="trans-none w-12 md:w-20 opacity-60"
                  />
                </div>
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="translate-y-1 rounded-ss-xl rounded-se-xl h-auto max-w-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2"
                  />
                </div>
              </div>
            </Reveal>

            <div className="bg-ae_background_color/50 relative">
              <div className="absolute opacity-20 right-0 bottom-0 w-9/12 lg:w-1/2">
                <img
                  src={item.logo}
                  alt={`Logo ${item.logo}`}
                  className="object-cover w-full h-36 object-left opacity-50 brightness-110"
                  style={{
                    maskImage: "radial-gradient(circle, rgba(255,255,255,1) 70%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(circle, rgba(255,255,255,1) 70%, transparent 100%)",
                  }}
                />
              </div>
              <div className="flex justify-stretch mt-7">
                <div className="text-ae_titles_text_color font-extrabold font-spartan text-2xl xl:text-3xl trans-none">
                  <Reveal>
                    {item.name}<span className="text-ae_logo_color">.</span>
                  </Reveal>
                </div>
                <div className="flex-grow mx-3 self-center">
                  <hr className="border-t border-ae_titles_text_color dark:border-ae_titles_text_color" />
                </div>
                <div className="flex justify-evenly">
                  {item?.languages.map((language) => {
                    const IconComponent = language.icon;

                    return (
                      <div
                        className="px-1 relative group"
                        key={`${language.id}-${item.id}`}
                      >
                        <Reveal>
                          <IconComponent className=" h-8 w-8 lg:h-9 lg:w-9 xl:h-9 xl:w-9 text-ae_logo_tech_stack_color group-hover:text-ae_logo_color trans-none" />
                        </Reveal>

                        <div className="font-mono absolute invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-opacity duration-300 px-3 py-2 -mt-[75px] text-sm font-medium text-ae_titles_text_color bg-ae_quote_bg_color rounded-lg shadow-sm">
                          {language.name}
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className={`w-full ${cardSize} text-base font-medium leading-8 text-ae_titles_text_color mt-4 flex justify-between trans-none`}
              >
                <div className="flex-grow pr-5">
                  <Reveal>{item.desc}</Reveal>
                </div>

                <div className="flex flex-col gap-2">
                  <Reveal>
                    <a
                      href={item.projectLink}
                      className="cursor-pointer"
                      target="_blank"
                    >
                      <TbExternalLink className="h-8 w-8 lg:h-9 lg:w-9 text-ae_logo_tech_stack_color hover:text-ae_logo_color trans-none" />
                    </a>
                  </Reveal>
                  <Reveal>
                    <a
                      href={item.githubLink}
                      className={item.githubLink ? "cursor-pointer" : "hidden"}
                      target="_blank"
                    >
                      <FaGithub className="h-8 w-8 lg:h-9 lg:w-9 text-ae_logo_tech_stack_color hover:text-ae_logo_color trans-none" />
                    </a>
                  </Reveal>
                </div>
              </div>

              <div
                className={`w-full ${cardSize} text-base font-normal leading-8 text-gray-500 mt-4 text-justify`}
              >
                <Reveal>{item.description}</Reveal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
