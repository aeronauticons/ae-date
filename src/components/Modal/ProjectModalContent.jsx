import DOMPurify from "dompurify";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export const ProjectModalContent = ({ data, isDarkMode }) => {
  
  const sanitizedHtml = DOMPurify.sanitize(data.long_desc);

  return (
    <>
      <img src={data.image} className="w-full rounded-ss-xl rounded-se-xl" />

      <div className="mt-6 lg:mt-8 px-8">
        <div className="flex items-center space-x-4">
          <img
            src={isDarkMode ? data.logo.dark : data.logo.light}
            alt=""
            className="w-10 md:w-16 pr-2 border-r-2 border-ae_titles_text_color"
          />
          <span className="text-ae_titles_text_color text-lg md:text-2xl xl:text-3xl font-extrabold xl:font-bold font-spartan">
            {data.name} {data.acronym ? `(${data.acronym})` : ""}
          </span>
        </div>

        <div className="flex justify-start py-4  text-base md:text-lg px-2 font-mono">
          <div className="px-1 relative group text-ae_logo_color">
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

        <div className="text-gray-500 px-2 leading-8" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />

        <div className="py-4 px-2 mt-3">
          <div className="mb-2 text-lg md:text-xl xl:text-2xl font-extrabold font-spartan text-ae_titles_text_color drop-shadow-xl  ">
            Project
            <span className="text-ae_logo_color">.</span>
          </div>
          <div className="flex space-x-6 items-center justify-start">
            <a className="flex space-x-2 items-center group cursor-pointer" target="_blank" href={data.projectLink}>
              <TbExternalLink className="h-5 w-5 lg:h-6 lg:w-6 text-ae_logo_color trans-none" />
              <span className="text-ae_logo_color group-hover:underline group-hover:underline-offset-2">
                Project Link
              </span>
            </a>

            <a className="flex space-x-2 items-center group cursor-pointer" target="_blank" href={data.githubLink}>
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
