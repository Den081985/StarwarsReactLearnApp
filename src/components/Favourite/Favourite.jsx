import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import icon from "./img/bookmark.png";
import styles from "./Favourite.module.css";
const Favourite = () => {
  //хук состояния количества элементов в избранном
  const [count, setCount] = useState();
  const storeData = useSelector((state) => state.favouriteReducer);
  //   console.log(storeData);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    //проверка на количество цифр в числе добавленных в избранное
    length.toString().length > 2 ? setCount("...") : setCount(length);
  });
  return (
    <div className={styles.container}>
      <Link to={"/favourite"}>
        <span className={styles.counter}>{count}</span>
        <img src={icon} className={styles.icon} alt="favourites" />
      </Link>
    </div>
  );
};

export default Favourite;
