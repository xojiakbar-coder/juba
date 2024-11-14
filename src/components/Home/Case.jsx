import React from "react";
import Title from "../Generic/Title/Title";
import PhotoCard from "../Generic/Card/PhotoCard";
import photoCard_data from "../../utils/photoCard";

const Case = ({ data }) => {
  return (
    <div className="mt-[150px] text-center">
      <Title variant="title">Наши кейсы</Title>
      <div className="grid mt-[50px] lg:grid-cols-2 grid-cols-1 gap-[20px]">
        {case_card_item?.map(({ id, title, image, button }) => {
          return (
            <PhotoCard key={id} title={title} image={image} buttons={button} />
          );
        })}
      </div>
    </div>
  );
};

export default Case;
