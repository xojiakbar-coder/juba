import Lang from "./Lang";
import Items from "./Items";
import useSize from "../../hooks/useSize";
import Button from "../Generic/Button/Button";
import closeIcon from "../../assets/icons/close.svg";

const NavbarDrawer = ({ isOpen, onClose }) => {
  const { width } = useSize();
  const numberButton = `+998 90 047 22 20`;
  return (
    <div
      className={`fixed top-0 right-0 w-full flex flex-col h-[100vh] min-h-[100vh] bg-dark transform overflow-y-auto overflow-x-hidden transition duration-[370ms] ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div
        className={`flex flex-row w-full items-center justify-between py-[15px] ${
          width > 460 ? "px-[20px]" : "px-[15px]"
        }`}
      >
        <div>
          <Lang onClose={onClose} />
        </div>
        <div
          className="select-none cursor-pointer rounded-full bg-light p-[21px]"
          onClick={() => onClose()}
        >
          <img
            src={closeIcon}
            alt=""
            className={`${
              width > 460 ? "w-[24px] h-[24px]" : "w-[18px] h-[18px]"
            } select-none font-mont transition duration-105 ease-in-out`}
          />
        </div>
      </div>
      <div className="px-[20px] flex flex-col justify-center h-[80%] w-full items-center">
        <Items dir="col" gapY="40px" w="full" onClose={onClose} />
      </div>
      <div className="flex flex-row justify-center px-[20px] mt-auto py-[20px]">
        <a href="https://t.me/JubaMarketing" target="_blank">
          <Button variant="outline" hover={true}>
            {numberButton}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NavbarDrawer;
