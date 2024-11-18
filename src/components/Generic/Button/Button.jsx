import React from "react";
import useSize from "../../../hooks/useSize";

const Button = ({
  children,
  variant,
  type = "button",
  className = "",
  hover = false,
  ...args
}) => {
  const { width: w } = useSize();
  const hoverTransition = `transition duration-[180] ease-in`;
  const outerStyle = `flex items-center justify-center min-h-[60px] h-[60px] rounded-[15px] font-[700] md:px-[33px] md:py-[19px] sm:px-[20px] sm:py-[15px] p-[12px] cursor-pointer ${
    hover && "transition duration-[180] ease-in"
  }`;

  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return `bg-yellow border-[3px] border-yellow text-dark-text hover:border-yellow hover:bg-transparent hover:text-light lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] ${hoverTransition}`;
      case "outline":
        return `border-[2px] border-yellow text-yellow bg-transparent hover:bg-yellow hover:text-light lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]`;
      case "secondary":
        return `bg-light text-dark-text border-[3px] border-light hover:bg-transparent hover:text-light lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] ${hoverTransition}`;
      default:
        return "border-[1px] border-yellow text-yellow bg-transparent";
    }
  };

  return (
    <button
      className={`${outerStyle} ${getButtonStyle()} ${className}`}
      type={type}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
