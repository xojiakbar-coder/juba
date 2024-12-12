import React, { memo } from "react";
import useSize from "../../hooks/useSize";
import Title from "../Generic/Title/Title";
import Button from "../Generic/Button/Button";

const HomeContent = memo(({ title, short_description }) => {
  const { width } = useSize();

  return (
    <div className="flex flex-col h-full">
      <div>
        <Title
          variant="secondary"
          className={`${width > 1200 ? "w-max" : "w-[80$]"}`}
        >
          {title && title}
        </Title>
      </div>
      {width > 1020 && (
        <p className="text-light mt-[30px] md:w-[70%] xl:w-[60%] lg:w-[80%] w-full h-max text-[20px] leading-[26px]">
          {short_description && short_description}
        </p>
      )}
      <div
        className={`flex md:flex-row flex-col gap-[20px] ${
          width < 540
            ? "mt-[40px] flex-col"
            : width <= 1130
            ? "mt-[30px]"
            : "mt-[40px]"
        } `}
      >
        <Button variant="primary" className="w-max">
          Loyihani muhokama qiling
        </Button>
        <Button variant="secondary" className="w-max">
          Tijorat taklifi
        </Button>
      </div>
    </div>
  );
});

export default HomeContent;
