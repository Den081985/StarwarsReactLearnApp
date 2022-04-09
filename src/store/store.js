import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { putLocalStorage } from "../utils/localStorage";
//инициализация redux Store
/**
 * composeWithDevTolls-позволяет подключить redux DevTools вместе с мидлвэр функциями
 * thunk-мидлвэр для работы с асинхронными операциями.
 *  redux-thunk позволяет создателям действий инвертировать управление, отправляя функции.
 *  Они получат dispatch в качестве аргумента и могут вызвать его асинхронно.
 * applyMiddleware расширяет store,добавляя в него мидлвэр-функции.
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//subscribe подписывается наизменение store и с помощью getState получает состояния
store.subscribe(() => {
  const state = store.getState().favouriteReducer;
  putLocalStorage("store", state);
});
export default store;
