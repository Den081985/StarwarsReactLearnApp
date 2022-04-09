import PropTypes from "prop-types";
import classnames from "classnames";
import icon from "./img/icons8-close-50.png";
import "../index.css";
import styles from "./UIInput.module.css";
const UIInput = ({ value, inputChange, placeholder, classes }) => (
  <div className={classnames(styles.wrapper, classes)}>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      classes={classes}
      onChange={(e) => inputChange(e.target.value)}
      className={styles.input}
    />
    <img
      onClick={() => value && inputChange("")}
      src={icon}
      alt="Clear"
      className={classnames(styles.clear, !value && styles.clear__disabled)}
    />
  </div>
);

UIInput.propTypes = {
  value: PropTypes.string,
  inputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};

export default UIInput;
