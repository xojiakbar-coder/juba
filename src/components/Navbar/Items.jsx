import Popover from "./Popover";
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

  const handleItemClick = ({ path }) => {
    if (location.pathname === "/") {
      scrollToSection(path);
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
        const { id, title, path, children } = item;

        if (children) {
          return <Popover id={id} key={id} dir={dir} navbarTitle={title} />;
        }

        return (
          <div
            key={id}
            className={`font-body-font whitespace-nowrap font-[400] ${
              dir === "col"
                ? "text-[20px]"
                : width <= 1390
                ? "text-[14px]"
                : "text-[16px]"
            } w-full text-center text-light hover:text-yellow select-none transition duration-150 ease-out cursor-pointer`}
            onClick={() => handleItemClick(path)}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default Items;
