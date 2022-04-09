import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./containers/App/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import ThemeProvider from "./context/themeProvider";
/**
 * Provider обеспечивает доступ всех компонентов к хранилищу redux
 */
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
