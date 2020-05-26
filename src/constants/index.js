import { 
  SearchIcon,
  HomeIcon, 
} from "src/icons";

export const NAV_BAR_LINKS = [
  {
    Icon: HomeIcon,
    text: "Главная",
    href: "/",
    id: 0,
  },
  {
    Icon: SearchIcon,
    text: "Найти",
    href: "/",
    id: 1,
  },
];

export const HEADER_LINK = [
  {
    text: "ВЫБОР СЛУШАТЕЛЕЙ",
    href: "/",
    key: 0,
  },
  {
    text: "ЖАНРЫ И НАСТРОЕНИЯ",
    href: "/genres",
    key: 1,
  },
  {
    text: "НОВЫЕ РЕЛИЗЫ",
    href: "/release",
    key: 2,
  },
];