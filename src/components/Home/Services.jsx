import { Fragment, memo } from "react";
import Title from "../Generic/Title/Title";
import DataCard from "../Generic/Card/Card";
import { useNavigate } from "react-router-dom";

const Services = memo(({ data }) => {
  const navigate = useNavigate();

  const getDetailData = async ({ id }) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Fragment>
      {data && (
        <div id="/service" className="flex flex-col mt-[100px] w-full">
          <div className="w-full">
            <Title variant="title">
              Biznesingiz uchun marketing xizmatlari
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 custom:grid-cols-4 gap-[20px] mt-[50px] auto-rows-fr">
              {data.map((item) => {
                const { id, title, short_description } = item;
                return (
                  <DataCard
                    key={id}
                    title={title}
                    text={short_description}
                    onClick={() => getDetailData(id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
});

export default Services;
