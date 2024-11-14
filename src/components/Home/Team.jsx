import React, { useState } from "react";
import Title from "../Generic/Title/Title";

const Team = ({ data }) => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="flex flex-col py-[150px]  pt-[120px]">
      <Title variant="section-name" className="text-light">
        Наша команда
      </Title>
      <div className="flex justify-center items-center overflow-x-scroll flex-col mt-[100px]">
        <div className="flex flex-row gap-[20px]">
          {data &&
            data?.map((member, index) => (
              <div
                key={index}
                className="relative cursor-pointer shrink-0"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img
                  src={
                    hoveredMember === index
                      ? member.background_image
                      : member.photo
                  }
                  alt={member.name}
                  className={`w-full h-full px-[20px] object-none transition-transform duration-300 ${
                    hoveredMember === index ? "grayscale-0" : "grayscale"
                  }`}
                />
                {hoveredMember === index && (
                  <div className="absolute bottom-2 right-0 bg-white bg-opacity-90 p-2 rounded-lg shadow-lg">
                    <h3 className="text-sm font-bold">{member.username}</h3>
                    <p className="text-xs">{member.job_title}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
