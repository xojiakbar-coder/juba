import axios from "axios";
import { Route } from "react-router-dom";
import { Loader } from "../components/Generic";
import { uz_endpoints } from "../config/endpoints";
import React, { Suspense, useEffect, useState } from "react";

const DetailRoot = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(`${ENDPOINTURL}/service/${itemId}/detail/`);
      setData(res.data);
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
    <React.Fragment>
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <Route key={item?.id} path={`${uz_endpoints[index]}`}>
              <div>Detail</div>
            </Route>
          );
        })}
    </React.Fragment>
  );
};

export default DetailRoot;
