import React, { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
/**
 * High Order Component-компонент высшего порядка — это функция, которая принимает компонент
 * и возвращает новый компонент.Компонент высшего порядка преобразует компонент в другой
 * компонент.
 */
/**
 * Если errorApi=true выводится сообщение об ошибке, если false-компонент
 */
export const withErrorApi = (Wiew) => {
  return (props) => {
    //хук для хранения/изменения состояния ошибки загрузки данных с сервера
    const [errorApi, setErrorApi] = useState(false);
    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <Wiew setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};
