import { useState } from "react";
import Modal from "../UI Elements/Modal";
import styles from "./register.module.css";

const Register = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.container}>
        <div className={styles.loginHeader}>
          <h2 className={styles.head}>Регистрирай се</h2>
          <button className={styles.closeBtn} onClick={props.onClose}>
            X
          </button>
        </div>
        <form className={styles.submitForm}>
          <input
            className={styles.input}
            type="text"
            id="names"
            placeholder="Име и Фамилия"
          />
          <input
            className={styles.input}
            type="text"
            id="email"
            placeholder="Имейл"
          />
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="Парола"
          />
          <input
            className={styles.input}
            type="password"
            id="confirmPassword"
            placeholder="Потвърди паролата"
          />
          <label className={styles.tickBoxLabel}>
            <input
              className={styles.tickBox}
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Съгласен съм с УСЛОВИЯТА ЗА ПОЛЗВАНЕ
          </label>
          <button className={styles.loginBtn} type="submit">
            Регистрация
          </button>
        </form>
        <div className={styles.bottomPart}>
          <span className={styles.forgotPassword} onClick={props.onLogin}>
            Вече имаш профил? Влез
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default Register;
