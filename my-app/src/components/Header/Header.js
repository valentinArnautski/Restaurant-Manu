import { Box } from "@mui/material";
import styles from "./header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CartButton from "./CartButton";

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
        <CartButton />
      </div>
    </Box>
  );
};

export default Header;
