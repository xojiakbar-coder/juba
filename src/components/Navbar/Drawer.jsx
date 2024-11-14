import React from "react";
import Logo from "./Logo";
import Items from "./Items";
import closeIcon from "../../assets/icons/close.svg";
import navbar_itmes_data from "../../utils/navbar";
import { Link } from "react-scroll";

const NavbarDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-dark transform transition duration-[370ms] ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-row w-full items-center justify-between py-[15px] px-[20px]">
        <div>
          <Logo onClose={onClose} />
        </div>
        <div
          className="select-none cursor-pointer rounded-full bg-light p-[21px]"
          onClick={() => onClose()}
        >
          <img
            src={closeIcon}
            alt="menu icon not found"
            className="w-[24px] h-[24px] text-[30px] select-none font-mont transition duration-105 ease-in-out"
          />
        </div>
      </div>
      <div className="py-5 px-[20px] flex flex-col justify-center h-full gap-[50px] w-full items-center">
        {navbar_itmes_data.map(({ id, title, path }) => {
          return (
            <Link
              key={id}
              to={path}
              smooth={true}
              onClick={() => onClose()}
              duration={600}
              className={`font-body-font font-[400] select-none text-[27px] hover:text-yellow transition duration-150 ease-out text-light cursor-pointer`}
            >
              {title}
            </Link>
          );
        })}
      </div>
      <div className="py-5 px-[20px]"></div>
    </div>
  );
};

export default NavbarDrawer;
