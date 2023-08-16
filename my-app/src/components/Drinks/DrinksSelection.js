import ProductsCard from "../UI Elements/ProductCard";
import styles from "./drinks.module.css";

const DrinkSelection = ({ selectedMenu, drinkSections, onShowComment }) => {
  const selectedSectionData = drinkSections[selectedMenu];

  const drinks = {};

  for (const subsectionKey in selectedSectionData) {
    if (subsectionKey.startsWith("d")) {
      drinks[subsectionKey] = selectedSectionData[subsectionKey];
    }
  }
  return (
    <div className={styles.drinkSection}>
      {Object.keys(drinks).map((drinkKey) => {
        const drink = drinks[drinkKey];
        return (
          <ProductsCard
            key={drinkKey}
            image={drink.image}
            label={drink.label}
            weight={drink.weight}
            price={drink.price}
            onShowComment={onShowComment}
          />
        );
      })}
    </div>
  );
};

export default DrinkSelection;
