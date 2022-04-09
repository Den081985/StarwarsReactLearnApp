import React, { useContext, useState } from "react";
import { getCssVars } from "../services/getCssVars";
// import { createContext } from "react";

//константы содержания тем
export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const THEME_NEUTRAL = "neutral";
//создаем объект контекста
const themeContext = React.createContext();
//компонент прoвайдера
const ThemeProvider = ({ children, ...props }) => {
  //хук состояния темы
  const [theme, setTheme] = useState(null);

  //функция изменения темы
  const change = (name) => {
    setTheme(name);
    getCssVars(name);
  };
  return (
    <themeContext.Provider
      value={{
        theme: theme,
        change: change,
      }}
      {...props}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;

//функция-контейнер для контекста провайдера
export const useTheme = () => useContext(themeContext);
