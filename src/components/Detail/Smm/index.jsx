import About from "./About";
import { useState } from "react";
import useSize from "../../../hooks/useSize";
import { Button, Desc, Title } from "../../Generic";
import photoCard_data from "../../../utils/photoCard";
import { Card, Loader, PhotoCard } from "../../Generic";
import Projects from "./Projects";

const cardData = [
  {
    id: 1,
    title: "Планирование и исследование",
    body: "Наши специалисты проводят детальный анализ деятельности конкурентов и выявляют их сильные и слабые стороны, их основные стратегии и рекламные стратегии. Это поможет вам решить, какая процедура лучше всего подходит для вашего бизнеса.",
  },
  {
    id: 2,
    title: "Бекенд-разработка",
    body: "Мы проводим комплексный аудит вашего сайта для выявления технических ошибок, проблем с контентом и возможностей для улучшения. Наши рекомендации помогут вам оптимизировать сайт для поисковых систем и повысить его рейтинг.",
  },
  {
    id: 3,
    title: "Интеграция и тестирование",
    body: "Наша команда копирайтинга создает высококачественный контент, который не только привлекает внимание вашей аудитории, но и повышает ваш рейтинг в поисковых системах. Учитывайте ключевые слова и фразы, а также отслеживайте текущие темы и тенденции.",
  },
];

const SMM = () => {
  const { width } = useSize();
  const [loading, setLoading] = useState(false);

  // const getData = async () => {
  //   try {
  //     const response = await axios(`${ENDPOINTURL}/service/1/detail/`);
  //     const data = response.data;
  //     console.log(data);
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  if (loading) return <Loader />;

  return (
    <div className="px-[5%] py-[25px] border w-full">
      <header className="px-4 py-40">
        <div>
          <Title variant={"primary"} className="max-md:text-3xl">
            SMM
          </Title>
          <Title variant={"secondary"} className="max-md:text-3xl">
            в Ташкенте
          </Title>
          <Desc className="w-full">
            Экспертная команда по веб-разработке в Ташкенте: Создание
            качественных и эффективных сайтов для вашего бизнеса Обсудить проект
          </Desc>
          <Button variant={"primary"}>Обсудить проект</Button>
        </div>
      </header>

      <section>
        <div className="max-w-full px-4 m-auto">
          <Title variant={"title"}>Этапы разработки сайтов</Title>
          <Desc center>
            Эти три типа этапов обеспечивают структурированный подход к
            разработке сайтов , обеспечивая гладкое и успешное выполнение
            процесса от планирования до развертывания и дальше.
          </Desc>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1">
          {cardData.map((itm) => (
            <div key={itm.id} className="m-4">
              <Card title={itm.title} text={itm.body} />
            </div>
          ))}
        </div>
      </section>

      <About />
      <Projects />
    </div>
  );
};

export default SMM;
