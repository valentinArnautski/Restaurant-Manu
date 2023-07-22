import React, { useState } from 'react';
import { Box, Button, ThemeProvider } from '@mui/material';
import styles from './menu.module.css';
import { theme } from './colorTheme';
import foodSections from './mockData';
import SelectedMenu from './SelectedMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';



export const Menu = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('');
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuSelect = (menu) => {
        setSelectedMenu(menu.label)
    }

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box className={styles.container}>
                <Box className={styles.headerSection}>
                    <div className={styles.menu}>
                        <MenuIcon
                            style={{
                                color: 'var(--buttons-color)',
                                fontSize: '30px',
                            }}
                        />
                    </div>
                    <div className={styles.header}>
                        <p className={styles.title}>Blankfactor</p>
                    </div>
                    <div className={styles.icons}>
                        <AccountCircleIcon
                            style={{
                                color: 'var(--buttons-color)',
                                fontSize: '30px',
                            }}
                        />
                        <ShoppingCartIcon
                            style={{
                                color: 'var(--buttons-color)',
                                fontSize: '30px',
                            }}
                        />
                    </div>
                </Box>

                {!selectedMenu && (
                    <div>
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
                        >
                            <div className={styles.foodBtnsSection}>
                                {foodSections.map((section) => (
                                    <div className={styles.foodBtn} key={section.label} onClick={() => handleMenuSelect(section)}>
                                        <img src={section.image} alt={section.label} className={styles.img} />
                                        <p className={styles.label}>{section.label}</p>
                                    </div>
                                ))}
                            </div>
                        </Box>
                    </div>
                )}

                {selectedMenu && <SelectedMenu selectedMenu={selectedMenu} foodSections={foodSections} />}
            </Box>
        </ThemeProvider>
    );
};
