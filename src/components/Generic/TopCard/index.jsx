const TopCard = ({
  num = "",
  type = "",
  title = "",
  services = "",
  className = "",
  description = "",
  ...args
}) => {
  return (
    <div
      {...args}
      className={`flex flex-col bg-light rounded-[20px] h-max cursor-pointer pb-[50px] w-full min-h-max px-[20px] pt-[30px] font-body-font transition duration-[180] ease-in`}
    >
      <div className="font-body-font text-light py-[10px] px-[20px] bg-yellow rounded-xl w-max">
        {num}
      </div>
      <div>
        <div className="mt-[22px] text-[24px] font-[700] leading-[100%] text-yellow font-body-font">
          {title}
        </div>
        <div>
          <div className="my-[20px]">
            <p className="text-dark font-[400] font-body-font leading-[26px]">
              {services}
            </p>
          </div>
          <p
            className={`mt-[10px] text-gray-color font-[400] font-body-font leading-[26px]`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
