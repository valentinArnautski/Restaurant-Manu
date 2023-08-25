import { Button } from "@mui/material";
import {
  PersonOutline,
  ShoppingCart,
  LocalOffer,
  ExitToApp,
} from "@mui/icons-material";
import styles from "./manager.module.css";

const Manager = () => {
  return (
    <div className={styles.container}>
      <Button
        className={styles.button}
        variant="text"
        fullWidth
        startIcon={<PersonOutline className={styles.icon} fontSize="large" />}
      >
        Моят профил
      </Button>

      <Button
        className={styles.button}
        variant="text"
        fullWidth
        startIcon={<ShoppingCart className={styles.icon} />}
      >
        Кошница
      </Button>

      <Button
        className={styles.button}
        variant="text"
        fullWidth
        startIcon={<LocalOffer className={styles.icon} />}
      >
        Предложения
      </Button>
      <Button
        className={styles.button}
        variant="text"
        fullWidth
        startIcon={<ExitToApp className={styles.icon} />}
      >
        Изход
      </Button>
    </div>
  );
};

export default Manager;
