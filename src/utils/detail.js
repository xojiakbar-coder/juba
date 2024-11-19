import Smm from "../components/Detail/index";
import Web from "../components/Detail/Web/index";
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
    element: GenericElement,
    path: "/seo-optimization",
    page: false,
  },
  {
    id: 3,
    element: Web,
    page: true,
    path: "/website-development",
  },
  {
    id: 4,
    element: GenericElement,
    path: "branding",
    page: false,
  },
  {
    id: 5,
    element: GenericElement,
    path: "/video",
    page: false,
  },
  {
    id: 6,
    element: GenericElement,
    page: false,
    path: "/contextual-advertising",
  },
  {
    id: 7,
    element: GenericElement,
    path: "/crm",
    page: false,
  },
  {
    id: 8,
    element: GenericElement,
    page: false,
    path: "bot-development",
  },
  {
    id: 9,
    element: GenericElement,
    path: "/target",
    page: false,
  },
  {
    id: 10,
    element: GenericElement,
    path: "/context",
    page: false,
  },
  {
    id: 11,
    element: GenericElement,
    path: "/blogger",
    page: false,
  },
  {
    id: 12,
    element: GenericElement,
    title: "Наружная реклама",
    path: "outdoor-advertising",
  },
  {
    id: 8,
    element: GenericElement,
    title: "Интеграция с блогерами",
    path: "integration-with-bloggers",
  },
];

export default detail_pages_data;
