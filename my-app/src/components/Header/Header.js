import { Box } from "@mui/material";
import styles from "./header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box className={styles.headerSection}>
      <div className={styles.menu}>
        <MenuIcon
          style={{
            color: "var(--buttons-color)",
            fontSize: "30px",
          }}
        />
      </div>
      <div className={styles.header}>
        <p className={styles.title}>Blankfactor</p>
      </div>
      <div className={styles.icons}>
        <AccountCircleIcon
          style={{
            color: "var(--buttons-color)",
            fontSize: "30px",
          }}
        />
        <ShoppingCartIcon
          style={{
            color: "var(--buttons-color)",
            fontSize: "30px",
          }}
        />
      </div>
    </Box>
  );
};

export default Header;
