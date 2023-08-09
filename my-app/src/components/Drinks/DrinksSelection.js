import { Box, Button } from "@mui/material";
import styles from "./drinks.module.css";

const DrinkSelection = ({ selectedMenu, drinkSections }) => {
  return (
    <Box>
      <div className={styles.drinkSection}>
        {drinkSections
          .find((section) => section.label === selectedMenu)
          .drinks.map((drink) => (
            <div className={styles.drinkContainer} key={drink.label}>
              <p className={styles.drinkTitle}>{drink.label}</p>
              <div className={styles.drinkInfoSection}>
                <p className={styles.drinkInfo}>{drink.weight}</p>
                <p className={styles.drinkInfo}>{drink.price}</p>
              </div>

              <div className={styles.drinkBtnSection}>
                <Button className={styles.drinkBtn} variant="contained">
                  Коментар
                </Button>

                <Button className={styles.drinkBtn} variant="contained">
                  Добави
                </Button>
              </div>
            </div>
          ))}
      </div>
    </Box>
  );
};

export default DrinkSelection;
