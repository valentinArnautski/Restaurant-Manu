import React, { useState } from 'react';
import { Box, Button, ThemeProvider } from '@mui/material';
import styles from './menu.module.css';
import { theme } from './colorTheme';

export const Menu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box className={styles.container}>
      <Box className={styles.header}>
        <h2>Blankfactor</h2>
      </Box>

      <div className={styles.menuNavContainer}>
        <Box className={styles.menuNavigation}>
          <Button
            className={styles.btns}
            variant={activeMenuItem === 'Ястия' ? 'contained' : 'text'}
            onClick={() => handleMenuItemClick('Ястия')}
          >
            Ястия
          </Button>
          <Button
            className={styles.btns}
            variant={activeMenuItem === 'Напитки' ? 'contained' : 'text'}
            onClick={() => handleMenuItemClick('Напитки')}
          >
            Напитки
          </Button>
          <Button
            className={styles.btns}
            variant={activeMenuItem === 'Вино' ? 'contained' : 'text'}
            onClick={() => handleMenuItemClick('Вино')}
          >
            Вино
          </Button>
        </Box>
      </div>

      <Box
        className={styles.backgroundImage}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)',
        }}
      ></Box>
    </Box>
    </ThemeProvider>
  );
};
