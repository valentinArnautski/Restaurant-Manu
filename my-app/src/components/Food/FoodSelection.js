import ProductsCard from "../UI Elements/ProductCard";
import styles from "./food.module.css";
import { Box, Button, colors } from "@mui/material";

const FoodSelection = ({ selectedMenu, foodSections }) => {
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
          />
        ))}
    </div>
  );
};
export default FoodSelection;
