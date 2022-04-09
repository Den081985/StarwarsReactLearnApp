import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleList";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";
import { useQueryParams } from "../../Hooks/useQueryParams";
import { getApiResource, changeHttp } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "../../services/getPeopleData";
import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  //useState для хранения/изменения состояния массива персонажей
  const [people, setPeople] = useState(null);
  //хук для состояния предыдущей страницы в пагинации
  const [prevPage, setPrevPage] = useState(null);
  //хук для состояния следующей страницы
  const [nextPage, setNextPage] = useState(null);
  //xук состояния текущей страницы
  const [counterPage, setCounterPage] = useState(1);
  //вызов объекта URLSeachParams
  const query = useQueryParams();
  //Метод get()интерфейса URLSearchParams возвращает первое значение, связанное с заданным параметром поиска.
  //в переменной сохраняется номер страницы "/?page=queryPage"
  const queryPage = query.get("page");

  // console.log(queryPage);

  //функция для запросов на сервер
  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
      setPrevPage(res.previous);
      setNextPage(res.next);
      setCounterPage(getPeoplePageId(url));
      // setPrevPage(changeHttp(res.previous));
      // setNextPage(changeHttp(res.next));
      // console.log(res);
    } else {
      setErrorApi(true);
    }
  };

  //хук для запроса на сервер после основного рендера страницы
  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);
  return (
    <Fragment>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </Fragment>
  );
};

//указываем типы пропсов
PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};
//компонент оборачивается в HOC(high order component)
export default withErrorApi(PeoplePage);

// return (
//   <Fragment>
//     {errorApi ? (
//       <h2>Error</h2>
//     ) : (
//       <Fragment>{people && <PeopleList people={people} />}</Fragment>
//     )}
//   </Fragment>
// );
