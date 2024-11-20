import React from "react";
import Title from "../Title/Title";
import useSize from "../../../hooks/useSize";
import aboutUS from "../../../assets/images/home/about-us.svg";

const About = ({ data, bottomPage }) => {
  const { width } = useSize();

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
                src={data[0].photo ? data[0].photo : aboutUS}
                alt="about icon not found"
                className="w-full rounded-lg h-full cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-between h-full w-full">
              <p className="text-gray-color font-[400] text-[16px] leading-[26px]">
                {data[0]?.description ||
                  `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus similique numquam culpa vel, sit doloremque explicabo
                illo non voluptatum dolorem aliquam impedit nobis repellendus
                earum placeat tempore aut voluptas soluta eius laudantium amet.
                Facere eligendi, aspernatur quibusdam non atque nobis vitae
                delectus mollitia laboriosam distinctio tempore adipisci
                similique, sint quidem enim explicabo iste tenetur suscipit
                nihil veritatis optio, quam illo sed? Temporibus consequuntur
                itaque quis assumenda! Placeat, numquam eos. Qui animi quibusdam
                aperiam enim officiis commodi veniam eos aliquid dolores ullam
                consequatur, ratione maxime odio, ipsa incidunt consectetur
                labore voluptatem nisi repellendus? Quod rem eum, commodi unde
                doloremque officiis obcaecati possimus ratione doloribus? Porro
                debitis dolorum a odio quia aspernatur laudantium cum, magnam
                optio ipsa soluta, alias inventore tenetur eos aut libero
                eligendi perferendis placeat?`}
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
