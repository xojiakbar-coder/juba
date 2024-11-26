import React from "react";
import rightIcon from "../../../assets/icons/right-arrow.svg";

const DataCard = ({
  title,
  text,
  href,
  subtitle,
  type = "data",
  res,
  resText,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col bg-dark rounded-[20px] cursor-pointer pb-[50px] w-full min-h-[200px] px-[20px] pt-[30px] font-body-font hover:bg-hover-card-bg transition duration-[180] ease-in"
      onClick={onClick}
    >
      <div
        className={`${
          type === "res"
            ? "text-[56px] font-[700] md:text-[45px]"
            : "text-[24px] font-[700] leading-[100%]"
        } text-yellow font-body-font`}
      >
        {type === "res" ? res : title}
      </div>
      <div className="my-[20px]">
        <p className="text-light font-[400] font-body-font leading-[26px]">
          {subtitle}
        </p>
      </div>
      <p
        className={`my-[20px] text-light font-[400] font-body-font leading-[26px] ${
          resText && "capitalize text-[24px] leading-[36px] md:text-[20px]"
        }`}
      >
        {resText ? resText : text}
      </p>
      {href && (
        <div className="flex flex-row items-center">
          <a href={href} className="text-gray-color font-body-font">
            Подробнее
          </a>
          <img
            src={rightIcon}
            alt="right arrow icon not found"
            className="w-[23px] h-[23px] min-h-[20px] mt-[1px] mx-[8px]"
          />
        </div>
      )}
    </div>
  );
};

export default DataCard;
