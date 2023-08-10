import { Button } from "@mui/material";
import styles from "./productCard.module.css";

const ProductsCard = ({ image, label, weight, price }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={image} alt={label} />
      <p className={styles.title}>{label}</p>
      <div className={styles.infoSection}>
        <p className={styles.weight}>{weight}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div className={styles.dishBtnSection}>
        <Button className={styles.dishBtn} variant="contained">
          Коментар
        </Button>
        <Button className={styles.dishBtn} variant="contained">
          Добави
        </Button>
      </div>
    </div>
  );
};

export default ProductsCard;
