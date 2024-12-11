import { Desc, Title } from "..";
import TopCard from "../TopCard";

const TopDisc = ({ data }) => {
  return (
    <>
      {data && data?.length && (
        <section className="px-[5%] py-[25px]">
          <div className="max-w-full px-4 m-auto">
            <div className="max-w-full px-4 m-auto">
              <Title variant={"title"}>SMM agentligimiz</Title>
              <Desc center>
                Bugungi ijtimoiy media kuchi sotuvga juda katta ta’sir
                ko’rsatishini barchamiz bilamiz . Maxsus ishlab chiqilgan SMM
                strategiyalari bo'yicha tajribamiz bilan biz brendingizning
                sotuvi yuksalishi uchun keng ko'lamli xizmatlarni taklif
                qilamiz.
              </Desc>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 gap-x-[20px] gap-y-[40px] mt-[50px]">
            {data &&
              data.map((itm, indx) => (
                <TopCard
                  key={itm.id}
                  num={indx + 1}
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
