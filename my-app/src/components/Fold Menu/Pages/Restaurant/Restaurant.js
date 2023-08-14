import { Box } from "@mui/material";
import styles from "./restaurant.module.css";

const Restaurant = (props) => {
  return (
    <Box
      className={styles.backgroundImage}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)",
      }}
    >
      <div className={styles.container}>
        <div className={styles.restaurantContainer}>
          <div className={styles.contact}>
            <h3 className={styles.contactHeader}>Контакт</h3>
            <p className={styles.contactInfo}>088 575 3363</p>
            <p className={styles.contactInfo}>Luxury Restaurant</p>
          </div>

          <div className={styles.contact}>
            <h3 className={styles.contactHeader}>Работно време</h3>
            <p className={styles.contactInfo}>Понеделник - Неделя</p>
            <p className={styles.contactInfo}>08:00 - 23:00</p>
          </div>

          <div className={styles.contact}>
            <h3 className={styles.contactHeader}>Начин на плащане</h3>
            <p className={styles.contactInfo}>В брой</p>
            <p className={styles.contactInfo}>С карта само в обекта</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Restaurant;
