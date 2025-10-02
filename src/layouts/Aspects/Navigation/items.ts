export interface INavChild {
  id: number;
  title: string;
  path: string;
}

export interface INavItem {
  id: number;
  title: string;
  to?: string;
  path?: string | null;
  children?: INavChild[];
}
const nav_items: INavItem[] = [
  {
    id: 1,
    title: 'Asosiy',
    to: 'home'
  },
  {
    id: 2,
    title: 'Biz haqimizda',
    to: 'about'
  },
  {
    id: 3,
    title: 'Loyihalar',
    to: 'projects'
  },
  {
    id: 4,
    title: 'Jamoa',
    to: 'team'
  },
  {
    id: 5,
    title: 'Xizmatlarimiz',
    children: [
      {
        id: 51,
        title: 'SMM',
        path: '/services/smm'
      },
      {
        id: 52,
        title: 'Web Dasturlash',
        path: '/services/web'
      },
      {
        id: 53,
        title: 'Branding',
        path: '/services/branding'
      }
    ]
  },
  {
    id: 6,
    title: 'Aloqa',
    to: 'contact'
  }
];

export { nav_items };
