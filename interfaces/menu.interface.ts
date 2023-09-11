import { TopLevelCategory } from "./page.intarface";

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface firstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}