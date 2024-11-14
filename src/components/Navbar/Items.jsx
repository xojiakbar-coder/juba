import { Popover } from "antd";
import { Link } from "react-scroll";
import useSize from "../../hooks/useSize";
import { NavLink } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import navbar_items_data from "../../utils/navbar";

const Items = ({
  dir = "row",
  w = "full",
  onClose,
  gapY = "24px",
  gapX = "24px",
}) => {
  const { width } = useSize();

  return (
    <div
      className={`flex flex-${dir} gap-x-[24px] items-center gap-y-[${gapY}] w-${w} h-full justify-center`}
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
                  <div key={child.id} className="group w-full">
                    <NavLink
                      to={child.path}
                      onClick={dir === "col" ? () => onClose() : null}
                      className="font-[500] font-body-font text-dark group-hover:text-yellow group-hover:cursor-pointer text-[16px] transition duration-150 ease-in-out w-full border-black"
                    >
                      {child.title}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          );

          return (
            <div key={id} className="relative w-full flex justify-center">
              <Popover
                className="flex flex-row gap-x-[2px] items-center bg-transparent hover:bg-transparent outline-none group"
                placement="top"
                trigger={["hover"]}
                content={content}
              >
                <div
                  className={`font-body-font font-[400] ${
                    dir === "col"
                      ? "text-[20px]"
                      : width <= 1390
                      ? "text-[14px]"
                      : "text-[16px]"
                  } text-light hover:text-yellow select-none transition duration-150 ease-out cursor-pointer`}
                >
                  {title}
                  <DownOutlined className="group-hover:text-yellow mt-[1.5px] text-[14.5px]" />
                </div>
              </Popover>
            </div>
          );
        }

        return (
          <Link
            key={id}
            to={path}
            smooth={true}
            duration={800}
            onClick={dir == "col" ? () => onClose() : null}
            className={`font-body-font font-[400] ${
              dir === "col"
                ? "text-[20px]"
                : width <= 1390
                ? "text-[14px]"
                : "text-[16px]"
            } w-full text-center text-light hover:text-yellow select-none transition duration-150 ease-out cursor-pointer`}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Items;
