import PropTypes from "prop-types";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { API_SEARCH } from "../../constants/api";
import { getApiResource } from "../../utils/network";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import styles from "./SearchPage.module.css";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
import UIInput from "../../components/UI/UIInput/UIInput";
const SearchPage = ({ setErrorApi }) => {
  //состояние инпута
  const [value, setValue] = useState("");
  //состояния всех значений поиска
  const [people, setPeople] = useState([]);

  //функция поиска
  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);
    // console.log(param);
    if (res) {
      const personList = res.results.map(({ name, url }) => {
        //получаем id персонажа
        const id = getPeopleId(url);
        //получаем url для запроса изображения
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });

      setErrorApi(false);
      setPeople(personList);

      //   console.log(people);
    } else {
      setErrorApi(true);
    }
  };
  /**
   *debounce(lodash) Создает отмененную функцию, которая откладывает вызов до тех пор, func пока wait не
   * истечет миллисекунды с момента последнего вызова отмененной функции. Функция
   * debounced поставляется с cancelметодом отмены отложенных funcвызовов и flushметодом
   * их немедленного вызова
   * useCallback Возвращает мемоизированный колбэк,который будет обновлен, только если
   *  одна из зависимостей будет изменена.
   */
  //функция задержки запроса на сервер во время ввода инпута
  const debouncedResponce = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setValue(value);
    debouncedResponce(value);
  };

  useEffect(() => {
    getResponse("");
  }, []);
  return (
    <>
      <h1 className="header__text">Search</h1>
      <UIInput
        value={value}
        inputChange={handleInputChange}
        placeholder="Input person name"
        classes={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
