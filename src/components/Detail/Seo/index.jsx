import { Suspense, useState } from "react";
import { DatailCard } from "../../Generic";
import { Button, Desc, Title } from "../../Generic";
import img from "../../../assets/images/seo/maxresdefault.jpg";

const cardData = [
  {
    id: 1,
    title: "Анализ конкурентов",
    body: "Наши специалисты проводят детальный анализ деятельности конкурентов и выявляют их сильные и слабые стороны, их основные стратегии и рекламные стратегии. Это поможет вам решить, какая процедура лучше всего подходит для вашего бизнеса.",
  },
  {
    id: 2,
    title: "Аудит сайта",
    body: "Мы проводим комплексный аудит вашего сайта для выявления технических ошибок, проблем с контентом и возможностей для улучшения. Наши рекомендации помогут вам оптимизировать сайт для поисковых систем и повысить его рейтинг.",
  },
  {
    id: 3,
    title: "Написание уникальный статей",
    body: "Наша команда копирайтинга создает высококачественный контент, который не только привлекает внимание вашей аудитории, но и повышает ваш рейтинг в поисковых системах. Учитывайте ключевые слова и фразы, а также отслеживайте текущие темы и тенденции.",
  },
  {
    id: 4,
    title: "Внутренняя оптимизация",
    body: "Этот важный этап поисковой оптимизации включает в себя ряд стратегических мер, направленных на улучшение видимости и рейтинга вашего сайта. Наши SEO-специалисты готовы предоставить комплексные решения в области внутренней оптимизации.",
  },
];

const price = [
  {
    id: 1,
    name: "Start",
    price: 300,
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
    name: "Оптимальный",
    price: 600,
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
    name: "Премиум",
    price: 900,
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

const Seo = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
        <header className="py-40 px-4">
          <div>
            <Title variant={"primary"} className="max-md:text-3xl">
              SEO продвижение
            </Title>
            <Title variant={"secondary"} className="max-md:text-3xl">
              в Ташкенте
            </Title>
            <Desc className="max-w-3xl">
              Каждый успешный шаг в направлении высокой поисковой видимости
              начинается с осознания окружающейконкурентной среды и аудита
              вашего собственного сайта.
            </Desc>
            <Button variant={"primary"}>Обсудить проект</Button>
          </div>
        </header>

        <section>
          <div className="max-w-6xl m-auto px-4">
            <Title variant={"title"}>
              Продвижение и SEO Оптимизация сайтов в Ташкенте
            </Title>
            <Desc center>
              В современном цифровом мире привлекательный и функциональный
              веб-сайт – это только полдела. Видимость в поисковых системах
              также важна для привлечения целевой аудитории и увеличения
              онлайн-продаж. Вот тут-то и пригодятся наши услуги по ташкентскому
              продвижению и SEO оптимизации сайта. Продвижение сайта в Ташкенте:
              Путь к успеху в Интернете Продвижение сайта – это комплекс
              мероприятий, направленных на улучшение видимости веб-ресурсов в
              поисковых системах. Наша команда специалистов по продвижению
              сайтов в Ташкенте разработает индивидуальную стратегию с учетом
              особенностей вашего бизнеса и потребностей вашей целевой
              аудитории. Мы используем передовые методы и технологии для
              достижения максимальных результатов в кратчайшие сроки.
            </Desc>
          </div>

          <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-4">
            {cardData.map((itm) => (
              <div key={itm.id} className="m-4">
                <DatailCard
                  title={itm.title}
                  num={itm.id}
                  desc={itm.body}
                  type={"data-card"}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-[150px] w-full bg-light py-[100px] px-[5%] h-max">
        <div className="flex flex-col justify-center items-center w-full h-max">
          <Title variant="section-name">
            JUBA - маркетинговое агентство в Ташкенте
          </Title>
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
                consectetur modi quis tempora asperiores unde quae nemo,
                accusantium, dolorum quasi! Sit voluptatum veritatis eligendi
                totam molestias non porro cupiditate natus nisi, enim placeat
                ipsa aliquid exercitationem blanditiis odio architecto
                perferendis? Distinctio deleniti quis suscipit pariatur
                veritatis odio possimus eum ducimus molestiae corrupti, quas
                similique qui quam cum fuga dolorum hic eveniet quo delectus,
                aspernatur sint esse assumenda velit? A nesciunt alias cumque
                assumenda sunt aspernatur saepe, vero aliquam at velit dolorum!
                Sint fugiat odio voluptates asperiores beatae. Ducimus, qui.
                Libero dolore earum ex, voluptatibus architecto nulla ut totam
                voluptatem delectus repudiandae iste magnam similique minus ad
                ipsam harum, distinctio reiciendis dolores? Ut assumenda,
                placeat labore atque tenetur eum. Veniam repudiandae aspernatur,
                molestias dolor voluptatem ut nam voluptatum optio minus, culpa,
                aliquid quas nostrum! Commodi dicta harum laboriosam officia
                maxime facilis beatae esse ratione adipisci impedit. Maxime quo
                sequi nostrum totam excepturi tempore? In earum soluta et
                deserunt impedit libero inventore nemo possimus enim saepe
                itaque culpa deleniti, veniam repellendus facere molestiae.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container pt-16">
        <section>
          <div className="max-w-6xl m-auto px-4">
            <Title variant={"title"}>Тарифы</Title>
            <Desc center>
              Мы рады предоставить вам информацию о наших текущих тарифных
              планах.
            </Desc>
          </div>
          {/* <div className="grid gap-5 grid-cols-3 max-sm:grid-cols-1 px-4">
            {price.map((itm) => (
              <PriceCard
                key={itm.id}
                name={itm.name}
                price={itm.price}
                features={itm.features}
              />
            ))}
          </div> */}
        </section>

        <section className="mt-10 h-max mb-[100px]">
          <Title variant="title">Принципы в работе</Title>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {Array(11)
              .fill("a")
              .map((item, index) => (
                <DatailCard
                  key={index + 1}
                  num={1}
                  title="Lorem"
                  type={"list-card"}
                  className={"mx-2 border-red-600"}
                  desc={
                    "Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet .Lorem Ipsum dolor sit amet"
                  }
                />
              ))}
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default Seo;
