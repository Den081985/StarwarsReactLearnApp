import PropTypes from "prop-types";
import {
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "../../../context/themeProvider";
import Light from "./img/light-side.jpg";
import Dark from "./img/dark-side.jpg";
import Neutral from "./img/falcon.jpg";
import { useTheme } from "../../../context/themeProvider";
import classnames from "classnames";
import styles from "./ChooseSide.module.css";

//компонент фото
const ChooseSideItem = ({ text, img, theme, classes }) => {
  //переменная содержит объект контекста тем
  const isTheme = useTheme();
  return (
    <div
      className={classnames(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img src={img} className={styles.item__img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.string,
};
const ChooseSide = () => {
  return (
    <>
      <div className={styles.container}>
        <ChooseSideItem
          theme={THEME_LIGHT}
          text={"Light Side"}
          img={Light}
          classes={styles.item__light}
        />
        <ChooseSideItem
          theme={THEME_DARK}
          text={"Dark Side"}
          img={Dark}
          classes={styles.item__dark}
        />
        <ChooseSideItem
          theme={THEME_NEUTRAL}
          text={"Other Side"}
          img={Neutral}
          classes={styles.item__neutral}
        />
      </div>
    </>
  );
};

export default ChooseSide;
