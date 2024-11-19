import { Link } from "react-scroll";
import Popup, { Content } from "./Popup";
import useSize from "../../hooks/useSize";
import navbar_items_data from "../../utils/navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Items = ({
  dir = "row",
  w = "full",
  onClose,
  paddingX = "",
  gapY = "0px",
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
        const { id, title, path, children } = item;

        if (children?.length) {
          const dropdownItems = children.map((child) => ({
            id: child.id,
            title: child.title,
            path: child.path,
          }));

          const content = (
            <div className="flex flex-col gap-y-[4px] w-full bg-light">
              <div
                className={`flex flex-col gap-3 p-2 ${
                  width > 1020
                    ? "w-[400px]"
                    : "w-full h-[320px] overflow-y-auto"
                }`}
              >
                {dropdownItems.map((child) => (
                  <Content
                    key={child.id}
                    dir={dir}
                    onClose={onClose}
                    path={child.path}
                    title={child.title}
                  />
                ))}
              </div>
            </div>
          );

          return (
            <Popup
              id={id}
              key={id}
              dir={dir}
              title={title}
              content={content}
              placement={"bottomLeft"}
              trigger={["hover", "click"]}
            />
          );
        }

        return (
          <Link
            key={id}
            to={path}
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
