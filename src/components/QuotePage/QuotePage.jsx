import React, { useContext } from "react";
import coffee_in_hand from "./../../assets/QuoteImg/coffee_in_hand.png";
import Reveal from "../plugins/Reveal";
import { myLogo } from "../../constants";
import { ThemeContext } from "../../context/ThemeContext";


export const QuotePage = () => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className="relative isolate overflow-hidden px-6 py-2 md:px-24 sm:py-10 xl:px-96 lg:px-56 ">
      <div className="absolute inset-0  bg-ae_background_color" />
      <div className="absolute inset-y-0 right-1/4 md:right-1/2  mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-ae_quote_bg_color/25 shadow-xl shadow-ae_quote_shadow ring-1 ring-ae_quote_ring sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <figure className="py-10 lg:py-0">
        <div className="flex justify-between mx-auto max-w-screen-2xl">
          <div className="self-center">
            <Reveal>
              <blockquote className="text-center text-2xl font-bold leading-8 md:text-4xl xl:text-[40px] sm:leading-9 text-gray-400">
                <p className="xl:pb-1">
                  <span className="font-black text-gray-500 font-spartan">"CC"</span>{" "}
                  everyday. Sip {" "}
                  <span className="font-black text-gray-500 font-spartan">COFFEE</span>
                  {", "}
                  then{" "}
                  <span className="font-black text-gray-500 font-spartan">CODE</span>.
                </p>
              </blockquote>
            </Reveal>
            <figcaption className="mt-3">
              <div className="mt-2 flex items-center justify-center space-x-3 text-base">
                <Reveal>
                  <div className="lg:w-20 lg:h-14 md:w-16 md:h-10 w-14 h-8 mx-auto overflow-hidden">
                    <img
                      src={isDarkMode ? myLogo.dark : myLogo.light}
                      alt="My Logo"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Reveal>
                <Reveal>
                  <svg
                    width={3}
                    height={3}
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="fill-gray-500"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                </Reveal>
                <Reveal>
                  <div className="text-gray-500">Developer</div>
                </Reveal>
              </div>
            </figcaption>
          </div>
          <div className="xl:self-center">
            <Reveal>
              <img
                src={coffee_in_hand}
                alt="Coffee Img"
                className="rounded-full w-56 md:w-96 xl:w-72 "
              />
            </Reveal>
          </div>
        </div>
      </figure>
    </section>
  );
};
