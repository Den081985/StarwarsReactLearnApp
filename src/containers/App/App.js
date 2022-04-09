import React from "react";
import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";
import routesConfig from "../../Routes/routesConfig";
import Header from "../../components/Header";
import PeoplePage from "../PeoplePage";
import HomePage from "../HomePage";
import styles from "./App.module.css";
//компоненты роутинга  отображаем через итерацию массива routesConfig
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
