import { Desc, Title } from "..";
import TopCard from "../TopCard";

const TopDisc = ({ data }) => {
  return (
    <>
      {data && data?.length && (
        <section className="px-[5%] py-[25px]">
          <div className="max-w-full px-4 m-auto">
            <div className="max-w-full px-4 m-auto">
              <Title variant={"title"}>
                Почему выбирают наше SMM агентство в Ташкенте?
              </Title>
              <Desc center>
                Мы понимаем силу социальных медиа в современном цифровом
                ландшафте. Обладая экспертизой в стратегиях SMM, адаптированных
                специально для ташкентского рынка, мы предлагаем широкий спектр
                услуг, чтобы удовлетворить уникальные потребности вашего бренда
              </Desc>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 gap-x-[20px] gap-y-[40px] mt-[50px]">
            {data &&
              data.map((itm) => (
                <TopCard
                  key={itm.id}
                  num={itm.id}
                  title={itm.title}
                  services={itm.services}
                  description={itm.description}
                />
              ))}
          </div>
        </section>
      )}
    </>
  );
};

export default TopDisc;
