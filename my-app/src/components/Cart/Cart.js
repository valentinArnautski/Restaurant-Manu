import { useContext } from "react";
import Modal from "../UI Elements/Modal";
import styles from "./cart.module.css";
import CartContext from "../../store/cartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce((currentTotal, item) => {
    return currentTotal + parseFloat(item.price);
  }, 0);

  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={styles.cartList}>
      {cartCtx.items.map((item) => (
        <li className={styles.cartItem} key={item.id}>
          <span>{item.label}</span>
          <div className={styles.summary}>
            <span className={styles.price}>{item.price}</span>
            <button
              className={styles.removeItemBtn}
              onClick={() => cartCtx.removeItem(item.id)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
