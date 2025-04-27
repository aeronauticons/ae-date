import React, { useState } from "react";
import Reveal from "../plugins/Reveal";
import { keyPoints } from "../../constants";

const KeyPoints = () => {

  const [expandedStates, setIsExpandedStates] = useState(
    Array(keyPoints.length).fill(false)
  );

  const handleExpand = (index) => {
    setIsExpandedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="flex justify-around mx-auto max-w-screen-2xl gap-3 lg:gap-16">
      {keyPoints.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            onClick={() => handleExpand(index)}
            key={index}
            className="group relative cursor-pointer overflow-hidden bg-ae_keypoints_bg_color px-10 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 lg:hover:-translate-y-1 hover:scale-110 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg "
          >
            <span className=" absolute top-10 z-0 h-16 w-16 md:h-20 md:w-20 rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:scale-[10]"></span>
            <div className="relative mx-auto max-w-md md:text-left">
              <Reveal>
                <span className=" grid h-16 w-16 md:h-20 md:w-20 place-items-center rounded-full bg-gray-500 transition-all duration-300 lg:group-hover:bg-gray-50">
                  <IconComponent className="lg:text-3xl text-2xl text-gray-50 lg:group-hover:text-gray-500"/>
                </span>
              </Reveal>
              <div className="space-y-2 pt-5 text-base trans-none text-gray-500 transition-all duration-0 lg:group-hover:text-gray-50 text-wrap">
                <Reveal>
                  <b>{item.title}</b>
                  <p className="hidden md:block">{item.desc}</p>

                  <p className="block md:hidden text-xs mt-2">
                    {expandedStates[index] ? (
                      item.desc
                    ) : (
                      <span className="hover:underline">Read More</span>
                    )}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KeyPoints;
