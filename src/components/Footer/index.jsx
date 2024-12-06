import Logo from "../Navbar/Logo";
import useSize from "../../hooks/useSize";
import Profiles from "../Contact/Profiles";

const Footer = () => {
  const { width } = useSize();
  return (
    <div
      className={`flex flex-row justify-between items-center bg-light w-full ${
        width > 1140 ? "px-[5%] py-[5px]" : "px-[5%] py-[25px]"
      }`}
    >
      <div>
        <Logo />
      </div>
      <div>
        <Profiles profilesDir={width > 1140 ? "row" : "col"} />
      </div>
    </div>
  );
};
export default Footer;
