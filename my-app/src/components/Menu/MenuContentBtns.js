import React from "react";
import { Box } from "@mui/material";
import styles from "../menu.module.css";

const MenuContentBtns = ({ selectedSection, handleMenuSelect }) => {
  return (
    <Box>
      <div className={styles.sectionBtnsSection}>
        {selectedSection.map((section) => (
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
