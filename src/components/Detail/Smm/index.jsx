import axios from "axios";
import About from "./About";
import Headers from "./Headers";
import Projects from "./Projects";
import { Loader } from "../../Generic";
import { useEffect, useState } from "react";
import useSize from "../../../hooks/useSize";
import ENDPOINTURL from "../../../config/endpoint";

const SMM = ({ data }) => {
  const { width } = useSize();
  const [loading, setLoading] = useState(true);
  const titleData = data[0];

  return (
    <div className="px-[5%] py-[25px] w-full">
      <Headers data={titleData} />
      <About />
      <Projects />
    </div>
  );
};

export default SMM;
