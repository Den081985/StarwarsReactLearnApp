import { combineReducers } from "redux";
import favouriteReducer from "./favouriteReducer";
//combineReducers объединяет несколько редьюсеров в один объект
export const rootReducer = combineReducers({
  favouriteReducer,
});
