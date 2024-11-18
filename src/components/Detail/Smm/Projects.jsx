import { PhotoCard } from "../../Generic";
import { Desc, Title } from "../../Generic";
import useSize from "../../../hooks/useSize";
import photoCard_data from "../../../utils/photoCard";

const Projects = () => {
  const { width } = useSize();
  return (
    <div className="w-full pt-16">
      <section>
        <div className="max-w-full px-4 m-auto">
          <Title variant={"title"}>Услуги и стоимость</Title>
          <Desc center>
            Мы рады предоставить вам информацию о наших текущих тарифных планах.
          </Desc>
        </div>
      </section>

      <section className="w-full mt-10">
        <Title variant="title">Наши кейсы</Title>
        <div
          className={`grid gap-16 pt-[50px] ${
            width > 1150 ? "lg:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {photoCard_data.map((item) => (
            <PhotoCard
              key={item.id}
              image={item.image}
              title={item.title}
              badges={item.button}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
