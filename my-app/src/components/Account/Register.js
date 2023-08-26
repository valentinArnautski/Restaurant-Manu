import { useState } from "react";
import Modal from "../UI Elements/Modal";
import styles from "./register.module.css";
import { registerUser } from "../../services/fetchService";
import { Button, TextField } from "@mui/material";
import CloseButton from "../UI Elements/CloseButton";

const Register = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [tickboxError, setTickboxError] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
    setTickboxError("");
  };

  const handlEmailInput = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateEmail = (inputEmail) => {
    if (!inputEmail.includes("@")) {
      setEmailError("Невалиден имейл адрес.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (inputPassword) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(inputPassword)) {
      setPasswordError(
        "Паролата трябва да бъде дълга поне 8 символа и да съдържа главна и малка буква, цифра и специален символ."
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }

    if (!isChecked) {
      setTickboxError("Трябва да приемете условията за ползване.");
      return;
    }

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
          <CloseButton onClose={props.onClose} />
        </div>
        <form className={styles.submitForm} onSubmit={handleRegistration}>
          <TextField
            required
            label="Име и Фамилия"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            required
            label="Имейл"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handlEmailInput}
            margin="normal"
            error={emailError.length > 0}
            helperText={emailError}
          />
          <TextField
            required
            label="Парола"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordInput}
            margin="normal"
            error={passwordError.length > 0}
            helperText={passwordError}
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
          {tickboxError && <p className={styles.errorText}>{tickboxError}</p>}
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
