import React from "react";
import Title from "../Generic/Title/Title";
import DataCard from "../Generic/Card/Card";

const OurResault = ({ data }) => {
  return (
    <>
      {data && (
        <div className="w-full h-max pt-[100px]">
          <Title variant="section-name" className="text-center">
            Наши результаты в цифрах
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] mt-[50px] w-full">
            {data &&
              data?.map(({ id, title, result }) => {
                return (
                  <DataCard
                    key={id}
                    type="res"
                    res={String(result) + "+"}
                    resText={title}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default OurResault;
