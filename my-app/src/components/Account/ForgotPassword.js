import Modal from "../UI Elements/Modal";
import styles from "./login.module.css";

const ForgotPassword = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles.container}>
        <div className={styles.loginHeader}>
          <h2 className={styles.head}>Забравена парола</h2>
          <button className={styles.closeBtn} onClick={props.onClose}>
            X
          </button>
        </div>
        <form className={styles.submitForm}>
          <input
            className={styles.input}
            type="text"
            id="username"
            placeholder="Имейл"
          />
          <button className={styles.loginBtn} type="submit">
            Изпрати
          </button>
        </form>
        <div className={styles.bottomPart}>
          <span onClick={props.onRegister}>
            Нямаш профил? Регистрирай се сега!
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPassword;
