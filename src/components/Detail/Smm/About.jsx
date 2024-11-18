import useSize from "../../../hooks/useSize";
import Title from "../../Generic/Title/Title";
import aboutUS from "../../../assets/images/home/about-us.svg";

const About = ({ data }) => {
  const { width } = useSize();
  const dataOfAbout = data?.soloMain?.[0];

  return (
    <div className="mt-[150px] w-full bg-light pb-[100px] pt-[150px] px-[5%] h-max">
      <div className="flex flex-col items-center justify-center w-full h-max">
        <Title variant="section-name">Создание сайтов в Ташкенте</Title>
        <div
          className={`${width <= 1200 ? "flex flex-col gap-[30px]" : "grid"} ${
            width <= 1400 && width > 1200
              ? "grid-cols-[50%_50%] gap-[30px]"
              : "grid-cols-2 gap-[50px]"
          } mt-[50px]`}
        >
          <div className="w-full">
            <img
              src={dataOfAbout?.photo ? dataOfAbout.photo : aboutUS}
              alt="about icon not found"
              className="w-full h-full rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-between py-[2px] h-full w-full">
            <p className="text-gray-color font-[400] text-[16px] leading-[26px]">
              {dataOfAbout?.description
                ? dataOfAbout.description
                : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                iusto rem voluptatem beatae illo deleniti in libero eaque quae
                accusamus quis assumenda doloremque natus dolorum laboriosam
                tempore odio odit facere sunt, aspernatur excepturi cupiditate
                soluta cumque. Quod deleniti quos sunt possimus itaque dolorem
                modi, cupiditate dolor inventore, beatae fuga fugiat, voluptate
                mollitia dolore. Debitis, perspiciatis corporis placeat
                aspernatur, iste molestias tenetur beatae quo ad ea error
                deleniti reiciendis ab architecto unde! Unde odit, voluptatem
                vel nam voluptatibus magnam esse distinctio exercitationem vero
                hic tempora ut quis possimus quam? Officiis, sapiente sunt! Aut,
                voluptates voluptate necessitatibus ipsam, blanditiis suscipit
                ut recusandae qui illum, cumque praesentium! Rem vitae eum dolor
                quis quisquam corporis quam voluptates error perspiciatis ea
                eligendi odio totam nostrum ut veritatis fugit, magni
                voluptatibus vel tempora laudantium! Magni mollitia vitae
                officiis numquam totam illum explicabo voluptates excepturi,
                consectetur modi quis tempora asperiores unde quae nemo.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
