import PropTypes from "prop-types";
import "../index.css";
import classnames from "classnames";
import styles from "./UIButton.module.css";
//проп theme для стилизации светлого и темного стиля кнопки
const UIButton = ({ text, onClick, disabled, theme = "dark", classes }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classnames(styles.button, styles[theme], classes)} //используем classnames для указния нескольких классов
        disabled={disabled} //проп classes для того чтобы стилизовать компонент извне
      >
        {text}
      </button>
    </>
  );
};

UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};

export default UIButton;
