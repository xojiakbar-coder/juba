import { useNavigate } from "react-router-dom";
import jubaLogo from "../../assets/images/logo.png";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const Logo = () => {
  const navigate = useNavigate();
  const scrollToSection = useSmoothScroll();

  const onLogoClick = (id) => {
    if (location.pathname === "/") {
      scrollToSection(`section-${id}`);
      if (dir === "col") onClose();
    } else {
      navigate("/");
    }
  };

  return (
    <div onClick={() => onLogoClick(1)}>
      <div className="flex items-center gap-x-[5px] min-w-max w-max min-h-[90px] h-[90px] cursor-pointer">
        <img
          src={jubaLogo}
          alt="Juba logo not found"
          className="w-[76px] h-[54px] min-h-[54px] min-w-[76px] max-md:w-10 max-md:h-10"
        />
      </div>
    </div>
  );
};

export default Logo;
