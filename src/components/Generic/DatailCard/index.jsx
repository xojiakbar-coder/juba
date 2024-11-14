import React from "react";

const DatailCard = ({
  num = "1",
  type = "",
  title = "",
  desc = "",
  className = "",
  ...args
}) => {
  const getType = () => {
    type = String(type);
    switch (type) {
      case "list-card":
        return `h-[100px]`;
      case "data-card":
        return `h-[280px]`;
      default:
        break;
    }
  };
  const defaultDatailCardStyle = `bg-white rounded-[20px] cursor-pointer min-h-[200px] font-body-font px-[20px] pt-[10px] pb-12`;
  return (
    <div className={`${defaultDatailCardStyle} ${getType()}`} {...args}>
      <div className="bg-orange-400 text-white w-8 h-5 text-xs flex-center rounded-full">
        {num}
      </div>
      <h4 className="font-bold text-base pt-4 pb-2">{title}</h4>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  );
};

export default DatailCard;
