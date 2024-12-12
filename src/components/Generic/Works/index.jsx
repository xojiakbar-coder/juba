import Desc from "../Desc";
import Slider from "react-slick";
import Title from "../Title/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = ({ data }) => {
  const settings = {
    speed: 1000,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    cssEase: "linear",
    centerPadding: "0",
    autoplaySpeed: 2000,
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
        <div className="flex flex-col">
          <Slider {...settings}>
            {data &&
              data.map((item) => {
                const { id, photo } = item;
                return (
                  <div key={id} className="w-full px-4">
                    <div className="flex justify-center py-16 text-center">
                      <img
                        src={photo}
                        alt="image not found"
                        className="cursor-pointer"
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

export default Works;
