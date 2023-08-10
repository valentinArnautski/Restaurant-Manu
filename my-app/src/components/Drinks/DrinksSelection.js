import ProductsCard from "../UI Elements/ProductCard";
import styles from "./drinks.module.css";

const DrinkSelection = ({ selectedMenu, drinkSections }) => {
  return (
    <div className={styles.drinkSection}>
      {drinkSections
        .find((section) => section.label === selectedMenu)
        .drinks.map((drink) => (
          <ProductsCard
            key={drink.label}
            label={drink.label}
            weight={drink.weight}
            price={drink.price}
          />
        ))}
    </div>
  );
};

export default DrinkSelection;
