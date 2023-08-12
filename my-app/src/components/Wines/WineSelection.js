import ProductsCard from "../UI Elements/ProductCard";
import styles from "./wines.module.css";

const WineSelection = ({ selectedMenu, wineSections, onShowComment }) => {
  return (
    <div className={styles.wineSection}>
      {wineSections
        .find((section) => section.label === selectedMenu)
        .wines.map((wine) => (
          <ProductsCard
            key={wine.label}
            label={wine.label}
            image={wine.image}
            weight={wine.weight}
            price={wine.price}
            onShowComment={onShowComment}
          />
        ))}
    </div>
  );
};

export default WineSelection;
