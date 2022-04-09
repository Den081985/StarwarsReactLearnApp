import UIVideo from "../UI/UIVideo/UIVideo";
import video from "./video/han-solo.mp4";
import styles from "./ErrorMessage.module.css";
//компонент вывода сообщения об ошибке
const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won.
        <br />
        We can not display data.
        <br />
        Come back when we fix everything.
      </p>
      <UIVideo src={video} classes={styles.video} playbackRate={1.0} />
    </>
  );
};

export default ErrorMessage;
