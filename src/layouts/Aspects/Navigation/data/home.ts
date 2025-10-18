import { type INavItem } from './types';

const items: INavItem[] = [
  { id: 1, title: 'home', to: 'home' },
  { id: 2, title: 'about_us', to: 'about' },
  { id: 3, title: 'projects', to: 'projects' },
  { id: 4, title: 'team', to: 'team' },
  { id: 5, title: 'services', children: true },
  { id: 6, title: 'contact', to: 'contact', general: true }
];

export default items;
