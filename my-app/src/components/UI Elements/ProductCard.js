import { Button } from "@mui/material";
import styles from "./productCard.module.css";
import { useContext } from "react";
import CartContext from '../../store/cartContext'

const ProductsCard = ({ image, label, weight, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    const item = {
      id: Math.random().toString(), 
      label: label,
      price: price,
      weight: weight,
    };
    cartCtx.addItem(item);
  };

  return (
    <div className={styles.container}>
      <img className={styles.img} src={image} alt={label} />
      <p className={styles.title}>{label}</p>
      <div className={styles.infoSection}>
        <p className={styles.weight}>{weight}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <form className={styles.dishBtnSection}>
        <Button className={styles.dishBtn} variant="contained">
          Коментар
        </Button>
        <Button
          className={styles.dishBtn}
          variant="contained"
          onClick={addToCartHandler}
        >
          Добави
        </Button>
      </form>
    </div>
  );
};

export default ProductsCard;
