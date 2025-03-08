import React from "react";
import { AutoPlay } from "../components/plugins/AutoPlay";
import errorPage from "../assets/Animations/Error404.json";
import { LuArrowLeft } from "react-icons/lu";

export const NotFoundPage = () => {

  return (
    <div className="min-h-screen max-w-screen flex justify-center items-center bg-ae_background_color pb-20 trans-none">
      <div className="text-center">
        <AutoPlay
          src={errorPage}
          className="w-64 md:w-96 lg:w-10/12 xl:w-full"
        />
        <div className="text-4xl md:text-5xl xl:text-6xl font-extrabold font-spartan text-ae_titles_text_color drop-shadow-xl  ">
          Error Page
          <span className="text-ae_logo_color">.</span>
        </div>

        <div className="fixed top-10 left-10 text-ae_titles_text_color hover:underline hover:underline-offset-4 cursor-pointer">
            <a className="flex items-center" href="/"><LuArrowLeft className="mr-1"/> Go back</a>
        </div>
      </div>
    </div>
  );
};
