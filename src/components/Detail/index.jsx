import axios from "axios";
import Layout from "./Layout";
import { Loader } from "../Generic";
import Works from "../Generic/Works";
import TopDisc from "../Generic/TopDisc";
import About from "../Generic/About/About";
import OurPrice from "../Generic/Price/Price";
import { useLocation } from "react-router-dom";
import ENDPOINTURL from "../../config/base_url";
import Headers from "../Generic/Headers/Headers";
import Projects from "../Generic/Projects/Projects";
import { Fragment, Suspense, useEffect, useState } from "react";
import { uz_endpoints } from "../../config/endpoints";

const Detail = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    title: null,
    header: null,
    works: null,
    disc: null,
    pricing: null,
    bottom: null,
  });

  const findItem = uz_endpoints.findIndex((item) => item === location.pathname);
  const itemId = Number(findItem + 1);

  const fetchData = async () => {
    setLoading(true);
    try {
      const titleUrl = `${ENDPOINTURL}/service/${itemId}/detail/`;
      const headerUrl = `${ENDPOINTURL}/service/solo/${itemId}/`;
      const worksUrl = `${ENDPOINTURL}/service/${itemId}/works/`;
      const discUrl = `${ENDPOINTURL}/service/type/${itemId}/top/`;
      const pricingUrl = `${ENDPOINTURL}/service/pricing/${itemId}`;
      const bottomUrl = `${ENDPOINTURL}/service/type/${itemId}/bottom/`;

      const [
        titleResponse,
        headerResponse,
        worksResponse,
        discResponse,
        pricingResponse,
        bottomResponse,
      ] = await axios.all([
        axios.get(titleUrl),
        axios.get(headerUrl),
        axios.get(worksUrl),
        axios.get(discUrl),
        axios.get(pricingUrl),
        axios.get(bottomUrl),
      ]);

      setData({
        title: titleResponse.data,
        header: headerResponse.data,
        works: worksResponse.data,
        disc: discResponse.data,
        pricing: pricingResponse.data,
        bottom: bottomResponse.data,
      });
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
      data: data.header || [],
      Section: About,
    },
    {
      id: 3,
      data: data.works || [],
      Section: Works,
    },
    {
      id: 4,
      data: data.pricing || [],
      Section: OurPrice,
    },
    {
      id: 5,
      data: data.bottom || [],
      Section: Projects,
    },
  ];

  if (loading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Headers data={data.title} />
        <Fragment>
          {component.map(
            ({ id, data, Section }) =>
              data &&
              data.length > 0 && (
                <div key={id} className="mb-[50px]">
                  <Section data={data} />
                </div>
              )
          )}
        </Fragment>
      </Layout>
    </Suspense>
  );
};

export default Detail;
