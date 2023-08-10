import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./cartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cartContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.length;

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <ShoppingCartIcon
          style={{
            color: "var(--buttons-color)",
            fontSize: "30px",
          }}
        />
      </span>
      <span className={styles.text}> Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
