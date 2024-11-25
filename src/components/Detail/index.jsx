import axios from "axios";
import Headers from "./Smm/Headers";
import GenericElement from "../../view";
import About from "./../Generic/About/About";
import { Loader, PhotoCard } from "../Generic";
import ENDPOINTURL from "../../config/endpoint";
import OurPrice from "./../Generic/Price/Price";
import navbar_items_data from "./../../utils/navbar";
import { Suspense, useEffect, useState } from "react";
import { useDetailContext } from "../../context/DetailContext";
import useFindItemIdByPath from "./../../hooks/useFindItemIdByPath";

const Detail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    data: titleData,
    loading: titleLoading,
    error: titleError,
  } = useDetailContext();
  const itemId = useFindItemIdByPath(navbar_items_data);
  const sectionTitleData = titleData.find(({ id }) => id === itemId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [solo, pricing, works, bottom] = await Promise.all([
          axios.get(`${ENDPOINTURL}/service/solo/${itemId}`),
          axios.get(`${ENDPOINTURL}/service/pricing/${itemId}`),
          axios.get(`${ENDPOINTURL}/service/${itemId}/works/`),
          axios.get(`${ENDPOINTURL}/service/type/${itemId}/bottom/`),
        ]);

        setData({
          about: solo.data,
          pricing: pricing.data,
          works: works.data,
          cases: bottom.data,
        });
      } catch (error) {
        console.error("Malumotlar yuklanmadi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  const component = [
    {
      id: 1,
      data: data.about || [],
      Section: About,
    },
    {
      id: 2,
      data: data.pricing || [],
      Section: OurPrice,
    },
    {
      id: 3,
      data: data.works || [],
      Section: About,
    },
    {
      id: 4,
      data: data.cases || [],
      Section: PhotoCard,
    },
  ];

  if (titleLoading || loading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full">
        <Headers data={sectionTitleData} />
        <div>
          {/* component map data goes here */}
          {component.map(({ id, data, Section }) => (
            <div key={id} className="mb-[50px]">
              <Section data={data} />
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default Detail;
