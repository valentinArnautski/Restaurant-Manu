import ProductsCard from "../UI Elements/ProductCard";
import styles from "./wines.module.css";

const WineSelection = ({ selectedMenu, wineSections, onShowComment }) => {
  const selectedSectionData = wineSections[selectedMenu];

  const wines = {};

  for (const subsectionKey in selectedSectionData) {
    if (subsectionKey.startsWith("w")) {
      wines[subsectionKey] = selectedSectionData[subsectionKey];
    }
  }

  return (
    <div className={styles.wineSection}>
      {Object.keys(wines).map((wineKey) => {
        const wine = wines[wineKey];
        return (
          <ProductsCard
            key={wineKey}
            image={wine.image}
            label={wine.label}
            weight={wine.weight}
            price={wine.price}
            onShowComment={onShowComment}
          />
        );
      })}
    </div>
  );
};

export default WineSelection;
