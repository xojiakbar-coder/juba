import React from "react";

const DataCard = ({
  title,
  text,
  subtitle,
  type = "data",
  res,
  resText,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col bg-dark rounded-[20px] group cursor-pointer pb-[50px] w-full min-h-[200px] px-[20px] pt-[30px] font-body-font hover:bg-hover-card-bg transition duration-[180] ease-in"
      onClick={onClick}
    >
      <div
        className={`${
          type === "res"
            ? "text-[56px] font-[700] md:text-[45px]"
            : "text-[24px] font-[700] leading-[30px]"
        } text-yellow font-body-font`}
      >
        {type === "res" ? res : title}
      </div>
      {subtitle && (
        <div className="my-[20px]">
          <p className="text-light font-[400] font-body-font leading-[26px]">
            {subtitle}
          </p>
        </div>
      )}
      <p
        className={`my-[20px] text-light font-[400] font-body-font leading-[26px] ${
          resText && "capitalize text-[24px] leading-[36px] md:text-[20px]"
        }`}
      >
        {resText ? resText : text}
      </p>
      {onClick && (
        <div className="flex flex-row items-center mt-auto text-gray-color group-hover:text-yellow">
          <div onClick={onClick} className="text-inherit font-body-font">
            Подробнее
          </div>
          <svg
            width="23px"
            height="23px"
            className="min-h-[20px] mx-[3px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M10 7L15 12L10 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default DataCard;
