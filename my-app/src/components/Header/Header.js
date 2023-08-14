import { Box, useThemeProps } from "@mui/material";
import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CartButton from "./CartButton";
import AccountButton from "./AccountButton";

const Header = (props) => {
  return (
    <Box className={styles.headerSection}>
      <div className={styles.menu}>
        <MenuIcon
          onClick={props.onShowFoldMenu}
          style={{
            color: "var(--buttons-color)",
            fontSize: "30px",
          }}
        />
      </div>
      <div className={styles.header}>
        <p className={styles.title} onClick={props.onReturnToMenu}>
          Blankfactor
        </p>
      </div>
      <div className={styles.icons}>
        <AccountButton onClick={props.onLogin} />
        <CartButton onClick={props.onShowCart} />
      </div>
    </Box>
  );
};

export default Header;
