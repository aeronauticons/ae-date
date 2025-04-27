import React, { useContext } from "react";
import { messageIntro, myArts } from "../../../constants";
import { MyArtModal } from "../../Modal/MyArtModal";
import Reveal from "../../plugins/Reveal";
import { ThemeContext } from "../../../context/ThemeContext";

export const MyArtsPage = ({ openModal }) => {
  
  const handleArtClick = (artData) => {
    openModal(artData, MyArtModal);
  };

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="relative max-w-screen min-h-screen flex bg-ae_background_color justify-center items-center pt-48 lg:pt-16 xl:pt-44 px-12 md:px-20 lg:px-24 xl:px-36 2xl:px-52">
      <div className="space-y-6 lg:space-y-10">
        <div className="font-normal text-lg lg:text-xl text-gray-500 tracking-tight lg:pe-32 xl:pe-44 2xl:pe-52">
          {messageIntro &&
            messageIntro.map((item) => (
              <div className="mb-2 leading-8 text-justify" key={item.id}>
                <Reveal>{item.text}</Reveal>
              </div>
            ))}
        </div>

        <Reveal>
          <div className="grid gap-4">
            <div className="grid gap-4 overflow-x-auto pb-2 xl:pb-4">
              <div className="flex gap-4">
                {myArts &&
                  myArts.map((item) => (
                    <div
                      key={item.name}
                      className="w-[200px] md:w-[250px] lg:w-[300px] 2xl:w-[350px] h-[200px] md:h-[300px] lg:h-[350px] 
                        flex-shrink-0 overflow-hidden rounded-lg group cursor-pointer"
                      onClick={() => handleArtClick(item)}
                    >
                      <img
                        className={`object-cover group-hover:scale-110  transition-transform duration-200 ease-in-out ${
                          item.orientation === "landscape"
                            ? "w-auto h-full"
                            : "h-auto w-full object-center"
                        }`}
                        src={item.image}
                        alt={`img-${item.name}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
