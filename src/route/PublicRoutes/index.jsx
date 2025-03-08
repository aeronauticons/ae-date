import { Container } from "./container";
import { LandingPage } from "../../pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { MoreAboutMe } from "../../pages/MoreAboutMe";
import { pathURL } from "../../constants";

export const PublicRoutes = ({ openModal }) => (
    <Routes>
      <Route element={<Container />}>
        <Route index element={<LandingPage openModal={openModal} />} />
        <Route path={pathURL[1]} element={<MoreAboutMe openModal={openModal}/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  );
