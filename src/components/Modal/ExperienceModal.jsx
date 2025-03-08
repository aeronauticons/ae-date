import React, { useContext } from "react";
import { TbExternalLink } from "react-icons/tb";
import { ThemeContext } from "../../context/ThemeContext";

export const ExperienceModal = ({ data }) => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <img
        src={data.modalCover}
        className="w-full rounded-ss-xl rounded-se-xl"
      />

      <img
        src={data.logo}
        alt=""
        className="w-32 lg:w-48 xl:w-52 absolute top-2 left-2 xl:top-4 xl:left-4"
      />

      <div className="mt-6 lg:mt-8 px-8">
        <div className="flex items-center space-x-4">
          <span className="text-ae_titles_text_color text-xl md:text-2xl xl:text-3xl font-extrabold xl:font-bold font-spartan">
            {data.name}
          </span>
        </div>

        <div className="flex justify-start pb-4 pt-1 text-xs md:text-sm lg:text-base font-semibold text-gray-500">
          {data.date}
        </div>

        <ul className="list-disc list-inside space-y-2 px-4 ">
          {data.full_details?.map((item) => (
            <li className="leading-8 text-gray-500 marker:text-ae_logo_color" key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>

        <div className="pb-4 px-2 mt-3">
          <div className="flex space-x-6 items-center justify-start">
            <a
              className="flex space-x-2 items-center group cursor-pointer"
              target="_blank"
              href={data.link}
            >
              <TbExternalLink className="h-5 w-5 lg:h-6 lg:w-6 text-ae_logo_color trans-none" />
              <span className="text-ae_logo_color group-hover:underline group-hover:underline-offset-2">
                Company Link
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
