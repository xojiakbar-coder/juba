const navbar_itmes_data = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    to: "/",
  },
  {
    id: 2,
    title: "О компании",
    path: "/about",
    to: "/about",
  },
  {
    id: 3,
    title: "Проекты",
    path: "/clients",
  },
  {
    id: 4,
    title: "Команда",
    path: "/our-team",
    to: "/our-team",
  },
  {
    id: 5,
    title: "Услуги",
    path: "/",
    children: [
      {
        id: 1,
        title: "SMM продвижение",
        path: "/smm",
      },
      {
        id: 2,
        title: "Разработка сайтов",
        path: "/website-development",
      },
      {
        id: 3,
        title: "Контекстаная реклама",
        path: "/contextual-advertising",
      },
      {
        id: 4,
        title: "SEO оптимизация",
        path: "/seo-optimization",
      },
      {
        id: 5,
        title: "Разработка-ботов",
        path: "bot-development",
      },
      {
        id: 6,
        title: "CRM",
        path: "/crm",
      },
      {
        id: 7,
        title: "Брендинг",
        path: "/branding",
      },
      {
        id: 8,
        title: "Интеграция с блогерами",
        path: "integration-with-bloggers",
      },
      {
        id: 9,
        title: "Таргет",
        path: "/target",
      },
      {
        id: 10,
        title: "Наружная реклама",
        path: "outdoor-advertising",
      },
      {
        id: 11,
        title: "Видео",
        path: "/video",
      },
    ],
  },
  {
    id: 6,
    title: "Контакты",
    path: "/contact",
    to: "/contact",
  },
];

export default navbar_itmes_data;
