import { FaSearch } from "react-icons/fa";
import styles from "./search.module.css";

const SearchBar = (props) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        id="search"
        placeholder="Търси продукт"
      />
      <button className={styles.icon}>
        <FaSearch />
      </button>
      <button className={styles.icon}>X</button>
    </div>
  );
};

export default SearchBar;
