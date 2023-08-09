import { Box, Button } from "@mui/material";
import drinkSections from "../Mock Data/DrinksData";

const Drinks = () => {
  return (
    <Box>
      {Object.entries(drinkSections).map(([key, value]) => (
        <Button key={key} variant="contained">
          {value}
        </Button>
      ))}
    </Box>
  );
};

export default Drinks;
