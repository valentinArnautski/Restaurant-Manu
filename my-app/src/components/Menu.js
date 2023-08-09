import React, { useState } from "react";
import { Box, Button, ThemeProvider } from "@mui/material";
import styles from "./menu.module.css";
import { theme } from "./colorTheme";
import foodSections from "./Mock Data/FoodData";
import drinkSections from "./Mock Data/DrinksData";
import Header from "./Header/Header";
import FoodSelection from "./Food/FoodSelection";

export const Menu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSection, setSelectedSection] = useState(foodSections);

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu.label);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);

    if (menuItem === "Ястия") {
      setSelectedSection(foodSections);
    } else if (menuItem === "Напитки") {
      setSelectedSection(drinkSections);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.container}>
        <Header />

        {!selectedMenu && (
          <div>
            <div className={styles.menuNavContainer}>
              <Box className={styles.menuNavigation}>
                <Button
                  className={styles.btns}
                  variant={activeMenuItem === "Ястия" ? "contained" : "text"}
                  onClick={() => handleMenuItemClick("Ястия")}
                >
                  Ястия
                </Button>
                <Button
                  className={styles.btns}
                  variant={activeMenuItem === "Напитки" ? "contained" : "text"}
                  onClick={() => handleMenuItemClick("Напитки")}
                >
                  Напитки
                </Button>
                <Button
                  className={styles.btns}
                  variant={activeMenuItem === "Вино" ? "contained" : "text"}
                  onClick={() => handleMenuItemClick("Вино")}
                >
                  Вино
                </Button>
              </Box>
            </div>

            <Box
              className={styles.backgroundImage}
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)",
              }}
            >
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
          </div>
        )}

        {selectedMenu && (
          <FoodSelection
            selectedMenu={selectedMenu}
            foodSections={foodSections}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};
