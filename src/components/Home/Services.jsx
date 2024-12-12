import { Element } from "react-scroll";
import Title from "../Generic/Title/Title";
import DataCard from "../Generic/Card/Card";
import { useNavigate } from "react-router-dom";
import navbar_items_data from "../../utils/navbar";
import { memo } from "react";

const Services = memo(({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    let itemPath = "";

    navbar_items_data.forEach((item) => {
      if (item.children && item.children.length > 0) {
        const foundChild = item.children.find((child) => child.id === id);
        if (foundChild) {
          itemPath = foundChild.path;
        }
      }
    });

    if (itemPath) {
      navigate(itemPath);
    }
  };

  return (
    <>
      {data && (
        <Element name="/service" className="flex flex-col mt-[100px] w-full">
          <div className="w-full">
            <Title variant="title">Маркетинговые услуги в Ташкенте</Title>
            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 xl:grid-cols-3 custom:grid-cols-4 xxl:grid-cols-4 gap-[20px] mt-[50px]">
              {data &&
                data.length > 0 &&
                data.map((item) => {
                  const { id, title, short_description } = item;
                  return (
                    <DataCard
                      key={id}
                      title={title}
                      text={short_description}
                      onClick={() => handleCardClick(id)}
                    />
                  );
                })}
            </div>
          </div>
        </Element>
      )}
    </>
  );
});

export default Services;
