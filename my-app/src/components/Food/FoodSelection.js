import ProductsCard from "../UI Elements/ProductCard";
import styles from "./food.module.css";

const FoodSelection = ({ selectedMenu, foodSections, onShowComment }) => {
  const selectedSectionData = foodSections[selectedMenu];

  const dishes = {};

  for (const subsectionKey in selectedSectionData) {
    if (subsectionKey.startsWith("d")) {
      dishes[subsectionKey] = selectedSectionData[subsectionKey];
    }
  }

  return (
    <div className={styles.dishSection}>
      {Object.keys(dishes).map((dishKey) => {
        const dish = dishes[dishKey];
        return (
          <ProductsCard
            key={dishKey}
            image={dish.image}
            label={dish.label}
            weight={dish.weight}
            price={dish.price}
            onShowComment={onShowComment}
          />
        );
      })}
    </div>
  );
};
export default FoodSelection;
