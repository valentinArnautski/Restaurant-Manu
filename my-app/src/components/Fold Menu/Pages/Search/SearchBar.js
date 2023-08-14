import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./search.module.css";
import foodSections from "../../../Mock Data/FoodData";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../../../store/cartContext";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const cartCtx = useContext(CartContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (item) => {
    cartCtx.addItem({
      id: item.id,
      label: item.label,
      price: item.price,
    });
  };

  const filteredItems = searchTerm
    ? foodSections.flatMap((meal) =>
        meal.dishes.filter((item) =>
          item.label.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
      )
    : [];

  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        id="search"
        placeholder="Търси продукт"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className={styles.icon}>
        <FaSearch />
      </button>
      <button className={styles.icon} onClick={props.onCloseSearchBar}>
        X
      </button>

      {searchTerm && filteredItems.length > 0 && (
        <div className={styles.dropdown}>
          {filteredItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <p>{item.label}</p>
              <p className={styles.descr}>{item.weight}</p>
              <p className={styles.descr}>{item.price}</p>
              <button
                className={styles.descr}
                onClick={() => handleAddToCart(item)}
              >
                <ShoppingCartIcon />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
