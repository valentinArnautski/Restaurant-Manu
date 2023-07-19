import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#ccc'
      },
      secondary: {
        main: "#ff9800", // orange color
        dark: "#ffd54f", // yellow color
        contrastText: "#000",
      },
      error: {
        main: red[500], // red color for delete button and errors
      },
    },
  });