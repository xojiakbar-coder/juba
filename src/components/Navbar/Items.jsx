import Popover from "./Popover";
import { Link } from "react-scroll";
import useSize from "../../hooks/useSize";
import navbar_items_data from "../../utils/navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Items = ({
  onClose,
  w = "full",
  dir = "row",
  gapY = "0px",
  paddingX = "",
  gapX = "24px",
}) => {
  const { width } = useSize();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (location.pathname === "/") {
      if (dir === "col") {
        onClose();
      }
      const section = document.querySelector(`[name="${path}"]`);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(`[name="${path}"]`);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div
      className={`flex-${dir} w-${w} h-full flex justify-center items-center`}
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        gap: `${gapY} ${gapX}`,
      }}
    >
      {navbar_items_data.map((item) => {
        const { id, title, path, children, childrenUrl } = item;

        if (children && childrenUrl.length > 0) {
          return (
            <Popover
              id={id}
              key={id}
              dir={dir}
              url={childrenUrl}
              navbarTitle={title}
            />
          );
        }

        return (
          <Link
            key={id}
            to={path}
            duration={800}
            smooth={true}
            className={`font-body-font whitespace-nowrap font-[400] ${
              dir === "col"
                ? "text-[20px]"
                : width <= 1390
                ? "text-[14px]"
                : "text-[16px]"
            } w-full text-center text-light hover:text-yellow select-none transition duration-150 ease-out cursor-pointer`}
            onClick={() => handleNavigation(path)}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Items;
