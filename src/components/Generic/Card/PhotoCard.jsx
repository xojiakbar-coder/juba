import React from "react";

const PhotoCard = ({ image = "", title = "", buttons = [] }) => {
  return (
    <div className="flex flex-col w-full rounded-[30px] py-[40px] px-[30px] border-[1px] border-light min-h-max">
      <div>
        <div className="text-left font-[400] text-[24px] font-body-font text-light">
          {title}
        </div>
        <div className="w-full">
          <img
            src={image}
            alt="image not found"
            className="mt-[30px] w-full grayscale-[40%] hover:grayscale-0 transition duration-100 ease-in"
          />
        </div>
        <div
          className={`w-full h-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 custom:grid-cols-4 xxl:grid-cols-4 items-center gap-[20px] my-[30px]`}
        >
          {buttons.length > 0 &&
            buttons.map(({ id, title }) => {
              return (
                <div
                  key={id}
                  className="flex justify-center items-center border-[1px] border-light cursor-pointer hover:bg-hover-card-bg w-full rounded-[10px] px-[20px] py-[19px] transition duration-[180] ease-in"
                >
                  <button className="text-light whitespace-nowrap text-center font-[400] text-[12px] leading-[15px] font-body-font text-gray-color">
                    {title}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
