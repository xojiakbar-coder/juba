import axios from "axios";
import { Popover } from "antd";
import useSize from "../../hooks/useSize";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ENDPOINTURL from "../../config/endpoint";

const Menu = ({ navbarTitle, dir }) => {
  const { width } = useSize();
  const [loading, setLoading] = useState(true);
  const [detailData, setDetailData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  const getServiceData = async () => {
    try {
      const res = await axios.get(`${ENDPOINTURL}/service/`);
      setServiceData(res?.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const getDetailData = async () => {
    try {
      const details = await Promise.all(
        serviceData.map(async (item) => {
          const res = await axios.get(
            `${ENDPOINTURL}/service/${item.id}/detail/`
          );
          return { serviceId: item.id, ...res?.data };
        })
      );
      setDetailData(details);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchServiceData = async () => {
      await getServiceData();
    };
    fetchServiceData();
  }, []);

  useEffect(() => {
    if (serviceData.length > 0) {
      const fetchDetailData = async () => {
        await getDetailData();
        setLoading(false);
      };
      fetchDetailData();
    }
  }, [serviceData]);

  if (loading) {
    return <div>{navbarTitle}</div>;
  }

  if (detailData.length === 0) {
    return <div>No data available</div>;
  }

  const content = (
    <div className="bg-light py-[8px] px-[10px] rounded-[20px]">
      <div className="flex flex-col gap-[10px]">
        {detailData.map((detail) => {
          // const menuTitle = detail.title;
          const detailTitle = detail[0].detail_title;

          return (
            <NavLink
              // key={detail.id}
              to={`/detail/${detail.serviceId}`}
              key={detail.serviceId}
              className="flex flex-wrap font-[500] font-body-font text-gray-color group-hover:text-yellow group-hover:cursor-pointer text-[14px] transition duration-150 ease-in-out w-max hover:text-yellow"
            >
              {detailTitle}
            </NavLink>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="text-light w-full">
      <Popover
        content={content}
        placement={width > 1140 ? "bottomLeft" : "top"}
      >
        <div
          className={`font-body-font whitespace-nowrap font-[400] w-full text-center text-light hover:text-yellow select-none transition duration-150 ease-out cursor-pointer ${
            dir === "col"
              ? "text-[20px]"
              : width <= 1390
              ? "text-[14px]"
              : "text-[16px]"
          } text-light`}
        >
          {navbarTitle}
        </div>
      </Popover>
    </div>
  );
};

export default Menu;
