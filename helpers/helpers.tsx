import { firstLevelMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.intarface";

export const firstLevelMenu:firstLevelMenuItem[] = [
  {route: "courses", name: "Курсы", icon: <span className="material-symbols-outlined">school</span>, id: TopLevelCategory.Courses},
  {route: "services", name: "Сервисы", icon: <span className="material-symbols-outlined">cloud</span>, id: TopLevelCategory.Services},
  {route: "books", name: "Книги", icon: <span className="material-symbols-outlined">menu_book</span>, id: TopLevelCategory.Books},
  {route: "products", name: "Продукты", icon: <span className="material-symbols-outlined">package_2</span>, id: TopLevelCategory.Products},
]

export const priceRu = (price: number):string => 
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const decOfNum = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}