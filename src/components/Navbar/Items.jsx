import Popover from "./Popover";
import { Link } from "react-scroll";
import useSize from "../../hooks/useSize";
import navbar_items_data from "../../utils/navbar";
import useSmoothScroll from "../../hooks/useSmoothScroll";
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
  const scrollToSection = useSmoothScroll();

  const handleItemClick = ({ id }) => {
    if (location.pathname === "/") {
      scrollToSection(`section-${id}`);
      if (dir === "col") onClose();
    } else {
      navigate("/");
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
            smooth={true}
            duration={800}
            className={`font-body-font whitespace-nowrap font-[400] ${
              dir === "col"
                ? "text-[20px]"
                : width <= 1390
                ? "text-[14px]"
                : "text-[16px]"
            } w-full text-center text-light hover:text-yellow select-none transition duration-150 ease-out cursor-pointer`}
            onClick={() => handleItemClick(id)}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Items;
