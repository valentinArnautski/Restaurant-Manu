import React, { useState } from "react";
import styles from "./debitCard.module.css";

const DebitCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCVV] = useState("");
  const [errors, setErrors] = useState({});
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTypingTimeout = setTimeout(() => {
      if (id === "card") {
        const isValidCardNumber = /^[0-9]{13,19}$/.test(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          cardNumber: !isValidCardNumber,
        }));
      } else if (id === "expiration") {
        const currentDate = new Date();
        const [month, year] = value.split("/");
        const isValidExpiry =
          /^[0-9]{2}\/[0-9]{2}$/.test(value) &&
          parseInt(year, 10) >= currentDate.getFullYear() % 100 &&
          parseInt(month, 10) >= currentDate.getMonth() + 1;
        setErrors((prevErrors) => ({
          ...prevErrors,
          expiration: !isValidExpiry,
        }));
      } else if (id === "cvv") {
        const isValidCVV = /^[0-9]{3,4}$/.test(value);
        setErrors((prevErrors) => ({ ...prevErrors, cvv: !isValidCVV }));
      }
    }, 2000);

    setCardNumber(id === "card" ? value : cardNumber);
    setCardHolderName(id === "names" ? value : cardHolderName);
    setExpiration(id === "expiration" ? value : expiration);
    setCVV(id === "cvv" ? value : cvv);
    setTypingTimeout(newTypingTimeout);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.cardNumber && !errors.expiration && !errors.cvv) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  return (
    <form className={styles.submitForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${errors.cardNumber ? styles.error : ""}`}
          type="text"
          id="card"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleInputChange}
        />
        {errors.cardNumber && (
          <p className={styles.errorText}>Invalid card number</p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          id="names"
          placeholder="Cardholder's Name"
          value={cardHolderName}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${errors.expiration ? styles.error : ""}`}
          type="text"
          id="expiration"
          placeholder="Expiration (MM/YY)"
          value={expiration}
          onChange={handleInputChange}
        />
        {errors.expiration && (
          <p className={styles.errorText}>Invalid expiration date</p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${errors.cvv ? styles.error : ""}`}
          type="password"
          id="cvv"
          placeholder="CVV"
          value={cvv}
          onChange={handleInputChange}
        />
        {errors.cvv && <p className={styles.errorText}>Invalid CVV</p>}
      </div>
    </form>
  );
};

export default DebitCard;
