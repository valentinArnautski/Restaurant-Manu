import React, { useState } from "react";
import { Box, Button, ThemeProvider } from "@mui/material";
import styles from "../menu.module.css";
import { theme } from "../colorTheme";
import foodSections from "../Mock Data/FoodData";
import drinkSections from "../Mock Data/DrinksData";
import wineSections from "../Mock Data/WineData";
import FoodSelection from "../Food/FoodSelection";
import DrinkSelection from "../Drinks/DrinksSelection";
import WineSelection from "../Wines/WineSelection";
import MenuContentBtns from "./MenuContentBtns";

export const Menu = ({ onShowComment }) => {
  const [activeMenuItem, setActiveMenuItem] = useState("Ястия");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSection, setSelectedSection] = useState(foodSections);

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu.label);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setSelectedMenu(null); // Reset the selected menu when a main menu category is clicked

    if (menuItem === "Ястия") {
      setSelectedSection(foodSections);
    } else if (menuItem === "Напитки") {
      setSelectedSection(drinkSections);
    } else if (menuItem === "Вино") {
      setSelectedSection(wineSections);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.container}>
        <Box
          className={styles.backgroundImage}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)",
          }}
        >
          <div className={styles.subheader}>
            <div className={styles.menuNavContainer}>
              <Box className={styles.menuNavigation}>
                <Button
                  className={styles.btns}
                  variant={activeMenuItem === "Напитки" ? "contained" : "text"}
                  onClick={() => handleMenuItemClick("Напитки")}
                >
                  Напитки
                </Button>
                <Button
                  className={styles.btns}
                  variant={activeMenuItem === "Ястия" ? "contained" : "text"}
                  onClick={() => handleMenuItemClick("Ястия")}
                >
                  Ястия
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

            {!selectedMenu && (
              <MenuContentBtns
                selectedSection={selectedSection}
                handleMenuSelect={handleMenuSelect}
              />
            )}
          </div>

          {selectedMenu &&
            (activeMenuItem === "Ястия" ? (
              <FoodSelection
                onShowComment={onShowComment}
                selectedMenu={selectedMenu}
                foodSections={foodSections}
              />
            ) : activeMenuItem === "Вино" ? (
              <WineSelection
                onShowComment={onShowComment}
                selectedMenu={selectedMenu}
                wineSections={wineSections}
              />
            ) : (
              <DrinkSelection
                onShowComment={onShowComment}
                selectedMenu={selectedMenu}
                drinkSections={drinkSections}
              />
            ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
