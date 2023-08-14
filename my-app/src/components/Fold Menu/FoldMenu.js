import { FaSearch } from "react-icons/fa";
import { MdRestaurant, MdRateReview } from "react-icons/md";
import { IoIosInformation } from "react-icons/io";
import styles from "./foldMenu.module.css";

const FoldMenu = (props) => {
  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div className={styles.container} onClick={handleClose}>
      <div className={styles.buttonContainer}>
        <FaSearch className={styles.icon} />
        <button className={styles.button} onClick={props.onShowSearchBar}>
          Търсене на продукт
        </button>
      </div>

      <div className={styles.buttonContainer}>
        <MdRestaurant className={styles.icon} />
        <button className={styles.button} onClick={props.onShowRestaurant}>
          Blankfactor Beach
        </button>
      </div>

      <div className={styles.buttonContainer}>
        <MdRateReview className={styles.icon} />
        <button className={styles.button} onClick={props.onShowReviews}>
          Reviews
        </button>
      </div>

      <div className={styles.buttonContainer}>
        <IoIosInformation className={styles.iconI} />
        <button className={styles.button} onClick={props.onReturnToMenu}>
          Menu
        </button>
      </div>
    </div>
  );
};

export default FoldMenu;
