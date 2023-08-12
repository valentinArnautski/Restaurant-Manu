import Modal from "../UI Elements/Modal";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.loginHeader}>
          <h2 className={styles.head}>Log in</h2>
          <button className={styles.closeBtn} onClick={props.onClose}>
            X
          </button>
        </div>
        <form className={styles.submitForm}>
          <input
            className={styles.input}
            type="text"
            id="username"
            placeholder="Username"
          />
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="Password"
          />
          <span className={styles.forgotPassword}>Forgot your password?</span>
          <button className={styles.loginBtn} type="submit">
            Login
          </button>
        </form>
        <div className={styles.bottomPart}>
          <span>Already have an account?</span>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
