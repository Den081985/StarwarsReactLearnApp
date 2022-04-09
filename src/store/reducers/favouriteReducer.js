//функция-редьюсер
import { omit } from "lodash";
import { ADD_PERSON_TO, REMOVE_PERSON_FROM } from "../types";
import { getLocalStorage } from "../../utils/localStorage";

const initialState = getLocalStorage("store");
/**
 * omit(lodash)этот метод создает объект, состоящий из собственных и унаследованных
 * перечисляемых путей свойств object, которые не опущены.Удаляет из объекта свойства(ключ),
 * указанные вторым параметром.
 */

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_PERSON_FROM:
      return omit(state, [action.payload]);
    default:
      return state;
  }
};
export default favouriteReducer;
