import PropTypes from "prop-types";
import styles from "./PersonInfo.module.css";
const PersonInfo = ({ personInfo }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list__container}>
          {personInfo.map(
            ({ title, data }) =>
              //если информация в ответе(data) есть отображаем элемент
              data && (
                <li key={title} className={styles.list__item}>
                  <span className={styles.item__title}>{title}</span>: {data}
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
