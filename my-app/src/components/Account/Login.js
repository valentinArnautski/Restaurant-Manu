import { TextField } from "@mui/material";
import Modal from "../UI Elements/Modal";
import styles from "./login.module.css";
import { useState } from "react";
import { loginUser } from "../../services/fetchService";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginInput = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email,
        password,
        returnSecureToken: true,
      };

      const response = await loginUser(userData);
      setIsLogged(true);
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.container}>
        <div className={styles.loginHeader}>
          <h2 className={styles.head}>Влез в профила си</h2>
          <button className={styles.closeBtn} onClick={props.onClose}>
            X
          </button>
        </div>
        <form className={styles.submitForm} onSubmit={handleLoginInput}>
          <TextField
            required
            label="Имейл"
            variant="outlined"
            fullWidth
            onChange={handleEmailInput}
            value={email}
            margin="normal"
          />
          <TextField
            required
            label="Парола"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            margin="normal"
            onChange={handlePasswordInput}
          />
          <span className={styles.forgotPassword} onClick={props.onForgot}>
            Забравена парола?
          </span>
          <button className={styles.loginBtn} type="submit">
            Вход
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

export default Login;
