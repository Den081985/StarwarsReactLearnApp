import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  removePersonFromFavourite,
  setPersonToFavourite,
} from "../../../store/actions";
import iconFavourite from "./img/favourite.png";
import iconFavouriteFill from "./img/notfavourite.png";
import styles from "./PersonPhoto.module.css";

//хук useDispatch передает action в store
const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavourite,
  setPersonFavourite,
}) => {
  const dispatch = useDispatch();
  //функция добавления в избранное
  const add = () => {
    dispatch(
      setPersonToFavourite({
        [personId]: {
          name: personName,
          img: personPhoto,
        },
      })
    );
    setPersonFavourite(true);
  };
  //функция удаления из избранного
  const remove = () => {
    dispatch(removePersonFromFavourite(personId));
    setPersonFavourite(false);
  };
  //комбинированная функция добавления и удаления из избранного
  const dispatchPersonToFavourite = () => {
    if (personFavourite) {
      remove();
    } else {
      add();
    }
  };
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
      <img
        src={personFavourite ? iconFavourite : iconFavouriteFill}
        onClick={dispatchPersonToFavourite}
        className={styles.favourite}
      />
      {/* <button onClick={dispatchPersonToFavourite}>
        {personFavourite ? "Remove" : "Add"}
      </button> */}
    </>
  );
};

PersonPhoto.propTypes = {
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavourite: PropTypes.bool,
  setPersonFavourite: PropTypes.func,
};

export default PersonPhoto;
