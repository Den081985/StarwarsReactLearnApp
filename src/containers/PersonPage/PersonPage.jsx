import PropTypes from "prop-types";
import { useParams } from "react-router";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { API_PERSON } from "../../constants/api";
import { getApiResource } from "../../utils/network";
import { getPeopleImage } from "../../services/getPeopleData";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import styles from "./PersonPage.module.css";
// import UILoading from "../../components/UI/UILoading/UILoading";
import PersonFilms from "../../components/PersonPage/PersonFilms/PersonFilms";

/**
 * Функция React.lazy позволяет рендерить динамический импорт как обычный компонент.
 * Она автоматически загрузит бандл, содержащий PersonFilms, когда этот компонент будет
 *  впервые отрендерен.React.lazy принимает функцию, которая должна вызвать динамический
 * import(). Результатом возвращённого Promise является модуль, который экспортирует по
 * умолчанию React-компонент (export default).
 */

// const PersonFilms = React.lazy(() =>
//   import("../../components/PersonPage/PersonFilms/PersonFilms")
// );
/**
 * useParams возвращает объект пар ключ/значение параметров URL. Используйте его для
 * доступа match.params к текущему файлу <Route>.
 */
const PersonPage = ({ setErrorApi }) => {
  //хук состояния информации о элементе
  const [personInfo, setPersonInfo] = useState(null);
  //хук состояния имени персонажа
  const [personName, setPersonName] = useState(null);
  //хук состояния изображения персонажа
  const [personPhoto, setPersonPhoto] = useState(null);
  //хук состояния для списка фильмов персонажа
  const [personFilms, setPersonFilms] = useState([]);
  //хук для состояния id
  const [personId, setPersonId] = useState(null);
  //хук состояния добавлен ли элемент в избранное
  const [personFavourite, setPersonFavourite] = useState(false);

  const storeData = useSelector((state) => state.favouriteReducer);
  //получение параметра id
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      //   console.log(`${API_PERSON}/${id}/`, res);
      setPersonId(id);
      //проверка наличия поля id объекта в store
      storeData[id] ? setPersonFavourite(true) : setPersonFavourite(false);
      //проверка на наличие ошибок для high order component
      if (res) {
        setPersonInfo([
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
          { title: "Skin color", data: res.skin_color },
          { title: "Hair color", data: res.hair_color },
          { title: "Eye color", data: res.eye_color },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        setErrorApi(false);

        res.films.length && setPersonFilms(res.films);
      } else {
        setErrorApi(true);
      }
    })();
  });
  /**
   * Компонент с ленивой загрузкой должен рендериться внутри компонента Suspense, который
   *  позволяет нам показать запасное содержимое (например, индикатор загрузки) пока
   * происходит загрузка ленивого компонента.
   * Проп fallback принимает любой React-элемент, который вы хотите показать, пока
   * происходит загрузка компонента.
   */
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            personName={personName}
            personPhoto={personPhoto}
            personId={personId}
            personFavourite={personFavourite}
            setPersonFavourite={setPersonFavourite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {/* {personFilms && (
            <Suspense fallback={<h1>Loading</h1>}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )} */}
          {personFilms && <PersonFilms personFilms={personFilms} />}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};
//обёртка из high order component для отображения компонента ошибки
export default withErrorApi(PersonPage);
