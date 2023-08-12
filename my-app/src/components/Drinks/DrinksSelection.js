import ProductsCard from "../UI Elements/ProductCard";
import styles from "./drinks.module.css";

const DrinkSelection = ({ selectedMenu, drinkSections, onShowComment }) => {
  return (
    <div className={styles.drinkSection}>
      {drinkSections
        .find((section) => section.label === selectedMenu)
        .drinks.map((drink) => (
          <ProductsCard
            key={drink.label}
            image={drink.image}
            label={drink.label}
            weight={drink.weight}
            price={drink.price}
            onShowComment={onShowComment}
          />
        ))}
    </div>
  );
};

export default DrinkSelection;
