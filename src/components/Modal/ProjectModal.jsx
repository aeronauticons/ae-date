import DOMPurify from "dompurify";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { ThemeContext } from "../../context/ThemeContext";

export const ProjectModal = ({ data }) => {

  const { isDarkMode } = useContext(ThemeContext);
  const sanitizedHtml = DOMPurify.sanitize(data.long_desc);

  return (
    <>
      <img src={data.image} className="w-full rounded-ss-xl rounded-se-xl" />

      <div className="mt-6 lg:mt-8 px-8">
        <div className="flex items-center space-x-4">
          <img
            src={isDarkMode ? data.mini_logo.dark : data.mini_logo.light}
            alt=""
            className="w-10 md:w-16 pr-2 border-r-2 border-ae_titles_text_color"
          />
          <span className="text-ae_titles_text_color text-lg md:text-2xl xl:text-3xl font-extrabold xl:font-bold font-spartan">
            {data.name} {data.acronym ? `(${data.acronym})` : ""}
          </span>
        </div>

        <div className="flex justify-start pt-4 text-base md:text-lg px-2">
          <div className="px-1 relative group text-ae_logo_color font-mono">
            { 
              data.languages && data.languages.map((item, index) => (
                <span key={index}>
                  {item.name}
                  {index < data.languages.length - 1 && " - "}
                </span>
              ))
            }
          </div>
        </div>

        <div className="italic font-thin text-base text-gray-500 px-2 pb-4">
          {data.dev_type}
        </div>

        <div className="text-gray-500 px-2 leading-8" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />

        <div className="pb-4 px-2 mt-3">
          <div className="flex space-x-6 items-center justify-start">
            <a className="flex space-x-2 items-center group cursor-pointer" target="_blank" href={data.projectLink}>
              <TbExternalLink className="h-5 w-5 lg:h-6 lg:w-6 text-ae_logo_color trans-none" />
              <span className="text-ae_logo_color group-hover:underline group-hover:underline-offset-2">
                Project Link
              </span>
            </a>

            <a className={`${data.githubLink ? "flex" : "hidden"} space-x-2 items-center group cursor-pointer`} target="_blank" href={data.githubLink}>
              <FaGithub className="h-5 w-5 lg:h-6 lg:w-6 text-ae_logo_color trans-none" />
              <span className="text-ae_logo_color group-hover:underline group-hover:underline-offset-2">
                Souce code
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
