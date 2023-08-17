import styles from "./debitCard.module.css";

const DebitCard = () => {
  return (
    <form className={styles.submitForm}>
      <input
        className={styles.input}
        type="text"
        id="card"
        placeholder="Card Number"
      />
      <input
        className={styles.input}
        type="text"
        id="names"
        placeholder="Cardholder's Name"
      />
      <input
        className={styles.input}
        type="number"
        id="expiration"
        placeholder="Expiration"
      />
      <input
        className={styles.input}
        type="password"
        id="cvv"
        placeholder="CVV"
      />
    </form>
  );
};

export default DebitCard;
