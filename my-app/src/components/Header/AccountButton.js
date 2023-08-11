import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./account.module.css";

const AccountButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <AccountCircleIcon
          style={{
            color: "var(--buttons-color)",
            fontSize: "35px",
          }}
        />
      </span>
      <span className={styles.text}> Your Account</span>
    </button>
  );
};

export default AccountButton;
