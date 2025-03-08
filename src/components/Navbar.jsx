import {
  Dialog,
  PopoverGroup,
  DialogPanel,
  PopoverButton,
  Popover,
  PopoverPanel,
} from "@headlessui/react";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { LuChevronDown } from "react-icons/lu";
import { DateTime } from "./FrontPage/DateTime";
import { useLocation } from "react-router-dom";
import {
  myContacts,
  myResumeLink,
  myLogo,
  isFindingJob,
  pathURL,
} from "../constants";
import { ThemeContext } from "../context/ThemeContext";

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
    <header className="fixed top-0 left-0 right-0 z-10 shadow-md backdrop-blur border-b border-slate-300/20 dark:border-slate-300/20 ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a
            className="-my-7 -mx-3 p-1.5 cursor-pointer"
            onClick={handleLogoClick}
          >
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={isDarkMode ? myLogo.dark : myLogo.light}
              className="w-auto h-16"
            />
          </a>
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navigationText("text-sm font-semibold leading-6 text-gray-500")}

          <Popover className="relative">
            {({ open }) => (
              <>
                {defaultLocation && (
                  <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 transition">
                    Contact
                    <LuChevronDown
                      className={`ml-1 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </PopoverButton>
                )}

                <PopoverPanel
                  transition={true.toString()}
                  className="absolute -right-2 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-ae_navbar_modal/90  shadow-2xl ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {myContacts.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-ae_hover_modal"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-ae_logo_color" />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-gray-500"
                              target="_blank"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-500">{item.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </PopoverGroup>

        {defaultLocation ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={myResumeLink}
              target="_blank"
              className={`${
                !isFindingJob && "line-through"
              } text-sm font-semibold leading-6 text-gray-500 hover:underline-offset-2 hover:underline relative`}
              onClick={() => handleCLickResume()}
            >
              My Resume
              {!isCLickedResume && (
                <span
                  className={`${
                    !isFindingJob && "hidden"
                  } absolute -top-1 right-0 rounded-full bg-ae_logo_color w-2 h-2 animate-ping`}
                ></span>
              )}
            </a>
          </div>
        ) : (
          <a
            className="-my-7 -mx-3 p-1.5 cursor-pointer"
            onClick={handleScrollToTop}
          >
            <div className="text-sm font-semibold leading-6 text-gray-500 ">
              About Me
            </div>
          </a>
        )}
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
            <a
              className="rounded-full cursor-pointer"
              onClick={handleLogoClick}
            >
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={isDarkMode ? myLogo.dark : myLogo.light}
                className="h-auto w-16"
              />
            </a>
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
              <div className="space-y-2 py-9">
                {navigationText(
                  "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-100 w-full text-left"
                )}
              </div>
              <div className="py-6 flex justify-between self-center">
                <a
                  href={myResumeLink}
                  target="_blank"
                  className={`${
                    !isFindingJob && "line-through"
                  } -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-100 w-9/12`}
                >
                  My Resume
                </a>

                <div className="flex justify-end w-3/12 self-center">
                  <DateTime className="text-gray-500 z-30 font-mono text-xs flex" />
                </div>
              </div>
            </div>

            <div className="fixed flex space-x-4 pt-4 bottom-6 inset-x-0 justify-center">
              {myContacts.map((item) => {
                const IconComponent = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="bg-ae_hover_modal hover:bg-white flex h-11 w-11 flex-none items-center justify-center rounded-lg"
                  >
                    <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-ae_logo_color" />
                  </a>
                );
              })}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
