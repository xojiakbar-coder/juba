import Logo from "../Navbar/Logo";
import Profiles from "../Contact/Profiles";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center px-[5%] py-[5px] bg-light w-full border-black">
      <div>
        <Logo />
      </div>
      <div>
        <Profiles profilesDir="row" />
      </div>
    </div>
  );
};
export default Footer;
