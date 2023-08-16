import React, { useState, useEffect } from "react";
import { Box, Button, ThemeProvider } from "@mui/material";
import styles from "../menu.module.css";
import { theme } from "../colorTheme";
import FoodSelection from "../Food/FoodSelection";
import DrinkSelection from "../Drinks/DrinksSelection";
import WineSelection from "../Wines/WineSelection";
import MenuContentBtns from "./MenuContentBtns";
import { getDrinks, getMeals, getWines } from "../../services/fetchService";

export const Menu = ({ onShowComment }) => {
  const [activeMenuItem, setActiveMenuItem] = useState("Ястия");
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [mealsData, setMealsData] = useState([]);
  const [drinksData, setDrinksData] = useState([]);
  const [winesData, setWinesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealsResponse = await getMeals();
        setMealsData(mealsResponse);

        const drinksResponse = await getDrinks();
        setDrinksData(drinksResponse);

        const winesResponse = await getWines();
        setWinesData(winesResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu.label);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setSelectedMenu(null);
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
                selectedSection={
                  activeMenuItem === "Напитки"
                    ? drinksData
                    : activeMenuItem === "Ястия"
                    ? mealsData
                    : activeMenuItem === "Вино"
                    ? winesData
                    : []
                }
                handleMenuSelect={handleMenuSelect}
              />
            )}
          </div>

          {selectedMenu &&
            (activeMenuItem === "Ястия" ? (
              <FoodSelection
                onShowComment={onShowComment}
                selectedMenu={selectedMenu}
                foodSections={mealsData}
              />
            ) : activeMenuItem === "Вино" ? (
              <WineSelection
                onShowComment={onShowComment}
                selectedMenu={selectedMenu}
                wineSections={winesData}
              />
            ) : (
              <DrinkSelection
                onShowComment={onShowComment}
                selectedMenu={selectedMenu}
                drinkSections={drinksData}
              />
            ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
