import axios from "axios";
import { Popover } from "antd";
import useSize from "../../hooks/useSize";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ENDPOINTURL from "../../config/base_url";
import navbar_items_data from "../../utils/navbar";

const NavPopover = ({ navbarTitle, dir, url, id }) => {
  const { width } = useSize();
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
              className={`flex flex-wrap font-[500] font-body-font text-gray-color group-hover:text-yellow group-hover:cursor-pointer ${
                width > 992
                  ? "text-[14px]"
                  : width < 850
                  ? "text-[11px]"
                  : "text-[10px]"
              } transition duration-150 ease-in-out w-max hover:text-yellow`}
            >
              {title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="text-light w-max">
      <Popover
        content={content}
        trigger={["click"]}
        placement={width > 1140 ? "bottomLeft" : "top"}
      >
        <div
          className={`flex items-center font-body-font whitespace-nowrap font-[400] w-full text-center text-light group hover:text-yellow select-none transition duration-150 ease-out cursor-pointer ${
            dir === "col"
              ? "text-[20px]"
              : width <= 1390
              ? "text-[14px]"
              : "text-[16px]"
          } text-light`}
        >
          {navbarTitle}
          <div className="flex items-center justify-center group-hover:text-yellow">
            <svg
              width="17px"
              height="17px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2.04"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default NavPopover;
