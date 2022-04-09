import React from "react";
import { useNavigate } from "react-router-dom";
import iconBack from "./img/icon.png";
import styles from "./PersonLinkBack.module.css";

/**
 *Хук useHistoryдает вам доступ к historyэкземпляру, который вы можете использовать для 
 навигации.хук useHistory позволяет нам получить доступ к объекту history. Затем мы можем 
 вызывать такие методы объекта history, как goBack или push. Метод goBack позволяет 
 перенаправить пользователя к предыдущему маршруту в стеке истории. Например, если 
 пользователь перейдет со страницы Home на страницу Shop, а затем нажмет кнопку для 
 возврата назад (“Go Back”), он снова будет перенаправлен на страницу Home.

 useNavigate Хук возвращает функцию, которая позволяет программно перемещаться, например, 
 после отправки формы .
 Функция navigateимеет две подписи:

Либо передайте Toзначение (того же типа, что и <Link to>) с необязательным вторым 
{ replace, state }аргументом, либо
Передайте дельту, которую вы хотите пройти в стеке истории. Например, 
navigate(-1)эквивалентно нажатию кнопки «Назад».
 */

//компонент для навигации обратно из страницы персонажа к основной странице

const PersonLinkBack = () => {
  //определяем объект useHistory
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1); //navigate(-1)эквивалентно нажатию кнопки «Назад»
  };
  return (
    <>
      <a href="#" onClick={handleGoBack} className={styles.link}>
        <span className={styles.link__back}>Go Back</span>
      </a>
    </>
  );
};

export default PersonLinkBack;
