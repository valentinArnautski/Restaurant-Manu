import ProductsCard from "../UI Elements/ProductCard";
import styles from "./food.module.css";

const FoodSelection = ({ selectedMenu, foodSections, onShowComment }) => {
  return (
    <div className={styles.dishSection}>
      {foodSections
        .find((section) => section.label === selectedMenu)
        .dishes.map((dish) => (
          <ProductsCard
            key={dish.label}
            image={dish.image}
            label={dish.label}
            weight={dish.weight}
            price={dish.price}
            onShowComment={onShowComment}
          />
        ))}
    </div>
  );
};
export default FoodSelection;
