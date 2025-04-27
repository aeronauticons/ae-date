import {
  Dialog,
  PopoverGroup,
  DialogPanel,
  PopoverButton,
  Popover,
  PopoverPanel,
} from "@headlessui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { LuChevronDown } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { myResumeLink, myLogo, isFindingJob, pathURL } from "../constants";
import { ThemeContext } from "../context/ThemeContext";
import { DarkModeButton } from "../components/ButtonComponents/DarkModeButton";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCLickedResume, setIsClickedResume] = useState(false);
  const [validLocation, setValidLocation] = useState(true);
  const [defaultLocation, setDefaultLocation] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);

  const location = useLocation();

  useEffect(() => {
    setValidLocation(pathURL.includes(location.pathname));
    setDefaultLocation(location.pathname == pathURL[0]);
  }, [location.pathname]);

  const handleCLickResume = () => {
    setIsClickedResume(true);
  };

  const handleScrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      setMobileMenuOpen(false);

      setTimeout(() => {
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 0;

        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 150);
    }
  }, []);

  const navigationText = (className) => {
    return defaultLocation ? (
      <>
        <button
          onClick={() => handleScrollToSection("about_page")}
          className={className}
        >
          About
        </button>
        <button
          onClick={() => handleScrollToSection("experience_page")}
          className={className}
        >
          Experience
        </button>
        <button
          onClick={() => handleScrollToSection("project_page")}
          className={className}
        >
          Project
        </button>
      </>
    ) : null;
  };

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (defaultLocation) {
      setMobileMenuOpen(false);

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 150);
    } else {
      window.location.href = "/";
    }
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();

    setMobileMenuOpen(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 150);
  };

  return !validLocation ? null : (
    <header className="fixed top-0 left-0 right-0 z-20 shadow-md backdrop-blur border-b border-slate-300/20 dark:border-slate-300/20 ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <button
            className="-my-7 -mx-3 p-1.5 cursor-pointer"
            onClick={handleLogoClick}
          >
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={isDarkMode ? myLogo.dark : myLogo.light}
              className="w-auto h-16"
            />
          </button>
        </div>

        {defaultLocation && (
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        )}

        {/* <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navigationText("text-sm font-semibold leading-6 text-gray-500")}
        </PopoverGroup> */}

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <DarkModeButton />
          <button
            href="#"
            target="_blank"
            className="border-l border-ae_text_color pl-4 text-base ml-2 font-semibold leading-6 text-ae_titles_text_color hover:text-ae_text_color relative"
          >
            Login
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto px-6 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 backdrop-blur">
          <div className="flex items-center justify-between">
            <button
              className="rounded-full cursor-pointer"
              onClick={handleLogoClick}
            >
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={isDarkMode ? myLogo.dark : myLogo.light}
                className="h-auto w-16"
              />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FaXmark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-0 ">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* <div className="space-y-2 py-9">
                {navigationText(
                  "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-100 w-full text-left"
                )}
              </div> */}
              <div className="py-6 flex justify-between self-center">
                <button
                  href="#"
                  target="_blank"
                  className="text-base font-semibold leading-6 text-ae_titles_text_color hover:text-ae_text_color relative"
                >
                  Login
                </button>
                <DarkModeButton/>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
