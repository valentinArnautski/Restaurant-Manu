import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./cartButton.module.css";

const CartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <ShoppingCartIcon
          style={{
            color: "var(--buttons-color)",
            fontSize: "30px",
          }}
        />
      </span>
      <span className={styles.text}> Your cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default CartButton;
