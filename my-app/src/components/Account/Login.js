import Modal from "../UI Elements/Modal";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles.container}>
        <div className={styles.loginHeader}>
          <h2 className={styles.head}>Влез в профила си</h2>
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
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="Парола"
          />
          <span className={styles.forgotPassword}>Забравена парола?</span>
          <button className={styles.loginBtn} type="submit">
            Вход
          </button>
        </form>
        <div className={styles.bottomPart}>
          <span>Нямаш профил? Регистрирай се сега!</span>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
