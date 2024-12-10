import axios from "axios";
import { Popover } from "antd";
import useSize from "../../hooks/useSize";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ENDPOINTURL from "../../config/endpoint";
import navbar_items_data from "../../utils/navbar";

const NavPopover = ({ navbarTitle, dir, url, id }) => {
  const { width } = useSize();
  const [loading, setLoading] = useState(true);
  const [detailData, setDetailData] = useState([]);

  const itemId = navbar_items_data.find((item) => item.id === +id).id;
  const getDetailData = async () => {
    try {
      const res = (await axios.get(`${ENDPOINTURL}/service/`)).data;
      setDetailData(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDetailData();
  }, [itemId]);

  const content = (
    <div className="bg-light py-[8px] px-[10px] rounded-[20px]">
      <div className="flex flex-col gap-[10px]">
        {detailData.map((detail) => {
          const { id, title } = detail;

          return (
            <NavLink
              key={id}
              to={`/detail/${id}`}
              className="flex flex-wrap font-[500] font-body-font text-gray-color group-hover:text-yellow group-hover:cursor-pointer text-[14px] transition duration-150 ease-in-out w-max hover:text-yellow"
            >
              {title}
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

export default NavPopover;
