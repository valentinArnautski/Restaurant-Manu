import React, { useState } from "react";
import styles from "./payment.module.css";
import PayPal from "./Paypal";
import DebitCard from "./DebitCard";

const Payment = (props) => {
  const [isPaypal, setIsPaypal] = useState(false);
  const [isCard, setIsCard] = useState(false);

  const paypalHandler = () => {
    setIsPaypal(true);
    setIsCard(false);
  };

  const redirectToPayPal = () => {
    const paypalUrl = "https://www.paypal.com";
    window.location.href = paypalUrl;
  };

  const cardHandler = () => {
    setIsPaypal(false);
    setIsCard(true);
  };

  return (
    <div>
      <div className={styles.container}>
        <label className={styles.tickBoxLabel}>
          <input
            className={styles.tickBox}
            type="checkbox"
            checked={isPaypal}
            onChange={paypalHandler}
          />
          Paypal
        </label>
        <img
          className={styles.img}
          src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo-500x281.png"
          alt="PayPal Logo"
        />
      </div>

      {isPaypal && <PayPal />}

      <div className={styles.container}>
        <label className={styles.tickBoxLabel}>
          <input
            className={styles.tickBox}
            type="checkbox"
            checked={isCard}
            onChange={cardHandler}
          />
          Debit / Credit card
        </label>
        <img
          className={styles.img2}
          src="https://icon-library.com/images/visa-mastercard-icon/visa-mastercard-icon-9.jpg"
          alt="Card Logo"
        />
      </div>
      {isCard && <DebitCard />}
    </div>
  );
};

export default Payment;
