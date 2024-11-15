import Logo from "./Logo";
import Body from "./Body";
import Lang from "./Lang";
import Items from "./Items";
import { useState } from "react";
import NavbarDrawer from "./Drawer";
import useSize from "../../hooks/useSize";
import Button from "../Generic/Button/Button";
import menuIcon from "../../assets/icons/menu.svg";

const Navbar = () => {
  const { width } = useSize();
  const numberButton = `+998 90 047 22 20`;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-col justify-center w-full sticky z-[999] top-0 bg-dark-text h-[100px] min-h-[100px]">
      <div
        className={`flex items-center justify-between ${
          width > 1230 ? "px-[5%]" : "px-[20px]"
        } `}
      >
        <Logo />
        {width > 1140 ? <Items w="max" paddingX="20px" /> : null}
        {width > 730 && (
          <div className="flex flex-row justify-between gap-[30px]">
            <Lang />
            <a href="https://t.me/JubaMarketing" target="_blank">
              <Button variant="outline" hover={true}>
                {numberButton}
              </Button>
            </a>
          </div>
        )}

        {width <= 1140 && (
          <div>
            <div
              className="select-none cursor-pointer rounded-full bg-light p-[21px]"
              onClick={toggleDrawer}
            >
              <img
                src={menuIcon}
                alt=""
                className="w-[24px] h-[24px] select-none font-mont transition duration-105 ease-in-out"
              />
            </div>
          </div>
        )}
        {width < 1140 && (
          <NavbarDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        )}
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
};

export default Navbar;
