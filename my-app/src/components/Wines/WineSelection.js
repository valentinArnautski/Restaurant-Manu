import ProductsCard from "../UI Elements/ProductCard";
import styles from "./wines.module.css";

const WineSelection = ({ selectedMenu, wineSections }) => {
  return (
    <div className={styles.wineSection}>
      {wineSections
        .find((section) => section.label === selectedMenu)
        .wines.map((wine) => (
          <ProductsCard
            key={wine.label}
            label={wine.label}
            weight={wine.weight}
            price={wine.price}
          />
        ))}
    </div>
  );
};

export default WineSelection;
