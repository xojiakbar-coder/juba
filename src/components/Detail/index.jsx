import axios from "axios";
import SMM from "./Smm/index";
import WEB from "./Smm/index";
import { Loader } from "../Generic";
import ENDPOINTURL from "../../config/endpoint";
import { Fragment, Suspense, useEffect, useState } from "react";

const DetailRoot = () => {
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

  const components = [
    {
      id: 1,
      Component: SMM,
      data,
      path: "/smm",
    },
    {
      id: 2,
      Component: WEB,
      data,
      path: "/web-development",
    },
  ];

  if (loading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full">
        {components.map(({ id, Component, data }) => (
          <Fragment key={id}>
            <Component data={data} />
          </Fragment>
        ))}
      </div>
    </Suspense>
  );
};

export default DetailRoot;
