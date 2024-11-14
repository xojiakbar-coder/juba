import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import jubaLogo from "../../assets/icons/logo.svg";

const Logo = () => {
  const logoTitleProperty = `text-yellow font-body-font text-[16px] font-[700] leading-[20px] max-md:text-[12px]`;
  return (
    <Link to="/" smooth={true} duration={800}>
      {/* <NavLink to={"/"}> */}
      <div className="flex items-center gap-x-[5px] min-w-[190px] w-[190px] min-h-[90px] h-[90px] cursor-pointer">
        <img
          src={jubaLogo}
          alt="Juba logo not found"
          className="w-[76px] h-[76px] min-h-[76px] min-w-[76px] max-md:w-10 max-md:h-10"
        />
        <strong className="flex flex-col items-start justify-start">
          <b className={logoTitleProperty}>Juba</b>
          <b className={logoTitleProperty}>Marketing</b>
        </strong>
      </div>
      {/* </NavLink> */}
    </Link>
  );
};

export default Logo;
