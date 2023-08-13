import { Box } from "@mui/material";
import styles from "./review.module.css";

const Review = () => {
  return (
    <Box
      className={styles.backgroundImage}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)",
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.header}>Отделете минутка, за да ни оцените</h2>

        <div className={styles.reviewContainer}>
          <div className={styles.question}>
            <p className={styles.badge}>1</p>
            <p className={styles.title}>Как бихте оценили ресторанта ни?</p>
          </div>
          <div className={styles.emojiContainer}>
            <button className={styles.emojiButton}>😞</button>
            <button className={styles.emojiButton}>😕</button>
            <button className={styles.emojiButton}>😐</button>
            <button className={styles.emojiButton}>😃</button>
            <button className={styles.emojiButton}>😁</button>
          </div>

          <div className={styles.question}>
            <p className={styles.badge}>2</p>
            <p className={styles.title}>
              Бихте ли използвали приложението ни отново?
            </p>
          </div>
          <div className={styles.yesNoContainer}>
            <button className={styles.yesNoButton}>Да</button>
            <button className={styles.yesNoButton}>Не</button>
          </div>

          <div className={styles.question}>
            <p className={styles.badge}>3</p>
            <p className={styles.title}>Имате ли препоръки към нас?</p>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Вашият коментар тук..."
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Review;
