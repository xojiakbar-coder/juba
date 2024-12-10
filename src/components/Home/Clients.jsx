import React from "react";
import { Element } from "react-scroll";
import Title from "../Generic/Title/Title";

const Clients = ({ data }) => {
  return (
    <>
      {data && (
        <Element name="/clients">
          <div className="flex flex-col my-[100px] pt-[120px]">
            <Title variant="section-name" className="text-white">
              Bizning mijozlar
            </Title>
            <div className="bg-yellow w-full mt-[35px]">
              <div className="py-12 relative w-full">
                <div className="relative flex max-w-[100vw] overflow-hidden py-5">
                  <div className="flex items-center justify-between gap-[40px] whitespace-nowrap w-max animate-marquee [--duration:60s] hover:[animation-play-state:paused]">
                    {data.concat(data, data).map((i, id) => (
                      <div key={id} className="flex items-center h-full px-2.5">
                        <img
                          className="min-w-[150px] sm:min-w-[200px] md:min-w-[250px] px-5 object-cover flex-shrink-0 cursor-pointer"
                          src={i.photo}
                          alt="clients logos not found"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
      )}
    </>
  );
};

export default Clients;
