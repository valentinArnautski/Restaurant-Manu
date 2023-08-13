import styles from "./restaurant.module.css";

const Restaurant = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>Logo</span>
      <h1>Restaurant</h1>
      <p>Paragrapf</p>
    </div>
  );
};

export default Restaurant;
