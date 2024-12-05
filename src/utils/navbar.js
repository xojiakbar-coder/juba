const navbar_items_data = [
  {
    id: 1,
    title: "Asosiy",
    path: "/",
    to: "/",
    
    children: false,
  },
  {
    id: 2,
    title: "Biz haqimizda",
    path: "/about",
    to: "/about",
    children: false,
  },
  {
    id: 3,
    title: "Loyihalar",
    path: "/clients",
    children: false,
  },
  {
    id: 4,
    title: "Jamoa",
    path: "/our-team",
    to: "/our-team",
    children: false,
  },
  {
    id: 5,
    title: "Xizmatlarimiz",
    path: "/",
    children: true,
    childrenUrl: "/detail/",
  },
  {
    id: 6,
    title: "Aloqa",
    path: "/aloqa",
    to: "/aloqa",
    children: false,
  },
];

export default navbar_items_data;
