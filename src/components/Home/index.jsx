import axios from "axios";
import Team from "./Team";
import About from "./About";
import HomePage from "./Home";
import Clients from "./Clients";
import Contact from "./Contact";
import Service from "./Services";
import { Loader } from "../Generic";
import { Element } from "react-scroll";
import { Suspense, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const ENDPOINTURL = import.meta.env.VITE_REACT_APP_API_URL;

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
      data: { soloMain: data.soloMain, ourResault: data.ourResault },
      path: "/about",
      padding: false,
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
          {components.map(({ id, Component, data, padding, path }) => (
            <Element
              key={id}
              className={padding ? "px-[5%] py-[25px]" : ""}
              name={path}
            >
              <Component data={data} />
            </Element>
          ))}
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
