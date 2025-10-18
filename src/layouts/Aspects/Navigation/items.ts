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

const our_services_items = [
  'smm',
  'website',
  'google',
  'seo',
  'telegram-bot',
  'crm',
  'branding',
  'target',
  'advertising',
  'video-montage',
  'blogers',
  'telegram-ads'
];

const nav_items: INavItem[] = [
  {
    id: 1,
    title: 'home',
    to: 'home'
  },
  {
    id: 2,
    title: 'about_us',
    to: 'about'
  },
  {
    id: 3,
    title: 'projects',
    to: 'projects'
  },
  {
    id: 4,
    title: 'team',
    to: 'team'
  },
  {
    id: 5,
    title: 'services',
    children: true
  },
  {
    id: 6,
    title: 'contact',
    to: 'contact'
  }
];

export { nav_items, our_services_items };
