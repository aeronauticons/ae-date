import React from "react";
import { MyArtsPage } from "../components/MoreAboutMePage/MyArtsPage/MyArtsPage";
import { MyHobbiesPage } from "../components/MoreAboutMePage/MyArtsPage/MyHobbies";
import { MySocialLists } from "../components/MoreAboutMePage/MySocials/MySocialLists";

export const MoreAboutMe = ({ openModal }) => {

  return (
    <div className="overflow-y-auto overflow-x-hidden">
        <MyArtsPage openModal={openModal}/>
        <MyHobbiesPage openModal={openModal}/>
        <MySocialLists openModal={openModal}/>

    </div>
  );
};
