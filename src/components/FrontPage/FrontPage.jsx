import { useContext } from "react";
import "../FrontPage/frontPage.css";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import Reveal from "../plugins/Reveal";
import { ThemeContext } from "../../context/ThemeContext";
import heartEffect from "../../assets/Animations/HeartEffect.json";
import { AutoPlay } from "../plugins/AutoPlay";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export const FrontPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="bg-ae_background_color min-h-screen max-w-screen flex flex-col justify-center">
      <div className="mx-auto max-w-screen-2xl z-10">
        <div className="justify-items-center mb-0 md:mb-16 xl:px-5 md:px-14">
          <div className="md:w-1/2 sm:w-9/12 w-100 flex justify-center">
            <ProfilePage />
          </div>

          <div className="w-full md:w-1/2 px-10 md:px-0 text-center mb-6">
            <Reveal>
              <span className="text-xl lg:text-5xl font-medium tracking-normal text-balance text-ae_titles_text_color">
                Swipe, Match, Connect
              </span>
              <p className="mt-3 text-sm sm:text-md md:text-lg leading-7 lg:px-7 text-ae_text_color">
                Date Wish connects you with like-minded singles for meaningful
                matches. Swipe, explore profiles, and let chance spark something
                special. Join now and turn your wishes into reality!
              </p>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal>
              <div className="md:flex md:space-x-5 space-y-3 md:space-y-0 mb-4">
                <button className="flex justify-center items-center w-64 text-sm md:text-lg h-12 md:w-auto px-6 py-2 border-spacing-10 border-blue-300 rounded-lg bg-blue-700 hover:bg-blue-500 transition text-white">
                  <FaFacebook className="mr-2 text-lg" /> Continue with Facebook
                </button>
                <button className="flex justify-center items-center w-64 text-sm md:text-lg h-12 md:w-auto px-6 py-2 border border-gray-300 rounded-lg bg-white hover:bg-red-100 transition">
                  <FaGoogle className="mr-2 text-lg" /> Continue with Google
                </button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="text-center px-5 sm:px-14">
              <p className="mb-4 text-sm md:text-lg text-ae_titles_text_color cursor-pointer underline underline-offset-2 hover:text-ae_text_color ">
                Sign Up with Email.
              </p>
              <p className="text-xs md:text-sm font-thin text-gray-400 sm:px-32">
                By clicking Continue to join or sign in, you are agree to Date
                Wish{" "}
                <span className="text-ae_titles_text_color cursor-pointer">
                  User Agreement Policy,{" "}
                </span>
                <span className="text-ae_titles_text_color cursor-pointer">
                  Privacy Policy,{" "}
                </span>{" "}
                and{" "}
                <span className="text-ae_titles_text_color cursor-pointer">
                  Cookie Policy.
                </span>
                <p className="mt-4 text-sm md:text-lg text-ae_text_color">
                  New to Date Wish?{" "}
                  <span className=" cursor-pointer font-semibold text-ae_titles_text_color hover:text-ae_text_color">
                    Join Now.
                  </span>
                </p>
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <AutoPlay
        src={heartEffect}
        className="absolute
        right-36 
        sm:bottom-32 sm:right-52
        md:top-0 md:right-64
        lg:bottom-5 lg:right-0 
        xl:bottom-0
        lg:w-1/2 w-full z-0"
      />
    </div>
  );
};
