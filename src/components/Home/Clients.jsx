import React from "react";
import Marquee from "react-fast-marquee";
import Title from "../Generic/Title/Title";

const Clients = ({ data }) => {
  return (
    <div className="flex flex-col my-[100px] pt-[120px]">
      <Title variant="section-name" className="text-white">
        Наши клиенты
      </Title>
      <div className="bg-yellow w-full mt-[35px]">
        <div className="py-12 relative w-full">
          <Marquee
            className="flex items-center justify-between gap-[100px] whitespace-nowrap w-full"
            speed={80}
          >
            {data?.concat(data, data).map((i, id) => (
              <img
                key={id}
                className="min-w-[150px] sm:min-w-[200px] md:min-w-[250px] px-5 h-auto object-cover flex-shrink-0 cursor-pointer"
                src={i.photo}
                alt="clients logos not found"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Clients;
