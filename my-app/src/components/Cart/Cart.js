import Modal from "../UI Elements/Modal";
import styles from "./cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles.cartItems}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.22 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
