import { memo, useState } from "react";
import Title from "../Generic/Title/Title";
import { Element } from "react-scroll";

const Team = memo(({ data }) => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <Element name="/our-team">
      <div className="flex flex-col py-[150px] pt-[120px] px-[16px]">
        <Title variant="section-name" className="text-light">
          Наша команда
        </Title>
        <div className="flex justify-center w-full pt-[100px]">
          <div className="flex flex-col overflow-x-auto w-full">
            <div className="flex gap-[20px] w-full overflow-x-auto snap-x snap-mandatory justify-between">
              {data &&
                data?.map((member, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer h-[250px] min-w-[200px] snap-center shrink-0"
                    onMouseEnter={() => setHoveredMember(index)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <div
                      key={member.id}
                      className="flex relative group rounded-sm w-full h-full"
                    >
                      {/* disactive photo */}
                      <img
                        src={member.photo}
                        alt={`${member.username} not found`}
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0 select-none"
                      />
                      {/* active photo */}
                      <img
                        src={member.background_image}
                        alt={`${member.username} not found`}
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100 select-none"
                      />
                    </div>
                    {/* Will show when hovered */}
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
      </div>
    </Element>
  );
});

export default Team;
