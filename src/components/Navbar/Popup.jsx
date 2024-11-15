import React from "react";
import { Popover } from "antd";
import useSize from "../../hooks/useSize";
import { NavLink } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

const Popup = ({ trigger, placement, title, id, dir, content }) => {
  const { width } = useSize();

  const resolvedPlacement = dir === "col" ? "top" : "bottomLeft";

  return (
    <div key={id} className="relative w-full flex justify-center">
      <Popover
        className="flex flex-row gap-x-[2px] items-center bg-transparent hover:bg-transparent outline-none group"
        trigger={trigger}
        content={content}
        placement={resolvedPlacement}
      >
        <div
          className={`font-body-font whitespace-nowrap font-[400] ${
            dir === "col"
              ? "text-[20px]"
              : width <= 1390
              ? "text-[14px]"
              : "text-[16px]"
          } text-light hover:text-yellow select-none transition duration-150 ease-out cursor-pointer`}
        >
          {title}
          <DownOutlined className="group-hover:text-yellow mt-[1.5px] text-[14.5px]" />
        </div>
      </Popover>
    </div>
  );
};

export default Popup;

export const Content = ({ id, path, dir, onClose, title }) => (
  <div key={id} className="group w-full">
    <NavLink
      to={path}
      onClick={dir === "col" ? () => onClose() : null}
      className="font-[500] font-body-font text-dark group-hover:text-yellow group-hover:cursor-pointer text-[16px] transition duration-150 ease-in-out w-full"
    >
      {title}
    </NavLink>
  </div>
);
