import React from "react";
import Desc from "../Desc";
import Title from "../Title/Title";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useSize from "../../../hooks/useSize";

const Works = ({ data }) => {
  console.log(data);
  const { width } = useSize();
  // const titleData = data?.find((item) => item.id === 1);
  // const centerItem = data?.find((item) => item.id === 2).id;

  return (
    <>
      {data?.length > 0 && (
        <div className="my-[100px] w-full">
          <div className="flex justify-center items-center flex-col w-full max-w-full">
            <Title variant="section-name" className="text-light">
              Наши работы
            </Title>
            <Desc className="text-center">
              {titleData?.short_description || ""}
            </Desc>
          </div>
          <div
            className={`grid ${
              width > 420 ? "grid-cols-3" : "grid-cols-1"
            } gap-[20px] place-items-center w-full`}
          >
            {data.map((item) => (
              <div key={item?.id} className="w-max">
                <img
                  src={item.photo}
                  alt={item.services || "Service Image"}
                  className={`rounded-lg ${
                    width > 1020 ? "w-[223px] h-[448px]" : "w-[163px] h-[330px]"
                  } cursor-pointer opacity-45 hover:opacity-100 ${
                    item.id === centerItem && width > 420
                      ? "opacity-100 scale-90 transition duration-[330ms] ease-out z-[999] relative"
                      : "transition duration-[330ms] ease-out scale-75 hover:scale-90"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Works;
