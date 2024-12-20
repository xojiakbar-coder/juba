import "./style.css";
import Desc from "../Desc";
import Slider from "react-slick";
import Title from "../Title/Title";
import "slick-carousel/slick/slick.css";
import useSize from "../../../hooks/useSize";
import "slick-carousel/slick/slick-theme.css";
import { memo } from "react";

const Works = ({ data }) => {
  const { width } = useSize();
  const centerPadding = width > 1880 ? "600px" : "500px";
  const settings = {
    speed: 300,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    centerPadding: "600px",
  };

  return (
    <div className="h-max overflow-hidden">
      <div className={`w-full bg-dark-text py-[100px] px-[5%]`}>
        <Title variant="section-name" className="text-light">
          Bizning natijalarimiz
        </Title>
        <Desc className="text-center w-full">
          Biz tajribamiz, ijodkorligimiz va samaradorligimizni aks ettiruvchi
          ishimizni taqdim etishdan faxrlanamiz.
        </Desc>
        <div className="flex flex-col border overflow-x-hidden">
          <Slider {...settings}>
            {data &&
              data.map((item) => {
                const { id, photo } = item;
                return (
                  <div key={id} className="w-full px-4 overflow-x-hidden">
                    <div className="flex justify-center py-16 text-center">
                      <img
                        src={photo}
                        alt="image not found"
                        className="object-contain cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default memo(Works);
