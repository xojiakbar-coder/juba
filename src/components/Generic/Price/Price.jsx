import Title from "../Title/Title";
import useSize from "../../../hooks/useSize";
import Desc from "../Desc";
import Button from "../Button/Button";

const OurPrice = ({ data }) => {
  const { width } = useSize();

  return (
    <>
      {data && (
        <div className="w-full pb-[100px] pt-[100px] px-[5%] h-max">
          <div className="w-full h-max">
            <div className="flex flex-col justify-center items-center">
              <Title variant="section-name" className="text-light">
                Tariflarimiz
              </Title>
              <Desc className="w-[60%] text-center">
                Bizning joriy tariflarimiz - o'zingiznikini tanlang!
              </Desc>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 custom:grid-cols-4 xxl:grid-cols-4 gap-[40px] w-full`}
            >
              {data.map(({ id, price, title, description }) => {
                return (
                  <div
                    className={`flex border w-full p-[30px] border-light rounded-[30px] text-light h-full flex md:justify-center items-center flex-col`}
                    key={id}
                  >
                    <div className="md:text-[24px] sm:text-[18px] text-[16px] font-[700] font-body-font">
                      {title}
                    </div>
                    <div className="text-yellow text-[36px] font-[700] font-body-font">
                      {price + "$"}
                    </div>
                    {/* description ichidagi HTML kontentni chiqarish */}
                    <div
                      className="pt-[30px] px-[10px] w-full"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                    <div className="w-full pt-[40px] mt-auto">
                      <Button variant="primary" className="w-full">
                        Buy
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurPrice;
