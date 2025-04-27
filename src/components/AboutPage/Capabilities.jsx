import React from "react";
import laptop_office from "../../assets/General/laptop_office.jpg";
import Reveal from "../plugins/Reveal";
import { myTechStack, techStackDetails, yearExp } from "../../constants";

export const Capabilities = () => {

  return (
    <section className="min-h-screen max-w-screen flex flex-col justify-center items-center relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ae_background_color" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-ae_quote_bg_color/25 shadow-xl shadow-ae_quote_shadow ring-1 ring-ae_quote_ring sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <figure className="py-10 lg:py-0">
        <div className="md:flex md:justify-center md:space-x-10 lg:space-x-20 xl:space-x-28 space-y-4 md:space-y-0 lg:mx-auto lg:max-w-screen-2xl">
          <div className="w-100 flex justify-center">
            <Reveal>
              <div className="relative inline-block">
                <img
                  src={laptop_office}
                  alt="Laptop Image"
                  className="w-72 md:w-80 lg:w-96 shadow-lg rounded-sm"
                />
                <div className="absolute bottom-4 left-4 bg-gray-100/80 p-4 shadow-lg text-gray-900 border-s-4 border-ae_logo_color">
                  <span className="flex items-center space-x-3">
                    <p className="text-4xl text-ae_logo_color font-extrabold flex items-center">
                      {yearExp}+
                    </p>
                    <p className="text-lg font-semibold">Years</p>
                  </span>
                  <p className="text-lg mt-1 font-semibold text-center">
                    Experience
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:w-80 lg:w-[40%] xl:py-6 pt-6 md:pt-0 px-10 sm:px-20 md:px-0">
            <Reveal>
              <div className="bg-ae_background_color/60 text-ae_logo_color/70 p-2 shadow-lg w-24 h-9 text-center text-sm font-semibold rounded mb-3">
                Best of me
              </div>
            </Reveal>

            <Reveal>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-500 mb-4">
                <span className="text-ae_logo_color font-bold">Tech Stack</span>{" "}
                I'm Capable of Using
              </div>
            </Reveal>

            <Reveal>
              <div className=" text-gray-500 text-lg font-normal leading-8 mb-4 text-justify">
                {techStackDetails}
              </div>
            </Reveal>

            <div className="flex gap-4 sm:gap-8 lg:gap-12 flex-wrap w-full justify-center my-10">
              {myTechStack.map((item) => {

                const IconComponent = item.icon

                return (
                  <Reveal key={item.name}>
                    <div className="group flex flex-col items-center">
                      <div><IconComponent className="h-8 w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 text-ae_logo_tech_stack_color group-hover:text-ae_logo_color trans-none"/></div>
  
                      <div className="text-gray-500 font-mono cursor-default text-sm lg:text-base mt-1">
                        {item.name}
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};
