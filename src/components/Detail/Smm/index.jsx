import axios from "axios";
import About from "./About";
import Headers from "./Headers";
import Projects from "./Projects";
import { Loader } from "../../Generic";
import { useEffect, useState } from "react";
import useSize from "../../../hooks/useSize";
import ENDPOINTURL from "../../../config/endpoint";

const SMM = () => {
  const { width } = useSize();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios(`${ENDPOINTURL}/service/1/detail/`);
      setData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="px-[5%] py-[25px] border w-full">
      <Headers data={data} />
      <About />
      <Projects />
    </div>
  );
};

export default SMM;
