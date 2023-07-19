import { Box } from "@mui/material";
import styles from "./menu.module.css";
import background from '../images/background.jpg'

export const Menu = () => {

    return (
       <Box className={styles.container}>
        <Box
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(https://wallpapercave.com/dwp1x/wp1874157.jpg)` }}
        >
        </Box>
        </Box>
    )
}