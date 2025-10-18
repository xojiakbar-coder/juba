export interface INavItem {
  id: number;
  to?: string;
  title: string;
  general?: boolean;
  children?: boolean;
}
