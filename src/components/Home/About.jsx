import React from "react";
import OurResault from "./Resault";
import Title from "../Generic/Title/Title";
import aboutUS from "../../assets/images/home/about-us.svg";
import useSize from "../../hooks/useSize";

const About = ({ data }) => {
  const { width } = useSize();
  const ourResault = data.ourResault;
  const dataOfAbout = data.soloMain?.[0];

  return (
    <div className="mt-[150px] w-full bg-light pb-[100px] pt-[150px] px-[5%] h-max">
      <div className="flex flex-col justify-center items-center w-full h-max">
        <Title variant="section-name">
          JUBA - маркетинговое агентство в Ташкенте
        </Title>
        <div
          className={`${width <= 1200 ? "flex flex-col gap-[30px]" : "grid"} ${
            width <= 1400 && width > 1200
              ? "grid-cols-[60%_40%] gap-[30px]"
              : "grid-cols-2 gap-[50px]"
          } mt-[50px]`}
        >
          <div className="w-full">
            <img
              src={dataOfAbout.photo ? dataOfAbout.photo : aboutUS}
              alt="about icon not found"
              className="w-full rounded-lg h-full cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-between py-[2px] h-full w-full">
            <p className="text-gray-color font-[400] text-[16px] leading-[26px]">
              {dataOfAbout?.description}
            </p>
          </div>
        </div>
        <div className="w-full mt-[100px] h-max">
          <OurResault data={ourResault} />
        </div>
      </div>
    </div>
  );
};

export default About;
