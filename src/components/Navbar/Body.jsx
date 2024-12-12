import { Outlet } from "react-router-dom";
import floadIcon from "../../assets/icons/top-arrow.svg";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const Body = () => {
  const scrollToSection = useSmoothScroll();
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <div
        onClick={() => scrollToSection(`section-1`)}
        className="fixed flex justify-center bottom-20 items-center h-max w-max right-10 bg-yellow px-[10px] py-[10px] rounded-full transition duration-150 ease-in active:scale-[0.9847] cursor-pointer"
      >
        <img src={floadIcon} className="w-[50px]" />
      </div>
    </div>
  );
};

export default Body;
