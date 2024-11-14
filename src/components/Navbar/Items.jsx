import { Popover } from "antd";
import { Link } from "react-scroll";
import useSize from "../../hooks/useSize";
import { NavLink } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import navbar_items_data from "../../utils/navbar";

const Items = ({ dir = "row", w = "full", onClose }) => {
  const { width } = useSize();

  return (
    <div className={`flex flex-${dir} gap-x-[24px] items-center`}>
      {navbar_items_data.map((item) => {
        const { id, title, path, children } = item;
        const itemPath = id === "5" ? "" : path;

        if (children?.length) {
          const dropdownItems = children.map((child) => ({
            id: child.id,
            title: child.title,
            path: child.path,
          }));

          const content = (
            <div className="flex flex-col gap-y-[4px] w-full bg-light">
              <div className="flex flex-col gap-3 p-2 w-[400px]">
                {dropdownItems.map((child) => (
                  <div key={child.id} className="group w-full">
                    <NavLink
                      to={child.path}
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
            <div key={id} className="relative">
              <Popover
                className="flex flex-row gap-x-[2px] items-center bg-transparent hover:bg-transparent outline-none group"
                placement="bottomLeft"
                trigger={["hover"]}
                content={content}
                // arrow={mergedArrow}
              >
                <div
                  className={`font-body-font font-[400] ${
                    width <= 1390 ? "text-[14px]" : "text-[16px]"
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
            className={`font-body-font font-[400] ${
              width <= 1390 ? "text-[14px]" : "text-[16px]"
            } text-light hover:text-yellow select-none transition duration-150 ease-out cursor-pointer`}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Items;
