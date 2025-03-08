import React from "react";

export const Button = (props) => {
  const { type, onClick, className, disabled, children, ...rest } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
