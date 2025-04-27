import React, { useEffect } from "react";
import { Controller } from "react-hook-form";


export const ControlTextField = (props) => {
  const { tags: Tag, control, name, label, className, type, ...rest } = props;

  useEffect(() => {
    // Dynamically import tw-elements only for this component
    const loadTwElements = async () => {
      const twElements = await import("tw-elements");
      // Initialize tw-elements if it has an initialization function
      if (twElements && typeof twElements.default === "function") {
        twElements.default();
      }
    };
    loadTwElements();
  }, []);

  return (
    <div className="mb-5 relative">
      <Controller
        control={control}
        name={name}
        render={({
          field: { name, onChange, value },
          fieldState: { error },
        }) => (
          <>
            <Tag
              className="z-30 peer block w-full min-h-[auto] rounded border border-gray-400 bg-transparent px-6 py-3 
                                    leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-ae_logo_color focus:ring-0 
                                    text-neutral-500 dark:autofill:shadow-autofill caret-ae_logo_color"
              id={name}
              name={name}
              type={type}
              value={value ?? ""}
              onChange={onChange}
              {...rest}
              data-twe-input-wrapper-init
            />
            {error && <p className="text-xs text-red-400">{error.message}</p>}
            <label
              htmlFor={name}
              className={`absolute z-10 left-2 bg-ae_contact_label px-1 pt-[1pt] transition-all 
              duration-200 ease-out transform  pointer-events-none
                ${
                  value
                    ? "-top-2 scale-75 text-ae_logo_color px-3"
                    : "top-2 scale-100 text-neutral-500"
                }`}
            >
              {label}
            </label>
          </>
        )}
      />
    </div>
  );
};
