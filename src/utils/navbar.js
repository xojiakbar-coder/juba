const navbar_items_data = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    to: "/",
    children: [],
  },
  {
    id: 2,
    title: "О компании",
    path: "/about",
    to: "/about",
    children: [],
  },
  {
    id: 3,
    title: "Проекты",
    path: "/clients",
    children: [],
  },
  {
    id: 4,
    title: "Команда",
    path: "/our-team",
    to: "/our-team",
    children: [],
  },
  {
    id: 5,
    title: "Услуги",
    path: "/",
    children: [
      {
        id: 1,
        title: "SMM продвижение",
        path: "/detail/smm",
      },
      {
        id: 2,
        title: "Разработка сайтов",
        path: "/detail/web-development",
      },
    ],
  },
  {
    id: 6,
    title: "Контакты",
    path: "/contact",
    to: "/contact",
    children: [],
  },
];

export default navbar_items_data;
