import { useLocation } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

//Хук useLocation возвращает location объект, представляющий текущий URL.
const NotFoundPage = () => {
  let location = useLocation();
  return (
    <>
      <div className={styles.notfound__wrapper}>
        <h2 className={styles.notfound__title}>Page is not found!</h2>
        <p className={styles.notfound__text}>
          No match for <u>{location.pathname}</u>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
