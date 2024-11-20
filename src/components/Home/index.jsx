import axios from "axios";
import Team from "./Team";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Clients from "./Clients";
import Service from "./Services";
import HomePage from "./HomePage";
import OurResault from "./Resault";
import { Loader } from "../Generic";
import { Element } from "react-scroll";
import Contact from "../Contact/Contact";
import About from "../Generic/About/About";
import ENDPOINTURL from "../../config/endpoint";
import { Suspense, useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    slider: null,
    service: null,
    soloMain: null,
    ourResault: null,
    clients: null,
    team: null,
    ourContact: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          sliderResponse,
          serviceResponse,
          soloMainResponse,
          ourResaultResponse,
          clientsResponse,
          teamResponse,
          ourContactResponse,
        ] = await Promise.all([
          axios.get(`${ENDPOINTURL}/slider/`),
          axios.get(`${ENDPOINTURL}/service/`),
          axios.get(`${ENDPOINTURL}/solo-main/`),
          axios.get(`${ENDPOINTURL}/result/`),
          axios.get(`${ENDPOINTURL}/client-photo/`),
          axios.get(`${ENDPOINTURL}/team-photo/`),
          axios.get(`${ENDPOINTURL}/our-contact/`),
        ]);

        setData({
          slider: sliderResponse.data,
          service: serviceResponse.data,
          soloMain: soloMainResponse.data,
          ourResault: ourResaultResponse.data,
          clients: clientsResponse.data,
          team: teamResponse.data,
          ourContact: ourContactResponse.data,
        });
      } catch (error) {
        console.error("Malumotlar yuklanmadi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  const components = [
    {
      id: 1,
      Component: HomePage,
      data: data.slider,
      padding: true,
      path: "/",
    },
    {
      id: 2,
      Component: Service,
      data: data.service,
      padding: true,
      path: "/sevice",
    },
    {
      id: 3,
      Component: About,
      data: data.soloMain,
      path: "/about",
      padding: false,
      bottomPage: true,
    },
    {
      id: 4,
      Component: Clients,
      data: data.clients,
      path: "/clients",
      padding: false,
    },
    {
      id: 5,
      Component: Team,
      data: data.team,
      padding: false,
      path: "/our-team",
    },
    {
      id: 6,
      Component: Contact,
      data: data.ourContact,
      padding: false,
      path: "/contact",
    },
  ];

  return (
    <>
      <Suspense>
        <Navbar />
        <div className="w-full">
          {components.map(
            ({ id, Component, data, bottomPage, padding, path }) => (
              <Element
                key={id}
                className={padding ? "px-[5%] py-[25px]" : ""}
                name={path}
              >
                <Component
                  data={data}
                  bottomPage={
                    bottomPage && (
                      <div className="w-full mt-[100px] h-max">
                        <OurResault data={data.ourResault} />
                      </div>
                    )
                  }
                />
              </Element>
            )
          )}
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
