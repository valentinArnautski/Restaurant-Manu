import React from "react";
import { Box } from "@mui/material";
import styles from "../menu.module.css";

const MenuContentBtns = ({ selectedSection, handleMenuSelect }) => {
  const sections = Object.keys(selectedSection).map((sectionKey) => {
    const section = selectedSection[sectionKey];
    return { label: sectionKey, image: section.image };
  });

  return (
    <Box className={styles.menuBtnsContainer}>
      <div className={styles.sectionBtnsSection}>
        {sections.map((section) => (
          <div
            className={styles.sectionBtn}
            key={section.label}
            onClick={() => handleMenuSelect(section)}
          >
            <img
              src={section.image}
              alt={section.label}
              className={styles.img}
            />
            <p className={styles.label}>{section.label}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default MenuContentBtns;
