import { Desc, Title } from "..";

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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 gap-[20px] mt-[50px]">
            {data &&
              data.map((itm) => (
                <div
                  key={itm.id}
                  className={`flex flex-col bg-light rounded-[20px] h-max cursor-pointer pb-[50px] w-full min-h-max px-[20px] pt-[30px] font-body-font transition duration-[180] ease-in`}
                >
                  <div className="font-body-font text-light py-[10px] px-[20px] bg-yellow rounded-xl w-max">
                    {itm.id}
                  </div>
                  <div>
                    <div className="mt-[22px] text-[24px] font-[700] leading-[100%] text-yellow font-body-font">
                      {itm?.title}
                    </div>
                    <div>
                      <div className="my-[20px]">
                        <p className="text-dark font-[400] font-body-font leading-[26px]">
                          {itm?.services}
                        </p>
                      </div>
                      <p
                        className={`mt-[10px] text-gray-color font-[400] font-body-font leading-[26px]`}
                      >
                        {itm?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}
    </>
  );
};

export default TopDisc;
