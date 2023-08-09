import { Box, Button } from "@mui/material";
import wineData from "../Mock Data/WineData";

const Wines = () => {
  return (
    <Box>
      {Object.entries(wineData).map(([key, value]) => (
        <Button key={key} variant="contained">
          {value}
        </Button>
      ))}
    </Box>
  );
};
export default Wines;
