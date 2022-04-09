import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "../../context/themeProvider";
import Favourite from "../Favourite/Favourite";
import lightTheme from "./img/icons8-lightsaber-64.png";
import darkTheme from "./img/icons8-дарт-вейдер-64.png";
import neutralTheme from "./img/icons8-r2-d2-64.png";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

//компонент отображения навигации
const Header = () => {
  const [iconTheme, setIconTheme] = useState(null);
  //объект контекста тем
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIconTheme(lightTheme);
        break;
      case THEME_DARK:
        setIconTheme(darkTheme);
        break;
      case THEME_NEUTRAL:
        setIconTheme(neutralTheme);
        break;
      default:
        setIconTheme(neutralTheme);
    }
  }, [isTheme]);

  return (
    <>
      <div className={styles.container}>
        <img src={iconTheme} alt={"Star Icon"} className={styles.logo} />
        <ul className={styles.list__container}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/people/?page=1"}>People</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>Search</NavLink>
          </li>
          <li>
            <NavLink to={"/not-found"}>Not found</NavLink>
          </li>
          <li>
            <NavLink to={"/fail"}>Fail</NavLink>
          </li>
        </ul>
        <Favourite />
      </div>
    </>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
