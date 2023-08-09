import { Box, Button } from "@mui/material";
import styles from "./wines.module.css";

const WineSelection = ({ selectedMenu, wineSections }) => {
  return (
    <Box>
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
                <Button className={styles.wineBtn} variant="contained">
                  Коментар
                </Button>

                <Button className={styles.wineBtn} variant="contained">
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
