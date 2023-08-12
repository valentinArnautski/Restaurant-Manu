import Modal from "../UI Elements/Modal";
import styles from "./comments.module.css";

const Comment = (props) => {
  return (
    <Modal>
      <div>
        <div className={styles.commentsHeader}>
          <h2 className={styles.head}>Оставете Коментар</h2>
          <button className={styles.closeBtn} onClick={props.onClose}>
            X
          </button>
        </div>
        <form className={styles.submitForm}>
          <input
            className={styles.input}
            type="text"
            id="comment"
            placeholder="Коментар"
          />
          <button className={styles.loginBtn} type="submit">
            Изпрати
          </button>
        </form>
        <div className={styles.bottomPart}>
          <span>Ако имате въпроси свържете се с нас?</span>
        </div>
      </div>
    </Modal>
  );
};

export default Comment;
