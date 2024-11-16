import Smm from "../components/Detail/Smm";
import Seo from "../components/Detail/Seo";
import Web from "../components/Detail/Web";
import Crm from "../components/Detail/Crm";
import Bot from "../components/Detail/Bot";
import Video from "../components/Detail/Video";
import Target from "../components/Detail/Target";
// import Blogger from "../components/Detail/Blogger";
import Context from "../components/Detail/Context";
import Branding from "../components/Detail/Branding";
import Advertisng from "../components/Detail/Advertisng";
import GenericElement from "../view";

const detail_pages_data = [
  {
    id: 1,
    element: Smm,
    path: "/smm",
    page: true,
  },
  {
    id: 2,
    element: "",
    path: "/seo",
    page: false,
  },
  {
    id: 3,
    element: Web,
    page: true,
    path: "/web-development",
  },
  {
    id: 4,
    element: "",
    path: "branding",
    page: false,
  },
  {
    id: 5,
    element: "",
    path: "/video",
    page: false,
  },
  {
    id: 6,
    element: "",
    path: "/advertisting",
    page: false,
  },
  {
    id: 7,
    element: "",
    path: "/crm",
    page: false,
  },
  {
    id: 8,
    element: "",
    path: "/bot",
    page: false,
  },
  {
    id: 9,
    element: "",
    path: "/target",
    page: false,
  },
  {
    id: 10,
    element: "",
    path: "/context",
    page: false,
  },
  {
    id: 11,
    element: "",
    path: "/blogger",
    page: false,
  },
];

export default detail_pages_data;
