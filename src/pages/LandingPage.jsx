import { FrontPage } from "../components/FrontPage/FrontPage";
import { QuotePage } from "../components/QuotePage/QuotePage";
import { AboutPage } from "../components/AboutPage/AboutPage";
import { Experience } from "../components/ExperiencePage/Experience";
import { Projects } from "../components/Projects/Projects";
import { GetInTouch } from "../components/ContactPage/GetInTouch";

export const LandingPage = ( openModal ) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <FrontPage />
      {/* <QuotePage />
      <AboutPage />
      <Experience openModal={openModal}/>
      <Projects openModal={openModal} />
      <GetInTouch /> */}
    </div>
  );
};
