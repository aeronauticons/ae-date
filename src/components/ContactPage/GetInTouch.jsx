import React, { useContext, useEffect, useRef, useState } from "react";
import { ControlTextField } from "../InputComponents/ControlTextField";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "../ButtonComponents/Button";
import Reveal from "../plugins/Reveal";
import sendEmail from "../../assets/Animations/sendEmail.json";
import { AutoPlay } from "../plugins/AutoPlay";
import { emailSchema } from "../../core/validations/emailSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { yearUpdate, myLogo } from "../../constants";
import messageSent from "../../assets/Animations/messageSent.json";
import { LiaGrinWinkSolid } from "react-icons/lia";
import { ThemeContext } from "../../context/ThemeContext";

export const GetInTouch = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailSentGIF, setEmailSentGIF] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  const formRef = useRef();

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(emailSchema),
    defaultValues: {
      user_email: "",
      user_name: "",
      message: "",
    },
  });

  const service_id = import.meta.env.VITE_YOUR_SERVICE_ID;
  const template_id = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_YOUR_PUBLIC_KEY;

  const { control, handleSubmit, reset } = form;
  const values = useWatch({ control });
  const isFormComplete = Object.values(values).every((value) => value);

  useEffect(
    () => (isFormComplete ? setIsDisabled(false) : setIsDisabled(true)),
    [isFormComplete]
  );

  const onSubmit = (data) => {
    setIsDisabled(true);
    setEmailSentGIF(true);

    setTimeout(() => {
      setEmailSentGIF(false);
    }, 3000);

    emailjs
      .sendForm(service_id, template_id, formRef.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: `Message Sent!`,
          });

          reset();
        },
        (error) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: `Error!`,
            text: `There was an error sending your message. Please try again later. Error Message: ${error.text}`,
          });

        }
      );
  };

  return (
    <section
      className="relative isolate overflow-hidden px-12 pt-2 md:pt-10 md:px-24 xl:px-96 lg:px-56 lg:pb-0 pb-20 lg:min-h-screen max-w-screen"
      id="get_in_touch"
    >
      <div className="absolute inset-0  bg-ae_background_color" />
      <div className="absolute inset-y-0 right-1/4 md:right-1/2  mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-ae_quote_bg_color/25 shadow-xl shadow-ae_quote_shadow ring-1 ring-ae_quote_ring sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      {emailSentGIF && (
        <div className="flex justify-center items-center absolute inset-0 z-50">
          <AutoPlay src={messageSent} className="2xl:w-80 w-72" />
        </div>
      )}

      <div className="flex justify-between 2xl:space-x-0 lg:space-x-10 xl:space-x-8 space-x-0 2xl:mx-auto 2xl:max-w-screen-2xl">
        <div className="flex-1 flex justify-center">
          <div>
            <div className="font-medium text-sm md:text-base lg:text-xl text-ae_titles_text_color tracking-widest mb-5 lg:mb-10 text-center">
              <div className="w-20 mb-2 h-20 overflow-hidden rounded-full mx-auto">
                <img
                  alt="My Logo"
                  src={isDarkMode ? myLogo.dark : myLogo.light}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-4xl md:text-5xl xl:text-6xl font-extrabold font-spartan text-ae_titles_text_color drop-shadow-xl flex justify-center trans-none">
                <Reveal>
                  Get in touch
                  <span className="text-ae_logo_color">.</span>
                </Reveal>
              </div>

              <div className="justify-center flex">
                <Reveal>Connect with me by writing an email.</Reveal>
              </div>
            </div>
            <div>
              <div className="relative mb-6">
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                  <Reveal>
                    <ControlTextField
                      tags="input"
                      type="text"
                      name="user_name"
                      id="name"
                      placeholder=" "
                      label="Your Name"
                      control={control}
                    />
                    <ControlTextField
                      tags="input"
                      name="user_email"
                      id="email"
                      placeholder=" "
                      label="Your Email"
                      control={control}
                    />
                    <ControlTextField
                      tags="textarea"
                      type="text"
                      name="message"
                      id="message"
                      placeholder=" "
                      label="Message"
                      control={control}
                      rows="7"
                      cols="50"
                    />
                    <Button
                      type="submit"
                      className={`flex w-full justify-center px-3 py-2 tracking-wider font-semibold text-base bg-ae_logo_color rounded-lg text-white 
                        ${
                          isDisabled
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:shadow-lg hover:opacity-80 cursor-pointer"
                        }`}
                      disabled={isDisabled}
                      children="SUBMIT"
                    />
                    <div className="flex justify-center items-center text-ae_titles_text_color mt-1 font-extralight text-xs lg:text-sm">
                      Hit submit button to view effect. <LiaGrinWinkSolid className="ml-1" />
                    </div>
                  </Reveal>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block content-center z-0">
          <AutoPlay
            src={sendEmail}
            className={"hidden md:block 2xl:w-80 lg:w-72"}
          />
        </div>
      </div>
    </section>
  );
};
