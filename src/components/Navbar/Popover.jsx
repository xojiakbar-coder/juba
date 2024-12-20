import axios from "axios";
import { Popover } from "antd";
import { Loader } from "../Generic";
import useSize from "../../hooks/useSize";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ENDPOINTURL from "../../config/base_url";
import { uz_endpoints } from "../../config/endpoints";

const NavPopover = ({ navbarTitle, dir }) => {
  const { width } = useSize();
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

  const content = (
    <div className="bg-light py-[8px] px-[10px] rounded-[20px]">
      <div className="flex flex-col gap-[10px]">
        {data &&
          data.map((detail, index) => {
            const { id, title } = detail;
            // console.log(uz_endpoints[index]);
            return (
              <NavLink
                key={id}
                to={uz_endpoints[index]}
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
