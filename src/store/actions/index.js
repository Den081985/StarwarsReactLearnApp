//экшнкреэйторы

import { ADD_PERSON_TO, REMOVE_PERSON_FROM } from "../types";

//функция добавления элемента в избранное
export const setPersonToFavourite = (person) => ({
  type: ADD_PERSON_TO,
  payload: person,
});
//функция удаления элемента из избранного
export const removePersonFromFavourite = (personId) => ({
  type: REMOVE_PERSON_FROM,
  payload: personId,
});
