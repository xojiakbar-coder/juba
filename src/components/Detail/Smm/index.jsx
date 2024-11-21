// import axios from "axios";
import Headers from "./Headers";
import Projects from "./Projects";
import { Fragment, useEffect, useState } from "react";
import useSize from "../../../hooks/useSize";
import About from "../../Generic/About/About";
import aboutUS from "../../../assets/images/home/about-us.svg";
// import ENDPOINTURL from "../../../config/endpoint";
import photoCard_data from "../../../utils/photoCard";

const SMM = ({ data }) => {
  const { width } = useSize();
  const [loading, setLoading] = useState(true);
  const titleData = data[0];

  const section_data = [
    {
      id: 1,
      Section: Headers,
      padding: true,
      data: titleData,
      path: "",
    },
    {
      id: 2,
      Section: About,
      path: "",
      padding: false,
      data: [
        {
          photo: aboutUS,
          description: "",
        },
      ],
    },
    {
      id: 3,
      Section: Projects,
      data: photoCard_data,
      padding: true,
      path: "",
    },
  ];

  return (
    <div className="w-full">
      {section_data.map(({ id, Section, padding, path, data }) => {
        return (
          <div key={id} className={padding ? "px-[5%] py-[25px]" : ""}>
            <Section data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default SMM;
