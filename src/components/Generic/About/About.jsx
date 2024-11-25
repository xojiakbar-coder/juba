import Title from "../Title/Title";
import useSize from "../../../hooks/useSize";
import aboutUS from "../../../assets/images/home/about-us.svg";

const About = ({ data, bottomPage }) => {
  const { width } = useSize();
  const aboutData = data[0] ? data[0] : data;

  return (
    <div className="mt-[150px] w-full bg-light pb-[100px] pt-[150px] px-[5%] h-max">
      <div className="w-full h-max">
        <div className="flex flex-col justify-center items-center">
          <Title variant="section-name">
            JUBA - маркетинговое агентство в Ташкенте
          </Title>
          <div
            className={`${
              width <= 1100 ? "flex flex-col gap-[30px]" : "grid"
            } ${
              width <= 1400 && width > 1200
                ? "grid-cols-[50%_50%] gap-[30px] items-start"
                : "grid-cols-2 gap-[50px] items-start"
            } mt-[50px]`}
          >
            <div className="w-full">
              <img
                src={aboutData?.photo ? aboutData?.photo : aboutUS}
                alt="about icon not found"
                className="w-full rounded-lg h-full cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-between h-full w-full">
              <p className="text-gray-color font-[400] text-[16px] leading-[26px]">
                {aboutData?.description
                  ? aboutData?.description
                  : `some text data`}
              </p>
            </div>
          </div>
        </div>
        {/* bottom min page */}
        {bottomPage}
      </div>
    </div>
  );
};

export default About;
