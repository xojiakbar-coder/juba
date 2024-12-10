import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import jubaLogo from "../../assets/images/logo.png";

const Logo = () => {
  const navigate = useNavigate();
  const logoTitleProperty = `text-yellow font-body-font text-[16px] font-[700] leading-[20px] max-md:text-[12px]`;
  return (
    <Link to="/" smooth={true} duration={800} onClick={() => navigate("/")}>
      <div className="flex items-center gap-x-[5px] min-w-max w-max min-h-[90px] h-[90px] cursor-pointer">
        <img
          src={jubaLogo}
          alt="Juba logo not found"
          className="w-[76px] h-[54px] min-h-[54px] min-w-[76px] max-md:w-10 max-md:h-10"
        />
      </div>
    </Link>
  );
};

export default Logo;
