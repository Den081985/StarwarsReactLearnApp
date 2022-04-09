import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PeopleList from "../../components/PeoplePage/PeopleList";
import styles from "./FavouritePage.module.css";
//хук useSelector возвращает необходимый state из store
const FavouritePage = () => {
  //хук состояния добавленных элементов
  const [people, setPeople] = useState([]);
  const storeData = useSelector((state) => state.favouriteReducer);
  console.log(storeData);
  /**
   * Object.entries() метод возвращает массив собственных перечисляемых свойств указанного
   *  объекта в формате [key, value]
   */
  useEffect(() => {
    const array = Object.entries(storeData);
    // console.log(array);

    if (array.length) {
      const res = array.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      setPeople(res);
      console.log(people);
    }
  }, []);
  return (
    <>
      <h2 className="header__text">Favourites</h2>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No persons</h2>
      )}
    </>
  );
};

export default FavouritePage;
