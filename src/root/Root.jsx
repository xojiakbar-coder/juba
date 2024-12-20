import axios from "axios";
import Detail from "../components/Detail";
import { useEffect, useState } from "react";
import Home from "../components/Home/index";
import ENDPOINTURL from "../config/base_url";
import { Loader } from "../components/Generic";
import { uz_endpoints } from "../config/endpoints";
import { Navigate, Route, Routes } from "react-router-dom";

const Root = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(`${ENDPOINTURL}/service/`);
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
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <Route
              key={item?.id}
              path={`${uz_endpoints[index]}`}
              element={<Detail />}
            />
          );
        })}

      {/* 404 Not Found page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Root;
