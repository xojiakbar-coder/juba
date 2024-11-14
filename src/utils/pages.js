import Team from "../components/Home/Team";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Clients from "../components/Home/Clients";
import Services from "../components/Home/Services";
import HomePage from "../components/Home/HomePage";

const pages_data = [
  {
    id: 1,
    url: "slider/",
    padding: true,
    element: HomePage,
  },
  {
    id: 2,
    url: "service/",
    element: Services,
    padding: true,
  },
  {
    id: 3,
    url: "solo-main/",
    element: About,
    padding: false,
  },
  {
    id: 4,
    url: "client-photo/",
    element: Clients,
    padding: true,
  },
  {
    id: 5,
    url: "team-photo/",
    element: Team,
    padding: true,
  },
  {
    id: 6,
    url: "our-contact/",
    element: Contact,
    padding: false,
  },
];

export default pages_data;
