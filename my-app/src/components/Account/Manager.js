import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  PersonOutline,
  ShoppingCart,
  LocalOffer,
  ExitToApp,
} from "@mui/icons-material";
import styles from "./manager.module.css";
import Profile from "../AccountMenu/Profile";
import Deals from "../AccountMenu/Deals";
import Reservations from "../AccountMenu/Reservations"

const Manager = ({ onClose }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showDeals, setShowDeals] = useState(false);
  const [showReservations, setShowReservations] = useState(false);
  const [selectedButton, setSelectedButton] = useState(false);

  const handleExitButton = () => {
    localStorage.removeItem("token");
  };

  const handleMyProfile = () => {
    setShowProfile(true);
    setSelectedButton(true);
  };

  const handleDeals = () => {
    setShowDeals(true);
    setSelectedButton(true);
  };

  const handleReservations = () => {
    setShowReservations(true);
    setSelectedButton(true);
  };

  return (
    <div className={styles.container}>
      {!selectedButton && (
        <>
          <Button
            className={styles.button}
            variant="text"
            fullWidth
            startIcon={
              <PersonOutline className={styles.icon} fontSize="large" />
            }
            onClick={handleMyProfile}
          >
            Моят профил
          </Button>

          <Button
            className={styles.button}
            variant="text"
            fullWidth
            startIcon={<ShoppingCart className={styles.icon} />}
          >
            Кошница
          </Button>

          <Button
            className={styles.button}
            variant="text"
            fullWidth
            startIcon={<LocalOffer className={styles.icon} />}
            onClick={handleDeals}
          >
            Предложения
          </Button>

          <Button
            className={styles.button}
            variant="text"
            fullWidth
            startIcon={<ExitToApp className={styles.icon} />}
            onClick={() => {
              handleExitButton();
              onClose();
            }}
          >
            Изход
          </Button>
        </>
      )}

      {showProfile && <Profile />}
      {showDeals && <Deals />}
      {showReservations && <Reservations />}
    </div>
  );
};

export default Manager;
