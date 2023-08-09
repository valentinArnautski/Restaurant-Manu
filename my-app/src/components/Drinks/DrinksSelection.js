import { Box, Button } from "@mui/material";
import styles from "./drinks.module.css";

const DrinkSelection = ({ selectedMenu, drinkSections }) => {
  return (
    <Box
      className={styles.backgroundImage}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)",
      }}
    >
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
                <Button
                  className={styles.drinkBtn}
                  style={{
                    background: "var(--primary-color)",
                    color: "black",
                    fontWeight: "bold",
                    margin: "0 4%",
                  }}
                  variant="contained"
                >
                  Коментар
                </Button>

                <Button
                  className={styles.drinkBtn}
                  variant="contained"
                  style={{
                    background: "var(--primary-color)",
                    color: "black",
                    fontWeight: "bold",
                    margin: "0 4%",
                  }}
                >
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
