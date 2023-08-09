import { Box, Button } from "@mui/material";
import styles from "./wines.module.css";

const WineSelection = ({ selectedMenu, wineSections }) => {
  return (
    <Box
      className={styles.backgroundImage}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)",
      }}
    >
      <div className={styles.wineSection}>
        {wineSections
          .find((section) => section.label === selectedMenu)
          .wines.map((wine) => (
            <div className={styles.wineContainer} key={wine.label}>
              <p className={styles.wineTitle}>{wine.label}</p>
              <div className={styles.wineInfoSection}>
                <p className={styles.wineInfo}>{wine.weight}</p>
                <p className={styles.wineInfo}>{wine.price}</p>
              </div>
              <div className={styles.wineBtnSection}>
                <Button
                  className={styles.wineBtn}
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
                  className={styles.wineBtn}
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

export default WineSelection;
