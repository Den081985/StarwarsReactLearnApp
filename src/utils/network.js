import { HTTP, HTTPS } from "../constants/api";

//функция изменения http на https
/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String}-url измененный
 */
export const changeHttp = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

//функция для fetch-запросов к серверу
/**
 * Отправлет запрос fetch
 * @param {String} url
 * @returns {Promise}-результат запроса
 */
export const getApiResource = async (url) => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((body) => console.log(body))
  //     .catch((err) => console.log(err.message));

  try {
    const response = await fetch(url);
    //обработка ошибки 404 с помощью свойства ответа ok(которое содержит true/false)
    if (!response.ok) {
      console.error(response.status);
      return false;
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
//вызов функции с промисами
// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));
//вызов IIFE(самовызывающейся асинхронной функции)
// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();

/**
 *Метод Promise.all(iterable) возвращает промис, который выполнится тогда, когда будут 
 выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонено любое
  из переданных промисов. 
  Promise.all возвращает массив значений от всех промисов, которые были ему переданы.
  Возвращаемый массив значений сохраняет порядок оригинального перечисляемого объекта,
  но не порядок выполнения промисов. 
 *
 */

//функция одновременного запроса
export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((result) => {
      return fetch(result).then((result) => result.json());
    })
  );
  return res;
};
