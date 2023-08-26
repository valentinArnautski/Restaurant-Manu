import React, { useState } from "react";
import { resetPassword } from "../../services/fetchService";
import { TextField } from "@mui/material";
import Modal from "../UI Elements/Modal";
import styles from "./login.module.css";
import CloseButton from "../UI Elements/CloseButton";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(email);
      setResetSent(true);
    } catch (error) {
      console.error("Password reset error:", error);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.container}>
        <div className={styles.loginHeader}>
          <h2 className={styles.head}>Забравена парола</h2>
          <CloseButton onClose={props.onClose} />
        </div>
        {resetSent ? (
          <p>Изпратен е линк за нулиране на паролата на вашия имейл.</p>
        ) : (
          <form className={styles.submitForm} onSubmit={handleResetPassword}>
            <TextField
              required
              label="Имейл"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailInput}
              margin="normal"
            />
            <button className={styles.loginBtn} type="submit">
              Изпрати
            </button>
          </form>
        )}
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
