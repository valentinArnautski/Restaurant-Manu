import { Button, IconButton, TextField } from "@mui/material";
import Modal from "../UI Elements/Modal";
import styles from "./login.module.css";
import { useEffect, useState } from "react";
import { loginUser } from "../../services/fetchService";
import Manager from "./Manager";
import CloseButton from "../UI Elements/CloseButton";
import { GoogleLogin } from "@react-oauth/google";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [JWT, setJWT] = useState("");

  useEffect(() => {
    const storedJWT = localStorage.getItem("token");
    if (storedJWT) {
      setIsLogged(true);
      setJWT(storedJWT);
    }
  }, []);

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
      localStorage.setItem("token", response.idToken);
      setJWT(response.idToken);
      console.log("Login successful:", response);
    } catch (error) {
      setLoginError("Грешни данни за вход.");
      console.error("Login error:", error);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.container}>
        <div className={styles.loginHeader}>
          {isLogged && JWT ? (
            <h2 className={styles.head}>{`Добре дошъл, ${email}`}</h2>
          ) : (
            <h2 className={styles.head}>Влез в профила си</h2>
          )}
          <CloseButton onClose={props.onClose} />
        </div>
        {isLogged ? (
          <Manager isLogged={isLogged} onClose={props.onClose} />
        ) : (
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
            <div className={styles.error}>{loginError}</div>
            <span className={styles.forgotPassword} onClick={props.onForgot}>
              Забравена парола?
            </span>

            <Button className={styles.loginBtn} type="submit">
              Влез
            </Button>
            <span className={styles.or}>ИЛИ</span>
          </form>
        )}
        {!isLogged && (
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        )}

        <div className={styles.bottomPart}>
          {isLogged ? (
            <span>Благодарим Ви, че избрахте нас!</span>
          ) : (
            <span onClick={props.onRegister}>
              Нямаш профил? Регистрирай се сега!
            </span>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Login;
