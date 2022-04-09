import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UIButton from "../../UI/UIButton";
import styles from "./PeopleNavigation.module.css";
//компонент постраничной навигации
const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  //функция вызова следующей страницы
  const changePrevious = () => {
    getResource(prevPage);
  };
  //функция вызова предыдущей страницы
  const changeNext = () => {
    getResource(nextPage);
  };
  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
        <UIButton
          text="Previous"
          onClick={changePrevious}
          disabled={!prevPage}
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
        <UIButton text="Next" onClick={changeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
