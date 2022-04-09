import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeConcurrentRequest } from "../../../utils/network";
import styles from "./PersonFilms.module.css";
const PersonFilms = ({ personFilms }) => {
  //   console.log(personFilms);
  //хук для состояния спиcка фильмов
  const [filmsNames, setFilmsNames] = useState([]);

  useEffect(() => {
    (async () => {
      const responce = await makeConcurrentRequest(personFilms);
      setFilmsNames(responce);
    })();
  });

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsNames
          .sort((a, b) => a.episode_id - b.episode_id) //функция сортировки массива по возрастанию
          .map(({ title, episode_id }) => (
            <li key={episode_id} className={styles.list__item}>
              <span className={styles.item__epizode}>Episod {episode_id}</span>
              <span className={styles.item__colon}>:</span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};

export default PersonFilms;
