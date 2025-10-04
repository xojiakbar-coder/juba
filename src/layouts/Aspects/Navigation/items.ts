export interface INavChild {
  id: number;
  path: string;
}

export interface INavItem {
  id: number;
  title: string;
  to?: string;
  path?: string | null;
  children?: boolean;
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
    children: true
    // children: [
    //   {
    //     id: 51,
    //     path: '/services/smm'
    //   },
    //   {
    //     id: 52,
    //     path: '/services/web'
    //   },
    //   {
    //     id: 53,
    //     path: '/services/branding'
    //   },
    //   {
    //     id: 54,
    //     path: '/services/branding'
    //   },
    //   {
    //     id: 54,
    //     path: '/services/branding'
    //   },
    //   {
    //     id: 55,
    //     path: '/services/branding'
    //   }
    // ]
  },
  {
    id: 6,
    title: 'Aloqa',
    to: 'contact'
  }
];

export { nav_items };
