import styles from "./food.module.css";
import { Box, Button, colors } from "@mui/material";

const FoodSelection = ({ selectedMenu, foodSections }) => {
  return (
    <div className={styles.dishSection}>
      {foodSections
        .find((section) => section.label === selectedMenu)
        .dishes.map((dish) => (
          <div className={styles.dishContainer} key={dish.label}>
            <img className={styles.dishImg} src={dish.image} alt={dish.label} />
            <p className={styles.dishTitle}>{dish.label}</p>
            <div className={styles.dishInfoSection}>
              <p className={styles.dishInfo}>{dish.weight}</p>
              <p className={styles.dishInfo}>{dish.price}</p>
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
        ))}
    </div>
  );
};

export default FoodSelection;
