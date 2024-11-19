import useSize from "../../../hooks/useSize";

const PhotoCard = ({ image = "", title = "", badges = [] }) => {
  const { width } = useSize();
  return (
    <div className="flex flex-col w-full rounded-[30px] py-[40px] px-[30px] border-[1px] border-light min-h-max">
      <div>
        <div className="text-left font-[400] text-[24px] font-body-font text-light">
          {title}
        </div>
        <div className="w-full">
          <img
            src={image}
            alt="image not found"
            className="mt-[30px] w-full grayscale-[40%] hover:grayscale-0 transition duration-100 ease-in rounded-[30px] cursor-default"
          />
        </div>
        <div
          className={`gap-[20px] h-max my-[30px] w-full grid ${
            width > 1600
              ? "grid-cols-3"
              : width > 1200
              ? "grid-cols-2"
              : "grid-cols-1"
          } items-center`}
        >
          {badges.length > 0 &&
            badges.map(({ id, title }) => {
              return (
                <div
                  key={id}
                  className="flex justify-center items-center border-[1px] border-light cursor-pointer hover:bg-hover-card-bg w-full rounded-[10px] px-[20px] py-[19px] transition duration-[180] ease-in text-ellipsis"
                >
                  <button className="text-light whitespace-nowrap text-center font-[400] text-[12px] leading-[15px] font-body-font text-gray-color">
                    {title}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
