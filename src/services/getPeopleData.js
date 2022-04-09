import {
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  HTTPS,
  HTTP,
  URL_IMG_PERSON,
  GUIDE_IMG_EXTENSION,
  SWAPI_PARAM_PAGE,
} from "../constants/api";
import { useLocation } from "react-router";

/**
 * Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном,
 *  заменёнными на заменитель. Шаблон может быть строкой или регулярным выражением, а
 * заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.
 */

//функция возврата id для всех категорий элементов
const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, "").replace(/\//g, "");
  return id;
};

//функция возврата id персонажей
export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

//функция возврата пути к изображению персонажа по id
export const getPeopleImage = (id) =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;

//функция возврата номера текущей страницы
export const getPeoplePageId = (url) => {
  //узнаем позицию "/?page="
  const position = url.lastIndexOf(SWAPI_PARAM_PAGE);
  //удаляем позицию и получаем в остатке номер страницы
  const id = url.slice(position + SWAPI_PARAM_PAGE.length);
  // console.log(id);
  return Number(id);
};
