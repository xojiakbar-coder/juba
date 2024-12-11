import axios from "axios";
import Team from "./Team";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Clients from "./Clients";
import Service from "./Services";
import HomePage from "./HomePage";
import Form from "../Contact/Form";
import OurResault from "./Resault";
import { Loader } from "../Generic";
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
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const headerUrl = `${ENDPOINTURL}/slider/`;
      const serviceUrl = `${ENDPOINTURL}/service/`;
      const aboutUrl = `${ENDPOINTURL}/solo-main/`;
      const resaultUrl = `${ENDPOINTURL}/result/`;
      const clientsUrl = `${ENDPOINTURL}/client-photo/`;
      const teamUrl = `${ENDPOINTURL}/team-photo/`;

      const [
        headerResponse,
        serviceResponse,
        aboutResponse,
        resaultResponse,
        clientsResponse,
        teamResponse,
      ] = await axios.all([
        axios.get(headerUrl),
        axios.get(serviceUrl),
        axios.get(aboutUrl),
        axios.get(resaultUrl),
        axios.get(clientsUrl),
        axios.get(teamUrl),
      ]);

      setData({
        slider: headerResponse.data,
        service: serviceResponse.data,
        soloMain: aboutResponse.data,
        ourResault: resaultResponse.data,
        clients: clientsResponse.data,
        team: teamResponse.data,
      });
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loader />;

  const components = [
    {
      id: 1,
      Component: HomePage,
      data: data.slider,
      padding: true,
    },
    {
      id: 2,
      Component: Service,
      data: data.service,
      padding: true,
    },
    {
      id: 3,
      Component: About,
      data: data.soloMain,
      padding: false,
      bottomPage: true,
    },
    {
      id: 4,
      Component: Clients,
      data: data.clients,
      padding: false,
    },
    {
      id: 5,
      Component: Team,
      data: data.team,
      padding: false,
    },
  ];

  return (
    <Suspense>
      <Navbar />
      <div className="w-full">
        {components.map(({ id, Component, data, bottomPage, padding }) => (
          <div key={id} className={padding ? "px-[5%] py-[25px]" : ""}>
            <Component
              data={data}
              id={`section-${id}`}
              bottomPage={bottomPage && <OurResault data={data.ourResault} />}
            />
          </div>
        ))}
      </div>
      <Contact />
      <Form />
      <Footer />
    </Suspense>
  );
};

export default Home;
