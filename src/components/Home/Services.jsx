import { Fragment } from "react";
import { Element } from "react-scroll";
import Title from "../Generic/Title/Title";
import DataCard from "../Generic/Card/Card";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import navbar_items_data from "../../utils/navbar";
import { memo } from "react";
=======
>>>>>>> e074ada16623a22afae1bcca3dfdfa9ab4a08811

const Services = memo(({ data }) => {
  const navigate = useNavigate();

  const getDetailData = async ({ id }) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Fragment>
      {data && (
        <Element name="/service" className="flex flex-col mt-[100px] w-full">
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
        </Element>
      )}
    </Fragment>
  );
});

export default Services;
