import { useState } from "react";
import Modal from "../UI Elements/Modal";
import styles from "./register.module.css";
import { registerUser } from "../../services/fetchService";
import { Button, TextField } from "@mui/material";

const Register = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handlEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email,
        password,
        returnSecureToken: true,
      };
      const response = await registerUser(userData);
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration error:", error);
    }
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
        <form className={styles.submitForm} onSubmit={handleRegistration}>
          <TextField
            label="Име и Фамилия"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Имейл"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handlEmailInput}
            margin="normal"
          />
          <TextField
            label="Парола"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordInput}
            margin="normal"
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
          <Button className={styles.loginBtn} type="submit">
            Регистрация
          </Button>
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
