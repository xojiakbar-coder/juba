import React from "react";
import Title from "../Generic/Title/Title";
import Button from "../Generic/Button/Button";
import useSize from "../../hooks/useSize";

const HomeContent = ({ title, short_description }) => {
  const { width } = useSize();

  return (
    <div className="flex flex-col h-full">
      <div>
        <Title variant="secondary" className="w-[70%] animate-character">
          {title && title}
        </Title>
      </div>
      <p className="text-light w-full mt-[30px] md:w-[70%] xl:w-[60%] lg:w-[80%] w-full h-max text-[20px] leading-[26px]">
        {short_description && short_description}
      </p>
      <div
        className={`flex md:flex-row flex-col gap-[20px] ${
          width < 540
            ? "mt-[40px] flex-col-reverse"
            : width <= 1130
            ? "mt-[30px]"
            : "mt-[40px]"
        } `}
      >
        <Button variant="primary" className="w-max">
          Обсудить проект
        </Button>
        <Button variant="secondary" className="w-max">
          Коммерческое предложение
        </Button>
      </div>
    </div>
  );
};

export default HomeContent;
