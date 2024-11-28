import axios from "axios";
import Layout from "./Layout";
import { Loader } from "../Generic";
import Works from "../Generic/Works";
import TopDisc from "../Generic/TopDisc";
import About from "../Generic/About/About";
import Contact from "./../Contact/Contact";
import ENDPOINTURL from "../../config/endpoint";
import OurPrice from "./../Generic/Price/Price";
import Headers from "../Generic/Headers/Headers";
import Projects from "../Generic/Projects/Projects";
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
        const [solo, pricing, works, bottom, disc] = await Promise.all([
          axios.get(`${ENDPOINTURL}/service/solo/${itemId}`),
          axios.get(`${ENDPOINTURL}/service/pricing/${itemId}`),
          axios.get(`${ENDPOINTURL}/service/${itemId}/works/`),
          axios.get(`${ENDPOINTURL}/service/type/${itemId}/bottom/`),
          axios.get(`${ENDPOINTURL}/service/type/${itemId}/top/`),
        ]);

        setData({
          about: solo.data,
          pricing: pricing.data,
          works: works.data,
          cases: bottom.data,
          disc: disc.data,
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
      data: data.disc || [],
      Section: TopDisc,
    },
    {
      id: 2,
      data: data.about || [],
      Section: About,
    },
    // {
    //   id: 3,
    //   data: data.works || [],
    //   Section: Works,
    // },
    {
      id: 4,
      data: data.pricing || [],
      Section: OurPrice,
    },
    {
      id: 5,
      data: data.cases || [],
      Section: Projects,
    },
  ];

  if (titleLoading || loading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        {!titleError && <Headers data={sectionTitleData} />}
        <div>
          {component.map(({ id, data, Section }) => (
            <div key={id} className="mb-[50px]">
              <Section data={data} />
            </div>
          ))}
        </div>
        <Contact />
      </Layout>
    </Suspense>
  );
};

export default Detail;
