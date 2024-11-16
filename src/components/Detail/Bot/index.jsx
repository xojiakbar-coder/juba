import { Suspense, useState } from "react";
import { Card, PhotoCard } from "../../Generic";
import { Button, Desc, Title } from "../../Generic";
import img from "../../../assets/images/seo/maxresdefault.jpg";
import axios from "axios";

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

const price = [
  {
    id: 1,
    name: "Одностраничный сайт “No Code”",
    price: 100,
    features: [
      "До 20 ключевых слов",
      "Аудит сайта",
      "Внутренняя оптимизация",
      "Внешняя оптимизация",
      "Написание уникальных текстов",
      "Анализ конкурентов",
    ],
  },
  {
    id: 2,
    name: "Одностраничный сайт",
    price: 150,
    features: [
      "До 40 ключевых слов",
      "Аудит сайта",
      "Внутренняя оптимизация",
      "Внешняя оптимизация",
      "Написание уникальных текстов",
      "Анализ конкурентов",
      "Редизайн",
    ],
  },
  {
    id: 3,
    name: "Корпоративный сайт",
    price: "от 400$",
    features: [
      "До 60 ключевых слов",
      "Аудит сайта",
      "Внутренняя оптимизация",
      "Внешняя оптимизация",
      "Написание уникальных текстов",
      "Анализ конкурентов",
      "Редизайн",
    ],
  },
  {
    id: 4,
    name: "Интернет-магазин",
    price: "от 1000$",
    features: [
      "До 60 ключевых слов",
      "Аудит сайта",
      "Внутренняя оптимизация",
      "Внешняя оптимизация",
      "Написание уникальных текстов",
      "Анализ конкурентов",
      "Редизайн",
    ],
  },
];

const cases = [
  {
    name: "Платформа для покупок билетов по регионам  Узбекистана",
    img: img,
    badges: ["Дизайн", "Вёрстка", "Адаптивный дизайн"],
  },
  {
    name: "Хостел The Palms в Ташкенте",
    img: img,
    badges: ["Дизайн", "Вёрстка", "Адаптивный дизайн", "Прототипирование"],
  },
  {
    name: "Платформа для покупок билетов по регионам  Узбекистана",
    img: img,
    badges: ["Дизайн", "Вёрстка", "Адаптивный дизайн"],
  },
  {
    name: "Хостел The Palms в Ташкенте",
    img: img,
    badges: ["Дизайн", "Вёрстка", "Адаптивный дизайн"],
  },
  {
    name: "Платформа для покупок билетов по регионам  Узбекистана",
    img: img,
    badges: ["Дизайн", "Вёрстка", "Адаптивный дизайн"],
  },
  {
    name: "Хостел The Palms в Ташкенте",
    img: img,
    badges: ["Дизайн", "Вёрстка", "Адаптивный дизайн", "Прототипирование"],
  },
];

const Branding = () => {
  const [loading, setLoading] = useState(false);

  // const getData = async () => {
  //   try {
  //     const response = await axios(`${ENDPOINTURL}/service/`);
  //     const data = response.data;
  //     console.log(data);
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // getData();

  if (loading) {
    <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
        <header className="py-40 px-4">
          <div>
            <Title variant={"primary"} className="max-md:text-3xl">
              Разработка сайтов
            </Title>
            <Title variant={"secondary"} className="max-md:text-3xl">
              в Ташкенте
            </Title>
            <Desc className="max-w-3xl">
              Экспертная команда по веб-разработке в Ташкенте: Создание
              качественных и эффективных сайтов для вашего бизнеса Обсудить
              проект
            </Desc>
            <Button variant={"primary"}>Обсудить проект</Button>
          </div>
        </header>

        <section>
          <div className="max-w-6xl m-auto px-4">
            <Title variant={"title"}>Этапы разработки сайтов</Title>
            <Desc center>
              Эти три типа этапов обеспечивают структурированный подход к
              разработке сайтов , обеспечивая гладкое и успешное выполнение
              процесса от планирования до развертывания и дальше.
            </Desc>
          </div>

          <div className="grid max-md:grid-cols-1 grid-cols-3">
            {cardData.map((itm) => (
              <div key={itm.id} className="m-4">
                <Card title={itm.title} num={itm.id} desc={itm.body} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-[150px] w-full bg-light py-[100px] px-[5%] h-max">
        <div className="flex flex-col justify-center items-center w-full h-max">
          <Title variant="section-name">Создание сайтов в Ташкенте</Title>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[50px] mt-[50px]">
            <div className="w-full">
              <img
                src={img}
                alt="about icon not found"
                className="w-full rounded-lg cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-between py-[2px] h-full w-full">
              <p className="text-gray-color font-[400] text-[16px] leading-[26px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
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
                consectetur modi quis tempora asperiores unde quae nemo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container pt-16">
        <section>
          <div className="max-w-6xl m-auto px-4">
            <Title variant={"title"}>Услуги и стоимость</Title>
            <Desc center>
              Мы рады предоставить вам информацию о наших текущих тарифных
              планах.
            </Desc>
          </div>
        </section>

        <section className="mt-10">
          <Title variant="title">Наши кейсы</Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {cases.map((item, index) => (
              <div key={index + 1}>
                <PhotoCard
                  img={item.img}
                  title={item.name}
                  badges={item.badges}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default Branding;
