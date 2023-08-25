import React from "react";
import { IconButton } from "@mui/material";
import { Cancel } from "@mui/icons-material";
import styles from "./closeButton.module.css"; // Import your custom styles

const CloseButton = ({ onClose }) => {
  return (
    <IconButton style={{ color: "var(--second-color)" }} onClick={onClose}>
      <Cancel />
    </IconButton>
  );
};

export default CloseButton;
